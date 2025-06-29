from sqlalchemy.ext.asyncio import AsyncSession
from app.users.model import User as UserModel
from app.core.schemas import UserUpdate


# user update function
async def update_User(
    db: AsyncSession, user: UserModel, update_data: UserUpdate
) -> UserModel:
    update_fields = update_data.model_dump(exclude_unset=True)

    for field, value in update_fields.items():
        setattr(user, field, value)

    await db.commit()
    await db.refresh(user)
    return user


# update email

# update password
