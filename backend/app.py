from flask import Flask, jsonify, request
from flask_cors import CORS
import os 

app = Flask(__name__)
CORS(app)

SAMPLE_RESOURCES = [
    {
        "id": 1,
        "name": "Downtown Emergency Shelter",
        "type": "shelter",
        "address": "123 Main Street, Your City, ST 12345",
        "phone": "(555) 123-4567",
        "website": "https://downtownshelter.org",
        "hours": "24/7",
        "services": ["Emergency housing", "Meals", "Case management"],
        "capacity": "150 beds",
        "availability": "Available",
        "description": "Emergency shelter providing temporary housing, meals, and support services.",
        "lat": 42.3601,
        "lng": -71.0589
    },
    {
        "id": 2,
        "name": "Community Food Bank",
        "type": "food",
        "address": "456 Oak Avenue, Your City, ST 12345",
        "phone": "(555) 987-6543",
        "website": "https://communityfoodbank.org",
        "hours": "Mon-Fri 9AM-5PM, Sat 9AM-2PM",
        "services": ["Food pantry", "Hot meals", "Grocery vouchers"],
        "capacity": "500 families/week",
        "availability": "Open",
        "description": "Food bank providing groceries and hot meals to families in need.",
        "lat": 42.3651,
        "lng": -71.0656
    },
    {
        "id": 3,
        "name": "Job Training Center",
        "type": "employment",
        "address": "321 Elm Street, Your City, ST 12345",
        "phone": "(555) 789-0123",
        "website": "https://jobtrainingcenter.org",
        "hours": "Mon-Fri 8AM-6PM",
        "services": ["Job training", "Resume help", "Interview prep", "Computer skills"],
        "capacity": "30 students/program",
        "availability": "Enrollment open",
        "description": "Free job training and employment services to help people find stable work.",
        "lat": 42.3678,
        "lng": -71.0543
    },
]

@app.route('/')
def home():
    return "Community Compass is Running!"

@app.route('/api/resources', methods=['GET'])
def get_resources():
    return jsonify(SAMPLE_RESOURCES)

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000) 