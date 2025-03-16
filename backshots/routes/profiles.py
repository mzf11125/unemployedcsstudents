from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from utils.auth import verify_password, create_access_token, get_current_user
from utils.database import get_db
from schemas import ProfileCreate, ProfileResponse, UserResponse
from crud.crud_profiles import create_profile, get_profile_by_user_id
from crud.crud_users import get_user_by_email, get_user_by_id

router = APIRouter()

@router.post("/", response_model=ProfileResponse)
def create_user_profile(user_id: int, profile_data: ProfileCreate, db: Session = Depends(get_db)):
    if get_profile_by_user_id(db, user_id):
        raise HTTPException(status_code=400, detail="Profile already exists for this user")
    return create_profile(db, user_id, profile_data)


@router.get("/me", response_model=UserResponse)
def get_me(user_data: dict = Depends(get_current_user), db: Session = Depends(get_db)):
    user = get_user_by_id(db, user_data["sub"])
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.get("/{user_id}", response_model=ProfileResponse)
def read_user_profile(user_id: int, db: Session = Depends(get_db)):
    profile = get_profile_by_user_id(db, user_id)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile
