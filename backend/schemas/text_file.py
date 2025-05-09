from pydantic import BaseModel

class TextFile(BaseModel):
    content: str