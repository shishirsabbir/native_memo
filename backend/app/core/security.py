# imports
from passlib.context import CryptContext
from datetime import timedelta, timezone, datetime
from jose import JWTError, jwt
from app.core.config import settings

# configure cryptcontext
password_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# password encryption functions
def hash_Password(password: str) -> str:
    """
    Hashes a plain password
    """
    return password_context.hash(password)


def verify_Password(plain_password: str, hashed_password: str) -> bool:
    """
    Verifies if plain password is matched with hashed password
    """
    return password_context.verify(plain_password, hashed_password)


# jwt functions
def create_Access_Token(data: dict, expires_delta: timedelta | None = None) -> str:
    """
    Creates a JWT access token
    """

    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(
            minutes=settings.access_token_expire_minutes
        )

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode, settings.secret_key, algorithm=settings.algorithm
    )

    return encoded_jwt


def decode_Access_Token(token: str) -> dict:
    """
    Decodes a JWT access token
    Raises JWTError if the token is invalid or expired
    """

    try:
        payload = jwt.decode(
            token, settings.secret_key, algorithms=[settings.algorithm]
        )
        return payload
    except JWTError as e:
        raise e
