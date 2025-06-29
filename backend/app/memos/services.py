# imports
from sqlalchemy.ext.asyncio import AsyncSession
from app.users.model import User as UserModel
from app.memos.model import Memo as MemoModel
from sqlalchemy import select
from app.core.schemas import MemoUpdate, Memo


# get memos functions
async def get_Memos(db: AsyncSession, user: UserModel):
    results = await db.scalars(select(MemoModel).where(MemoModel.user_id == user.id))

    return results.all()


# get single memo function
async def get_Memo_By_ID(db: AsyncSession, memo_id: str, user: UserModel):
    return await db.scalar(
        select(MemoModel).where(MemoModel.id == memo_id, MemoModel.user_id == user.id)
    )


# create memo function
async def add_Memo(db: AsyncSession, memo_data: Memo, user: UserModel):
    memo = MemoModel(**memo_data.model_dump(), user_id=user.id)
    db.add(memo)

    await db.commit()
    await db.refresh(memo)
    return memo


# update memo function
async def update_Memo(db: AsyncSession, memo: MemoModel, update_data: MemoUpdate):
    update_fields = update_data.model_dump(exclude_unset=True)

    for field, value in update_fields.items():
        setattr(memo, field, value)

    await db.commit()
    await db.refresh(memo)
    return memo


# delete memo function
async def delete_Memo(db: AsyncSession, memo: MemoModel):
    await db.delete(memo)
    await db.commit()
