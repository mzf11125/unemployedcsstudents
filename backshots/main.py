import os
import sys
from fastapi import FastAPI
from utils.database import Base, engine
from routes import users, profiles, auth

sys.path.append(os.path.dirname(os.path.abspath(__file__))) 

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(profiles.router, prefix="/profiles", tags=["Profiles"])
