from sqlalchemy import Column, String, Integer
from ..utils.database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role_id = Column(Integer, nullable=False)