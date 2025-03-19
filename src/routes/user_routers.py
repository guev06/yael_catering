from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..schemas.user_schema import UserSchema
from ..utils.database import get_db
from ..services.user_service import login

router = APIRouter()

@router.post("/api/login")
def login_route(user: UserSchema, db: Session = Depends(get_db)):
    db_user = login(db, user.username, user.password)    
    return db_user