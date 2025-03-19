from fastapi import FastAPI, HTTPException, Request
from .routes.user_routers import router as user_router
from fastapi.responses import JSONResponse

# py -m venv env
# env/scripts/activate
# pip install python-dotenv
# pip install fastapi
# pip install uvicorn
# pip install sqlalchemy
# pip install psycopg2
# pip install pydantic
# pip freeze > requirements.txt
# uvicorn src.app:server --reload --port 4000

server = FastAPI()

server.include_router(user_router)

# Catch-All
@server.exception_handler(HTTPException)
async def custom_http_exception_handler(request: Request, exc: HTTPException):
    return JSONResponse(status_code = exc.status_code, content = {"error": exc.detail})