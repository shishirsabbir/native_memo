# imports
from app.core.config import settings
from app.database.base import Base
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession


# defining engine
db_url = f"sqlite+aiosqlite:///{settings.database_url}"
engine = create_async_engine(
    db_url,
    connect_args={"check_same_thread": False} if db_url.startswith("sqlite") else {},
)


# creating session using sessionmaker
SessionLocal = async_sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)


# create all tables in async mode
async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


# get db function (async)
async def get_db():
    async with SessionLocal() as session:
        yield session
