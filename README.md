Todo List API using Django Rest Framework
This project implements a Todo List API using Django Rest Framework. Users can perform CRUD operations on Todo items through API endpoints.

Requirements
Python 3.x
Django
Django Rest Framework
Installation
Clone the repository:
git clone https://github.com/Ashrithanch09/BosonQ-psi.git
Navigate to the project directory:
cd BosonQ-psi
Install dependencies:
pip install -r requirements.txt
Apply database migrations:
python manage.py migrate
Run the development server:
python manage.py runserver
Create Todo Item
POST /todos/
Request Body:
json
{
    "title": "Sample Todo",
    "description": "This is a sample todo item",
    "status": "pending"
}
Retrieve All Todo Items
GET /todos/
Retrieve Todo Item by ID:
GET /todos/<id>/
Update Todo Item by ID
PUT /todos/<id>/
Request Body:
json
{
    "title": "Updated Todo Title",
    "description": "Updated description",
    "status": "completed"
}
Delete Todo Item by ID
DELETE /todos/<id>/
Sample Responses
Successful Response (Status Code: 200 OK)
json

{
    "id": 1,
    "title": "Sample Todo",
    "description": "This is a sample todo item",
    "status": "pending"
}
Error Response (Status Code: 404 Not Found)

json
{
    "detail": "Not found."
}
Testing
You can test the API using tools like curl or Postman. Ensure to include appropriate error handling and response codes in your API.
