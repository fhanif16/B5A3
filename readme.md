# 📚 Library Management API

A RESTful Library Management System built using **Express**, **TypeScript**, and **MongoDB (Mongoose)**.  
This API allows users to view, update, delete, and borrow books, with proper validation, business rules, and MongoDB aggregation.

---

## 🚀 Features

- Add, view, update, and delete books
- Borrow books with due date and quantity enforcement
- Availability tracking and validation
- Aggregation pipeline for borrowing summary
- Mongoose schema validation
- Mongoose middleware (pre, post hooks)
- Custom static and instance methods
- Express error handling with consistent structure
- Filtering and query features

---

## 📁 Project Structure
src/
src/
├── controllers/       # Route handler logic
├── models/            # Mongoose schemas and methods
├── routes/            # API route definitions
├── server.ts          # Main application entry

🖥️ Getting Started – Local Setup
1️⃣ Prerequisites
Make sure you have the following installed:

Node.js (v16 or higher)

MongoDB (local or cloud instance)

TypeScript (npm install -g typescript)

2️⃣ Installation Steps
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
Install dependencies

bash
Copy
Edit
npm install
Create an .env file

env
Copy
Edit
PORT=5000
MONGODB_URI=mongodb://localhost:27017/librarydb
Project structure setup

TypeScript is configured with:

rootDir: src

outDir: dist

All compiled JS files will be output to the dist/ folder.

Build the project

bash
Copy
Edit
tsc
Run in development mode

bash
Copy
Edit
npm run dev
This uses ts-node-dev to watch for changes and restart automatically.

🔧 Scripts
Command	Description
npm run dev	Run the project in dev mode
npm run build	Compile TypeScript to JavaScript
npm start	Run the compiled project from dist



👩‍💻 Author
Fatema Hanif
📧 fatemahanif16@gmail.com

