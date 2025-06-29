# imports
from fastapi import FastAPI, Query, status
from app.core.config import settings
from app.auth.router import router as auth_router
from app.users.router import router as user_router
from app.memos.router import router as memo_router
from contextlib import asynccontextmanager
from app.database.database import init_db, engine
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends
from sqlalchemy import select
from app.memos.model import Memo as MemoModel
from app.core.dependencies import get_db
from datetime import datetime, timezone


# db initialization
@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()  # initialize Database at startup
    yield

    # clean up code
    await engine.dispose()


# define app
app = FastAPI(title=settings.app_name, lifespan=lifespan)


# mouting routers
app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(user_router, prefix="/users", tags=["Users"])
app.include_router(memo_router, prefix="/memos", tags=["Memos"])


# get all memos for everyone
@app.get("/wall", status_code=status.HTTP_200_OK)
async def public_wall(
    db: AsyncSession = Depends(get_db),
    page: int = Query(1, ge=1, description="page number"),
    limit: int = Query(10, ge=1, le=100, description="memos per page"),
    skip: int = Query(0, ge=0, description="number of memos to skip"),
):
    if skip == 0:
        skip = (page - 1) * limit

    results = await db.scalars(select(MemoModel).offset(skip).limit(limit))

    return {
        "status": "success",
        "requestTime": datetime.now(timezone.utc).isoformat(),
        "data": results.all(),
    }


# test route
@app.get("/test", tags=["Default"])
async def test():
    return {"message": "Hello World!"}
