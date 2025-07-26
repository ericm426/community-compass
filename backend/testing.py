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
        "name": "Healthcare for the Homeless",
        "type": "medical",
        "address": "789 Pine Street, Your City, ST 12345",
        "phone": "(555) 456-7890",
        "website": "https://healthcareforhomeless.org",
        "hours": "Mon-Wed-Fri 8AM-4PM",
        "services": ["Primary care", "Mental health", "Substance abuse counseling"],
        "capacity": "50 patients/day",
        "availability": "Accepting new patients",
        "description": "Free healthcare services specifically for people experiencing homelessness.",
        "lat": 42.3555,
        "lng": -71.0625
    },
    {
        "id": 4,
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
    {
        "id": 5,
        "name": "Legal Aid Society",
        "type": "legal",
        "address": "654 Maple Drive, Your City, ST 12345",
        "phone": "(555) 234-5678",
        "website": "https://legalaid.org",
        "hours": "Tue-Thu 10AM-3PM",
        "services": ["Legal advice", "Document assistance", "Housing advocacy"],
        "capacity": "20 clients/day",
        "availability": "By appointment",
        "description": "Free legal services for low-income individuals and families.",
        "lat": 42.3612,
        "lng": -71.0598
    }
]

for i in range(len(SAMPLE_RESOURCES)):
    print(SAMPLE_RESOURCES[i])