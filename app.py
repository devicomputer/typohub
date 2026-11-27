import sqlite3
from flask import Flask, jsonify, redirect, render_template, request, session, url_for
from config import Config
from layouts.layout_engine import list_layouts

app = Flask(__name__)
app.config.from_object(Config)

GAMES_CATALOG = [
    {
        "slug": "nitro-race",
        "title": "Nitro Type GP",
        "category": "Speed Race",
        "badge": "4-Car AI Race",
        "skill": "Passage Speed & WPM",
        "description": "Race against 3 adaptive AI rivals across a 4-lane track. Maintain a 10+ keystroke streak to ignite Nitro Boost and take 1st place.",
        "duration": "1–2 Min",
        "accent": "blue",
    },
    {
        "slug": "meteor-defense",
        "title": "Meteor Defense",
        "category": "Reflex Shooter",
        "badge": "Endless Waves",
        "skill": "Word Recognition & Reflex",
        "description": "Intercept incoming Hindi word meteors with your auto-locking laser turret before they breach your shield. Speed scales with every wave.",
        "duration": "Wave Survival",
        "accent": "indigo",
    },
    {
        "slug": "tug-of-war",
        "title": "Speed Tug-of-War",
        "category": "1v1 Stamina Duel",
        "badge": "Head-to-Head",
        "skill": "Continuous Flow & Rhythm",
        "description": "Go head-to-head against a relentless AI bot. Every accurate word pulls the energy rope to your side—hesitate and the bot drags you back.",
        "duration": "Fast Duel",
        "accent": "rose",
    },
]

GAMES_BY_SLUG = {g["slug"]: g for g in GAMES_CATALOG}


def get_db_path() -> str:
    db_url = app.config.get("DATABASE_URL", "")
    if db_url.startswith("sqlite:///"):
        return db_url.replace("sqlite:///", "", 1)
    return "typohub.db"


