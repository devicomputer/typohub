import os


class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY", "typohub-dev-secret-change-in-prod")
    SITE_NAME = "Typo Hub"
    DOMAIN = "typohub.in"

    # Database: defaults to local SQLite; override with PostgreSQL/Supabase URL when needed
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))
    DATABASE_URL = os.environ.get(
        "DATABASE_URL",
        f"sqlite:///{os.path.join(BASE_DIR, 'typohub.db')}",
    )

    # Primary model is Guest-first & Ad-supported; login is optional for saving progress
    GUEST_MODE_DEFAULT = True
    OPTIONAL_LOGIN_ENABLED = True
    ADS_ENABLED = os.environ.get("ADS_ENABLED", "true").lower() == "true"

    AD_SLOTS = {
        "header_banner": os.environ.get("AD_SLOT_HEADER", "header-banner"),
        "home_mid_banner": os.environ.get("AD_SLOT_HOME_MID", "home-mid-banner"),
        "learn_bottom_banner": os.environ.get("AD_SLOT_LEARN_BOTTOM", "learn-bottom-banner"),
        "games_bottom_banner": os.environ.get("AD_SLOT_GAMES_BOTTOM", "games-bottom-banner"),
    }

    SUPPORTED_LAYOUTS = (
        "krutidev",
        "inscript",
        "remington_gail",
        "vedmata",
        "typescript",
    )