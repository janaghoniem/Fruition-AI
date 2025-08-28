import os
import numpy as np
from PIL import Image
import tensorflow as tf
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense, Reshape, Multiply, Dropout
from tensorflow.keras.models import Model
from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.regularizers import l2

# ---------------- Paths ----------------
script_dir = os.path.dirname(os.path.abspath(__file__))
WEIGHTS_PATH = os.path.join(script_dir, "..", "saved_models", "EfficientNetB0_best_weights.h5")
TRAIN_DIR = "E:/fruits-360_100x100/fruits-360/Training"

# ---------------- Custom Squeeze-Excite ----------------
def squeeze_excite_block(inputs, ratio=16):
    channel_axis = -1
    filters = inputs.shape[channel_axis]
    se = GlobalAveragePooling2D()(inputs)
    se = Dense(filters // ratio, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    se = Reshape((1, 1, filters))(se)
    return Multiply()([inputs, se])

# ---------------- Rebuild Architecture Exactly ----------------
num_classes = len([d for d in os.listdir(TRAIN_DIR) if not d.startswith('.')]) if os.path.exists(TRAIN_DIR) else 0

base_model = EfficientNetB0(weights=None, include_top=False, input_shape=(224, 224, 3))
x = squeeze_excite_block(base_model.output)
x = GlobalAveragePooling2D()(x)
x = Dense(256, activation='relu', kernel_regularizer=l2(1e-4))(x)
x = Dropout(0.5)(x)
outputs = Dense(num_classes, activation='softmax', kernel_regularizer=l2(1e-4))(x)

model = Model(inputs=base_model.input, outputs=outputs)

# ---------------- Load Weights ----------------
if not os.path.exists(WEIGHTS_PATH):
    raise FileNotFoundError(f"Weights file not found: {WEIGHTS_PATH}")

model.load_weights(WEIGHTS_PATH)
print("Weights loaded successfully into RGB model.")

# ---------------- Class Names ----------------
CLASS_NAMES = sorted([d for d in os.listdir(TRAIN_DIR) if not d.startswith('.')]) if os.path.exists(TRAIN_DIR) else []

# ---------------- Prediction Function ----------------
def predict_image(image_path):
    try:
        img = Image.open(image_path).convert('RGB')
        img = img.resize((224, 224))
        img_array = img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        preds = model.predict(img_array)
        class_idx = int(np.argmax(preds))
        confidence = float(preds[0][class_idx])
        label = CLASS_NAMES[class_idx] if CLASS_NAMES else str(class_idx)
        return label, confidence
    except Exception as e:
        print(f"Error processing image {image_path}: {e}")
        return None, 0.0
