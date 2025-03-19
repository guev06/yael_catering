from sqlalchemy import Column, String, Integer
from ..utils.database import Base

class Role(Base):
    __tablename__ = 'roles'
    id = Column(Integer, primary_key=True, index=True)
    role_name = Column(String, nullable=False)