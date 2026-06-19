from fastapi import FastAPI
from app.api.twin import router as twin_router

app = FastAPI(
    title="FutureYou API",
    version="0.1.0"
)


@app.get("/")
def health_check():
    return {
        "message": "FutureYou API Running"
    }

app.include_router(twin_router)