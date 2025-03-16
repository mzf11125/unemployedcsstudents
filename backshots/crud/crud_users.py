from sqlalchemy.orm import Session
from utils.models import User
from schemas import UserCreate
from utils.auth import hash_password

def create_user(db: Session, user_data: UserCreate):
    hashed_pw = hash_password(user_data.password)
    db_user = User(username=user_data.username, email=user_data.email, hashed_password=hashed_pw)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_id(db: Session, id: str):
    return db.query(User).filter(User.id == id).first()

def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()
