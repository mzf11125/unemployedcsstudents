from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey, func
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import relationship
from utils.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())

    # Relationship to Profile
    profile = relationship("Profile", back_populates="user", uselist=False)

class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True)
    full_name = Column(String(255), nullable=False)
    student_id_number = Column(String(50), unique=True, nullable=False)
    university_name = Column(String(255), nullable=False)
    course_major = Column(String(255), nullable=False)
    year_of_study = Column(Integer, nullable=False)
    skills_interests = Column(JSONB, nullable=False, default=[])  # Stored as JSONB
    created_at = Column(TIMESTAMP, server_default=func.now())

    user = relationship("User", back_populates="profile")
