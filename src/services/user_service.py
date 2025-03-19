from sqlalchemy.orm import Session
from fastapi import HTTPException
from ..models.user_models import User

def login(db: Session, username: str, password: str):
    user = db.query(User).filter(User.username == username and User.password == password).first()
    if user is None:
        raise HTTPException(status_code = 401, detail = "Incorrect username or password.")
    return user