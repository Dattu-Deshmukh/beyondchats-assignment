BeyondChats Backend Assignment

A Laravel-based backend application that scrapes blog articles from the BeyondChats website, stores them in a database, and exposes RESTful APIs to manage and retrieve articles with search, pagination, and validation.

🚀 Features
Phase 1

Scrapes oldest 5 blog articles from BeyondChats

Stores articles in the database

Artisan command for scraping (clean & reusable)

REST APIs for article management (CRUD)

Phase 2

Search articles by title

Pagination support

Request validation with proper HTTP status codes

Clean JSON API responses

🛠 Tech Stack

Backend: Laravel 9

Language: PHP 8.2

Database: SQLite

HTTP Client: Guzzle

Scraping: Symfony DomCrawler

API Testing: Postman

📁 Project Structure (Important Files)
app/
 ├── Console/Commands/ScrapeBeyondChats.php
 ├── Http/Controllers/Api/ArticleController.php
 └── Models/Article.php

database/
 └── migrations/xxxx_create_articles_table.php

routes/
 └── api.php

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone <your-repo-url>
cd beyondchats-assignment/backend-laravel

2️⃣ Install Dependencies
composer install

3️⃣ Environment Setup

Create .env file:

cp .env.example .env


Generate application key:

php artisan key:generate

4️⃣ Database Setup

This project uses SQLite.

Create database file:

touch database/database.sqlite


Run migrations:

php artisan migrate

▶️ Run the Application

Start the Laravel server:

php artisan serve


Server runs at:

http://127.0.0.1:8000

🕷 Scrape BeyondChats Articles

Run the scraper command:

php artisan scrape:beyondchats


✔ Scrapes the oldest 5 articles
✔ Safe to run multiple times (no duplicates)

📡 API Endpoints
🔹 Get Articles (with pagination & search)
GET /api/articles
GET /api/articles?search=chat

🔹 Get Single Article
GET /api/articles/{id}

🔹 Create Article
POST /api/articles


Request Body (JSON):

{
  "title": "Sample Article",
  "source_url": "https://example.com",
  "content": "Optional content"
}

🔹 Update Article
PUT /api/articles/{id}

🔹 Delete Article
DELETE /api/articles/{id}

⚠️ Validation & Error Handling

Invalid requests return 422 Unprocessable Content

Errors are returned in JSON format

Example response:

{
  "message": "The title field is required.",
  "errors": {
    "title": ["The title field is required."]
  }
}

🧪 Testing

APIs tested using Postman

Accept: application/json header used for proper API responses

📝 Notes

SSL verification is disabled only for scraping due to Windows CA certificate limitations.

In production, SSL certificates should be configured properly.