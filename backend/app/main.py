from fastapi import FastAPI
from app.api.twin import router as twin_router
from app.api.simulation import (router as simulation_router)

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
app.include_router(simulation_router)