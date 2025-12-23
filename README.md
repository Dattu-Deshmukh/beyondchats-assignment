
# 🚀 BeyondChats – AI-Powered Article Enhancement Platform

BeyondChats is a **full-stack web application** designed to fetch, enhance, and display articles through a clean, modern interface.  
The project demonstrates **real-world full-stack development**, including backend APIs, frontend rendering, deployment, debugging, and production stability.

This project was built as part of a technical assignment and intentionally focuses on **clarity, reliability, and production-readiness**.

---

## 🌐 Live Application Links

### 🔹 Frontend (Vercel)
👉 https://frontend-react-two-ecru.vercel.app

### 🔹 Backend API (Railway)
👉 https://beyondchats-assignment-production.up.railway.app/api/articles

---

## ✨ Key Highlights

- 📄 Fetches paginated articles from a REST API
- ⚡ Fast and responsive React UI
- 🧠 AI-ready backend architecture (extendable)
- 🧩 Skeleton loaders for better UX
- ❌ Safe handling of empty / null API data
- 🌍 Deployed and tested in **production**
- 🛠️ Debugged real production errors (500s, null crashes)

---

## 🧠 Functional Overview

1. **Backend (Laravel)**  
   - Exposes `/api/articles`
   - Stores articles in SQLite
   - Returns structured JSON
   - Handles pagination
   - Production-ready configuration

2. **Frontend (React)**  
   - Fetches articles from Railway API
   - Displays articles in card layout
   - Shows skeleton loaders while loading
   - Shows empty state when no articles exist
   - Prevents runtime crashes using defensive checks

---

## 🏗️ Tech Stack

### 🖥️ Frontend
- React.js
- JavaScript (ES6+)
- CSS (Custom modern UI)
- Fetch API
- Deployment: **Vercel**

### 🧪 Backend
- Laravel (PHP 8.2)
- REST API
- SQLite database
- Artisan migrations
- Deployment: **Railway**

---

## 📁 Project Structure
```
beyondchats-assignment/
│
├── backend-laravel/
│ ├── app/
│ ├── routes/api.php
│ ├── database/
│ │ └── database.sqlite
│ ├── public/
│ └── .env
│
├── frontend-react/
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ ├── public/
│ └── package.json
│
└── README.md

```

## 🖥️ Running the Project Locally
### ✅ Prerequisites

Make sure you have installed:

-Node.js (v18+ recommended)
-npm
-PHP 8.2
-Composer
-Git

## 🔧 Backend Setup (Laravel)
### 1️⃣ Clone the repository
```
git clone https://github.com/Dattu-Deshmukh/beyondchats-assignment.git
cd beyondchats-assignment/backend-laravel
```
### 2️⃣ Install dependencies
```
composer install
```
### 3️⃣ Create environment file
```
cp .env.example .env
```
Update .env:
```
APP_ENV=local
APP_DEBUG=true
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database/database.sqlite
```
### 4️⃣ Create SQLite database
```
mkdir database
touch database/database.sqlite
```
(Windows PowerShell)
```
New-Item database/database.sqlite -ItemType File
```
### 5️⃣ Generate application key
```
php artisan key:generate
```
### 6️⃣ Run migrations
```
php artisan migrate
```
### 7️⃣ Start backend server
```
php artisan serve
```
## Backend will run at:
```
http://127.0.0.1:8000
```
## Test API:
```
http://127.0.0.1:8000/api/articles
```
## 🌐 Frontend Setup (React)
### 1️⃣ Navigate to frontend
```
cd ../frontend-react
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Update API URL (for local backend)
In src/App.js:
```
fetch('http://127.0.0.1:8000/api/articles')
```
### 4️⃣ Start frontend
```
npm start
```
Frontend will run at:
```
http://localhost:3000
```

## 🔌 API Documentation
### 🔹 Get Articles

Endpoint
```
GET /api/articles
```
🔹 Example Response
```
{
  "success": true,
  "data": {
    "current_page": 1,
    "data": [],
    "total": 0
  }
}
```
## 🧩 Future Enhancements
🤖 AI content summarization

🔍 Search & filtering

🧾 Article detail pages

🔐 Authentication (admin panel)

📊 Analytics dashboard

🧠 AI-generated insights
 
## 👨‍💻 Author
Dattu Deshmukh
Final Year B.Tech – Computer Science Engineering
Full-Stack Developer (React • Laravel • APIs)

GitHub: https://github.com/Dattu-Deshmukh

LinkedIn: https://www.linkedin.com/in/dattudeshmukh2
