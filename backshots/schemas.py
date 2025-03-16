from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime

# User Schema
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True

# Profile Schema
class ProfileCreate(BaseModel):
    full_name: str
    student_id_number: str
    university_name: str
    course_major: str
    year_of_study: int
    skills_interests: List[dict]

class UserRegisterWithProfile(UserCreate):
    profile: ProfileCreate

class ProfileResponse(ProfileCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

