from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from utils.database import get_db
from schemas import UserRegisterWithProfile, UserResponse
from crud.crud_users import create_user, get_user_by_email
from crud.crud_profiles import create_profile

router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register_user(user_data: UserRegisterWithProfile, db: Session = Depends(get_db)):
    if get_user_by_email(db, user_data.email):
        raise HTTPException(status_code=400, detail="Email already registered")

    # Create User
    new_user = create_user(db, user_data)

    # Create Profile for the new user
    create_profile(db, user_id=new_user.id, profile_data=user_data.profile)

    return new_user