def get_db_connection():
    conn = sqlite3.connect(get_db_path())
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                identifier TEXT UNIQUE NOT NULL,
                display_name TEXT NOT NULL,
                preferred_layout TEXT NOT NULL DEFAULT 'krutidev',
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS progress_logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                section TEXT NOT NULL,
                layout_id TEXT NOT NULL,
                level_or_set TEXT NOT NULL,
                wpm REAL NOT NULL DEFAULT 0.0,
                accuracy REAL NOT NULL DEFAULT 100.0,
                typed_chars INTEGER NOT NULL DEFAULT 0,
                completed INTEGER NOT NULL DEFAULT 0,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            )
            """
        )
        conn.commit()


init_db()


def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return None
    with get_db_connection() as conn:
        row = conn.execute(
            "SELECT id, identifier, display_name, preferred_layout FROM users WHERE id = ?",
            (user_id,),
        ).fetchone()
    return dict(row) if row else None


def resolve_layout(default_layout: str = "krutidev") -> str:
    req_layout = (request.args.get("layout") or "").strip()
    if req_layout in app.config["SUPPORTED_LAYOUTS"]:
        return req_layout
    user = current_user()
    if user and user.get("preferred_layout") in app.config["SUPPORTED_LAYOUTS"]:
        return user["preferred_layout"]
    return default_layout


@app.context_processor
def inject_globals():
    return {
        "site_name": app.config["SITE_NAME"],
        "domain": app.config["DOMAIN"],
        "ads_enabled": app.config["ADS_ENABLED"],
        "ad_slots": app.config["AD_SLOTS"],
        "active_user": current_user(),
        "available_layouts": list_layouts(),
    }


@app.route("/")
def home():
    return render_template(
        "index.html",
        active_page="home",
        page_title="TypoHub — Professional Hindi & Exam Typing Platform",
    )


@app.route("/learn")
def learn():
    return render_template(
        "learn.html",
        active_page="learn",
        initial_layout=resolve_layout(),
        page_title="Guided Lessons — TypoHub",
    )


@app.route("/games")
def games():
    return render_template(
        "games.html",
        active_page="games",
        initial_layout=resolve_layout(),
        games=GAMES_CATALOG,
        page_title="Typing Games — TypoHub",
    )


@app.route("/games/<game_slug>")
def play_game(game_slug: str):
    game = GAMES_BY_SLUG.get(game_slug)
    if not game:
        return redirect(url_for("games"))
    return render_template(
        "game_play.html",
        active_page="games",
        game=game,
        initial_layout=resolve_layout(),
        page_title=f"{game['title']} — TypoHub Games",
    )


@app.route("/practice")
def practice():
    return render_template(
        "practice.html",
        active_page="practice",
        initial_layout=resolve_layout(),
        page_title="Practice & Exam Arena — TypoHub",
    )


@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        identifier = (request.form.get("identifier") or "").strip()
        display_name = (request.form.get("display_name") or "").strip()
        preferred_layout = (request.form.get("preferred_layout") or "krutidev").strip()

        if preferred_layout not in app.config["SUPPORTED_LAYOUTS"]:
            preferred_layout = "krutidev"

        if not identifier:
            error = "Please enter your mobile number, email, or username."
        else:
            name_to_use = display_name or identifier
            with get_db_connection() as conn:
                existing = conn.execute(
                    "SELECT id FROM users WHERE identifier = ?",
                    (identifier,),
                ).fetchone()
                if existing:
                    user_id = existing["id"]
                    conn.execute(
                        "UPDATE users SET display_name = ?, preferred_layout = ? WHERE id = ?",
                        (name_to_use, preferred_layout, user_id),
                    )
                else:
                    cursor = conn.execute(
                        "INSERT INTO users (identifier, display_name, preferred_layout) VALUES (?, ?, ?)",
                        (identifier, name_to_use, preferred_layout),
                    )
                    user_id = cursor.lastrowid
                conn.commit()

            session["user_id"] = user_id
            return redirect(url_for("practice"))

    recent_progress = []
    stats = {"sessions": 0, "best_wpm": 0, "avg_accuracy": 100}
    user = current_user()
    if user:
        with get_db_connection() as conn:
            rows = conn.execute(
                """
                SELECT section, layout_id, level_or_set, wpm, accuracy, typed_chars, completed, updated_at
                FROM progress_logs
                WHERE user_id = ?
                ORDER BY id DESC
                LIMIT 12
                """,
                (user["id"],),
            ).fetchall()
            recent_progress = [dict(r) for r in rows]

            agg = conn.execute(
                """
                SELECT COUNT(*) AS cnt, COALESCE(MAX(wpm), 0) AS max_wpm, COALESCE(AVG(accuracy), 100) AS avg_acc
                FROM progress_logs
                WHERE user_id = ?
                """,
                (user["id"],),
            ).fetchone()
            if agg:
                stats = {
                    "sessions": int(agg["cnt"] or 0),
                    "best_wpm": int(round(agg["max_wpm"] or 0)),
                    "avg_accuracy": int(round(agg["avg_acc"] or 100)),
                }

    return render_template(
        "login.html",
        active_page="login",
        page_title="Account & Progress — TypoHub",
        error=error,
        recent_progress=recent_progress,
        stats=stats,
    )


@app.route("/logout", methods=["POST"])
def logout():
    session.pop("user_id", None)
    return redirect(url_for("home"))


@app.post("/api/progress")
def save_progress():
    user = current_user()
    if not user:
        return jsonify({
            "saved": False,
            "guest_mode": True,
            "message": "Guest mode active. Sign in optionally to sync progress.",
        }), 200

    data = request.get_json(silent=True) or {}
    section = str(data.get("section") or "practice")[:32]
    layout_id = str(data.get("layout_id") or user.get("preferred_layout") or "krutidev")[:32]
    level_or_set = str(data.get("level_or_set") or "default")[:64]
    wpm = float(data.get("wpm") or 0.0)
    accuracy = float(data.get("accuracy") or 100.0)
    typed_chars = int(data.get("typed_chars") or 0)
    completed = 1 if data.get("completed") else 0

    with get_db_connection() as conn:
        conn.execute(
            """
            INSERT INTO progress_logs
                (user_id, section, layout_id, level_or_set, wpm, accuracy, typed_chars, completed)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (user["id"], section, layout_id, level_or_set, wpm, accuracy, typed_chars, completed),
        )
        conn.commit()

    return jsonify({"saved": True, "user": user["display_name"]}), 201


if __name__ == "__main__":
    app.run(debug=True)