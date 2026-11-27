from datetime import datetime, timezone
from dataclasses import dataclass, field, asdict


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


@dataclass
class UserProfile:
    """Optional user account for saving progress, levels, and preferred Hindi layout."""
    id: int | None
    identifier: str  # Mobile, email, or username
    display_name: str
    preferred_layout: str = "krutidev"
    created_at: str = field(default_factory=utc_now_iso)

    def to_dict(self) -> dict:
        return asdict(self)


@dataclass
class TypingProgressRecord:
    """Stores a student's lesson, game, practice, or exam attempt when logged in."""
    id: int | None
    user_id: int
    section: str  # "learn", "games", "practice", "exam"
    layout_id: str  # "krutidev", "inscript", "remington_gail", "vedmata", "typescript"
    level_or_set: str
    wpm: float = 0.0
    accuracy: float = 100.0
    typed_chars: int = 0
    completed: bool = False
    updated_at: str = field(default_factory=utc_now_iso)

    def to_dict(self) -> dict:
        return asdict(self)