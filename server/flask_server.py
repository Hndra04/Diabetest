from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load Scaler
with open('./model/scaler.pkl', 'rb') as file:
    scaler = pickle.load(file)

# Load Model
with open('./model/knn_model.pkl', 'rb') as file:
    model = pickle.load(file)

@app.route("/predict", methods=['POST'])
def predict():
    # Get JSON data from the request
    data = request.get_json()

    # Extract feature values from the data, ensuring order matches training
    features = [
        data.get('age', 0),
        data.get('bmi', 0),
        data.get('blood_pressure', 0),
        data.get('pregnancies', 0)
    ]
    
    # Convert to numpy array and reshape for the model
    features_array = np.array(features).reshape(1, -1)

    # Preprocess features with the scaler
    scaled_features = scaler.transform(features_array)

    # Make prediction with the model
    prediction = model.predict(scaled_features)

    # Return prediction as JSON
    return jsonify({'prediction': int(prediction[0])})

if __name__ == "__main__":
    app.run(debug=True)
