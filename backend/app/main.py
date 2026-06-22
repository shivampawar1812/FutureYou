from fastapi import FastAPI
from app.api.twin import (router as twin_router)
from app.api.simulation import (router as simulation_router)
from app.api.copilot import (router as copilot_router)
from app.api.engagement import (router as engagement_router)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FutureYou API",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health_check():
    return {
        "message": "FutureYou API Running"
    }

app.include_router(twin_router)
app.include_router(simulation_router)
app.include_router(copilot_router)
app.include_router(engagement_router)



