from fastapi import FastAPI, UploadFile, File
import tempfile, shutil
from .model_loader import predict_image
from .schemas import PredictionResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Fruit Classifier API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict", response_model=PredictionResponse)
async def predict(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".jpg") as tmp:
        shutil.copyfileobj(file.file, tmp)
        tmp_path = tmp.name

    label, confidence = predict_image(tmp_path)
    return PredictionResponse(label=label, confidence=confidence)
