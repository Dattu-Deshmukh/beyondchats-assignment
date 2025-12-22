# 🚀 BeyondChats – AI-Powered Article Enhancement Platform

BeyondChats is a **full-stack web application** designed to fetch, enhance, and display articles through a clean, modern interface.  
The project demonstrates **real-world full-stack development**, including backend APIs, frontend rendering, deployment, debugging, and production stability.

This project was built as part of a technical assignment and intentionally focuses on **clarity, reliability, and production-readiness**.

---

## 🌐 Live Application Links

### 🔹 Frontend (Vercel)
👉 https://beyondchats-frontend-rose.vercel.app

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
# 🚀 BeyondChats – AI-Powered Article Enhancement Platform

BeyondChats is a **full-stack web application** designed to fetch, enhance, and display articles through a clean, modern interface.  
The project demonstrates **real-world full-stack development**, including backend APIs, frontend rendering, deployment, debugging, and production stability.

This project was built as part of a technical assignment and intentionally focuses on **clarity, reliability, and production-readiness**.

---

## 🌐 Live Application Links

### 🔹 Frontend (Vercel)
👉 https://beyondchats-frontend-rose.vercel.app

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

# 🚀 BeyondChats – AI-Powered Article Enhancement Platform

BeyondChats is a **full-stack web application** designed to fetch, enhance, and display articles through a clean, modern interface.  
The project demonstrates **real-world full-stack development**, including backend APIs, frontend rendering, deployment, debugging, and production stability.

This project was built as part of a technical assignment and intentionally focuses on **clarity, reliability, and production-readiness**.

---

## 🌐 Live Application Links

### 🔹 Frontend (Vercel)
👉 https://beyondchats-frontend-rose.vercel.app

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

---

## 🔌 API Documentation

### 🔹 Get Articles
GET /api/articles

bash
Copy code

### 🔹 Example Response
```json
{
  "success": true,
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "title": "Sample Article",
        "content": "Enhanced article content...",
        "source_url": "https://example.com",
        "created_at": "2025-01-01"
      }
    ],
    "total": 0
  }
}
## Defensive Frontend Logic
The frontend safely handles:

null or missing fields

empty API responses

network failures

Example:
js
Copy code
const truncateText = (text) => {
  if (!text) return '';
  return text.length > 180 ? text.substring(0, 180) + '...' : text;
};
This prevents production crashes like:

pgsql
Copy code
Cannot read properties of null (reading 'length')
🚀 Deployment Configuration
🔹 Backend (Railway)
PHP 8.2

SQLite

Custom Start Command:

bash
Copy code
php artisan migrate --force && php -S 0.0.0.0:8080 -t public
🔹 Frontend (Vercel)
Automatic GitHub deployments

Production API URL configured directly

Optimized build output

🧪 Debugging & Problem Solving
Issues resolved during development:

✔ API 500 errors
✔ Database path issues
✔ Null data crashes in React
✔ CORS handling
✔ Deployment port mismatch
✔ Production-only runtime bugs

This project reflects real debugging experience, not just local development.

🧩 Future Enhancements
🤖 AI content summarization

🔍 Search & filtering

🧾 Article detail pages

🔐 Authentication (admin panel)

📊 Analytics dashboard

🧠 AI-generated insights

👨‍💻 Author
Dattu Deshmukh
Final Year B.Tech – Computer Science Engineering
Full-Stack Developer (React • Laravel • APIs)

GitHub: https://github.com/Dattu-Deshmukh

LinkedIn: https://www.linkedin.com/in/dattudeshmukh2
