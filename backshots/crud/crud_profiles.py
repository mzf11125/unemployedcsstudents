from sqlalchemy.orm import Session
from utils.models import Profile
from schemas import ProfileCreate

def create_profile(db: Session, user_id: int, profile_data: ProfileCreate):
    db_profile = Profile(user_id=user_id, **profile_data.dict())
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

def get_profile_by_user_id(db: Session, user_id: int):
    return db.query(Profile).filter(Profile.user_id == user_id).first()
