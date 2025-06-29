# imports
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.schemas import User, UserResponse, Token
from app.auth.services import (
    create_New_User,
    get_User_by_Email,
    get_User_by_Username,
    authenticate_User,
)
from app.database.database import get_db
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from app.core.config import settings
from app.core.security import create_Access_Token

# defining router
router = APIRouter()


# setting up routes
@router.post(
    "/signup", status_code=status.HTTP_201_CREATED, response_model=UserResponse
)
async def sign_up(user: User, db: AsyncSession = Depends(get_db)):
    """
    Registers a new user
    """

    # check first for the user_name and email already exists or not
    db_user_by_user_name = await get_User_by_Username(db, user_name=user.user_name)

    if db_user_by_user_name:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Username already registered!"
        )

    db_user_by_email = await get_User_by_Email(db, email=user.email)

    if db_user_by_email:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Email already registered!"
        )

    # create the user using the service function
    db_new_user = await create_New_User(db, user_data=user)

    return db_new_user


@router.post("/login", status_code=status.HTTP_200_OK, response_model=Token)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)
):
    """
    Authenticate a user and returns an access token
    """

    user = await authenticate_User(
        db, username=form_data.username, password=form_data.password
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="incorrect username and password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # checking user is_active status
    # if not user.is_active:
    #     raise HTTPException(
    #         status_code=status.HTTP_403_FORBIDDEN, detail="user is not active/verified"
    #     )

    access_token_expires = timedelta(minutes=settings.access_token_expire_minutes)
    access_token = create_Access_Token(
        data={"sub": user.id},
        expires_delta=access_token_expires,
    )
    return {"access_token": access_token, "token_type": "bearer"}
