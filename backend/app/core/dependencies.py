from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.database.database import get_db
from app.core.schemas import TokenData
from app.core.security import decode_Access_Token
from app.users.model import User as UserModel

# OAuth2PasswordBearer is a dependency that expects a Bearer token in the Authorization header
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


# dependency to get current user
async def get_Current_User(
    token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_db)
) -> UserModel:
    """
    Decodes the JWT token and retrieves the authenticated user
    """

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = decode_Access_Token(token)
        user_id = payload.get("sub")
        if not isinstance(user_id, str):
            raise credentials_exception

        # user_id is guaranteed to be a str here

        token_data = TokenData(user_id=user_id)
    except JWTError:
        raise credentials_exception

    # retrieve the user data from the database
    user = await db.scalar(select(UserModel).filter(UserModel.id == token_data.user_id))

    if user is None:
        raise credentials_exception

    # check is active
    # if not user.is_active:
    #     raise HTTPException(
    #         status_code=status.HTTP_403_FORBIDDEN, detail="user is not active/verified"
    #     )

    return user
