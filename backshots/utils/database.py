from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()  # Load env variables from .env file

from urllib.parse import quote_plus

password = quote_plus("d1ckan@lpU$$y")
DATABASE_URL = os.getenv("DATABASE_URL", f"postgresql://wewantpussy:{password}@163.47.10.192:5300/UnemployedCSStudents")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
