from sqlalchemy.orm import Session
from . import models, schemas

def create_profile(db: Session, profile_data: schemas.ProfileCreate):
    db_profile = models.Profile(
        full_name=profile_data.full_name,
        student_id_number=profile_data.student_id_number,
        university_name=profile_data.university_name,
        course_major=profile_data.course_major,
        year_of_study=profile_data.year_of_study,
        profile_picture=profile_data.profile_picture,
        university_logo=profile_data.university_logo,
        skills_interests=[s.model_dump() for s in profile_data.skills_interests]  # Convert Pydantic to JSON
    )
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

def get_profile(db: Session, profile_id: int):
    return db.query(models.Profile).filter(models.Profile.id == profile_id).first()

def get_profiles(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Profile).offset(skip).limit(limit).all()

def delete_profile(db: Session, profile_id: int):
    profile = db.query(models.Profile).filter(models.Profile.id == profile_id).first()
    if profile:
        db.delete(profile)
        db.commit()
        return True
    return False
