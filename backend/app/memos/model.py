# imports
import uuid
from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database.base import BaseModel
from typing import TYPE_CHECKING


if TYPE_CHECKING:
    from app.users.model import User


# defining memo model
class Memo(BaseModel):
    __tablename__ = "memos"

    id: Mapped[str] = mapped_column(
        String(36),
        primary_key=True,
        default=lambda: str(uuid.uuid4()),
        unique=True,
        index=True,
    )
    title: Mapped[str] = mapped_column(String, nullable=False, index=True)
    content: Mapped[str] = mapped_column(String, nullable=False)
    user_id: Mapped[str] = mapped_column(
        String(36), ForeignKey("users.id", ondelete="CASCADE"), nullable=False
    )

    # relation
    user: Mapped["User"] = relationship("User", back_populates="memos")
