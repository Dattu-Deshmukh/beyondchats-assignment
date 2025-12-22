# BeyondChats Backend Assignment

This repository contains the backend implementation for the BeyondChats assignment.  
The backend is built using **Laravel** and provides REST APIs for sending chat messages and retrieving chat history with database persistence.

---

## 🚀 Features

- RESTful API built with Laravel
- Message validation
- Persistent storage using SQLite
- Fetch chat history with pagination
- Clean MVC architecture
- Easy local setup (no heavy database installation)

---

## 🛠 Tech Stack

- **Language:** PHP 8.2
- **Framework:** Laravel 9
- **Database:** SQLite
- **ORM:** Eloquent
- **API Style:** REST

---

## 📂 Project Structure (Important Files)

backend-laravel/
├── app/
│ ├── Http/Controllers/Api/ChatController.php
│ └── Models/ChatMessage.php
├── database/
│ ├── migrations/
│ └── database.sqlite
├── routes/
│ └── api.php
├── .env
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd backend-laravel
2️⃣ Install Dependencies
bash
Copy code
composer install
3️⃣ Environment Configuration
bash
Copy code
cp .env.example .env
php artisan key:generate
Update the database configuration in .env:

env
Copy code
DB_CONNECTION=sqlite
4️⃣ Create SQLite Database
bash
Copy code
type nul > database/database.sqlite
5️⃣ Run Migrations
bash
Copy code
php artisan migrate
6️⃣ Start the Server
bash
Copy code
php artisan serve
The backend server will start at:

cpp
Copy code
http://127.0.0.1:8000
🔌 API Endpoints
➤ Send Chat Message
POST /api/chat

Request Body:

json
Copy code
{
  "message": "Hello BeyondChats"
}
Response:

json
Copy code
{
  "status": "success",
  "reply": "You said: Hello BeyondChats"
}
➤ Fetch Chat History (Paginated)
GET /api/chats?page=1

Response:

json
Copy code
{
  "status": "success",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "message": "Hello BeyondChats",
        "reply": "You said: Hello BeyondChats",
        "created_at": "2025-01-01T10:00:00.000000Z",
        "updated_at": "2025-01-01T10:00:00.000000Z"
      }
    ],
    "per_page": 10
  }
}
🧠 Design Decisions
SQLite is used to keep setup lightweight and evaluation-friendly.

Laravel’s database abstraction allows easy switching to MySQL or PostgreSQL for production.

Pagination is added to prevent large payloads and improve scalability.

Validation ensures clean and safe input handling.

🔄 Switching to MySQL (Optional)
To use MySQL instead of SQLite, update .env:

env
Copy code
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
Then run:

bash
Copy code
php artisan migrate