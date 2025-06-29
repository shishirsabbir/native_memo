# imports
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.dependencies import get_Current_User
from app.core.schemas import Memo, MemoResponse, MemoUpdate
from app.database.database import get_db
from app.users.model import User as UserModel
from app.memos.services import (
    add_Memo,
    get_Memos,
    get_Memo_By_ID,
    update_Memo,
    delete_Memo,
)


# defiing router
router = APIRouter()


# setting up routes
@router.get("/", status_code=status.HTTP_200_OK, response_model=list[MemoResponse])
async def get_user_memos(
    db: AsyncSession = Depends(get_db),
    current_user: UserModel = Depends(get_Current_User),
):
    return await get_Memos(db, current_user)


@router.get("/{memo_id}", status_code=status.HTTP_200_OK, response_model=MemoResponse)
async def get_memo(
    memo_id: str,
    db: AsyncSession = Depends(get_db),
    current_user: UserModel = Depends(get_Current_User),
):
    memo = await get_Memo_By_ID(db, memo_id, current_user)

    if not memo:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"memo not found with id: {memo_id}",
        )

    return memo


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=MemoResponse)
async def create_memo(
    memo_data: Memo,
    db: AsyncSession = Depends(get_db),
    current_user: UserModel = Depends(get_Current_User),
):
    return await add_Memo(db, memo_data, current_user)


@router.patch("/{memo_id}", status_code=status.HTTP_200_OK, response_model=MemoResponse)
async def update_memo(
    memo_id: str,
    update_data: MemoUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: UserModel = Depends(get_Current_User),
):
    memo = await get_Memo_By_ID(db, memo_id, current_user)

    if not memo:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"memo not found with id: {memo_id}",
        )

    updated_memo = await update_Memo(db, memo, update_data)
    return updated_memo


@router.delete("/{memo_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_memo(
    memo_id: str,
    db: AsyncSession = Depends(get_db),
    current_user: UserModel = Depends(get_Current_User),
):
    memo = await get_Memo_By_ID(db, memo_id, current_user)

    if not memo:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"memo not found with id: {memo_id}",
        )

    await delete_Memo(db, memo)
