# imports
from fastapi import APIRouter, Depends, status
from app.core.dependencies import get_Current_User
from app.core.schemas import UserResponse, UserUpdate
from app.users.model import User as UserModel
from sqlalchemy.ext.asyncio import AsyncSession
from app.users.services import update_User
from app.database.database import get_db

# defining router
router = APIRouter()


# setting up routes
@router.get("/me", status_code=status.HTTP_200_OK, response_model=UserResponse)
async def read_users_me(current_user: UserModel = Depends(get_Current_User)):
    """
    Retrieves the current authenticated user
    """

    return current_user


@router.patch("/me", status_code=status.HTTP_200_OK)
async def update_me(
    update_data: UserUpdate,
    current_user: UserModel = Depends(get_Current_User),
    db: AsyncSession = Depends(get_db),
):
    update_user = await update_User(db, current_user, update_data)
    return update_user
