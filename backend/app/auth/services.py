# imports
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, insert
from app.users.model import User as UserModel
from app.core.security import hash_Password, verify_Password
from app.core.schemas import User


# db service functions
async def create_New_User(db: AsyncSession, user_data: User) -> UserModel:
    """
    Creates a new user in database
    """

    # hash password before storing to db
    password_hash = hash_Password(user_data.password)

    user_dict = {
        "first_name": user_data.first_name,
        "last_name": user_data.last_name,
        "user_name": user_data.user_name,
        "email": user_data.email,
        "password": password_hash,
    }

    user_data_db = (
        await db.scalars(insert(UserModel).returning(UserModel), [user_dict])
    ).one()

    await db.commit()
    await db.refresh(user_data_db)

    return user_data_db


async def get_User_by_Username(db: AsyncSession, user_name: str) -> UserModel | None:
    """
    Retrieves user by username
    """

    return await db.scalar(select(UserModel).filter(UserModel.user_name == user_name))


async def get_User_by_Email(db: AsyncSession, email: str) -> UserModel | None:
    """
    Retrieves user by email
    """

    return await db.scalar(select(UserModel).filter(UserModel.email == email))


# authenticate user function (service function)
async def authenticate_User(
    db: AsyncSession, username: str, password: str
) -> UserModel | None:
    """
    Authenticate a user by username and password
    """

    user = await get_User_by_Username(db, user_name=username)

    if not user:
        return None
    if not verify_Password(password, user.password):
        return None

    # if everything is okay
    return user
