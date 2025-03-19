from pydantic import BaseModel
from typing import Optional

class UserSchema(BaseModel):
    id: Optional[int] = None
    username: str
    password: str
    role_id: Optional[int] = None