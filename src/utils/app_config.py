from dotenv import load_dotenv # pip install python-dotenv
from os import environ

load_dotenv() # Loads entire .env file

class AppConfig:
    database_url = environ.get("DATABASE_URL")