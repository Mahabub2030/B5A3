# 📚 Library Management API

**Technologies:** Express, TypeScript, MongoDB, Mongoose  

A RESTful **Library Management System API** for managing books and borrow records.  
Built with **TypeScript**, **Express**, and **MongoDB** using **Mongoose**.

---

## 🎯 Objective

The goal of this project is to build a **Library Management System** that:

- Validates data using Mongoose schemas  
- Enforces business logic (e.g., availability control on borrow)  
- Uses **aggregation pipelines** for summaries  
- Includes **instance methods** and Mongoose middleware  
- Supports **filtering and sorting**  

---

## 🔧 Core Features

### 📖 Book Model

- `title` (string) — **Required**  
- `author` (string) — **Required**  
- `genre` (enum) — **FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY**  
- `isbn` (string) — **Required & Unique**  
- `description` (string) — Optional  
- `copies` (number) — **Required**, non-negative  
- `available` (boolean) — Defaults to `true`  

---

### 📑 Borrow Model

- `book` (ObjectId) — **Required**, references Book  
- `quantity` (number) — **Required**, positive integer  
- `dueDate` (Date) — **Required**  

---

## ⚡ API Endpoints

### 📘 Books

- **Create Book** → `POST /api/books`  
- **Get All Books** → `GET /api/books`  
- **Get Book by ID** → `GET /api/books/:bookId`  
- **Update Book** → `PUT /api/books/:bookId`  
- **Delete Book** → `DELETE /api/books/:bookId`  

🔍 **Filtering & Sorting**  
- Query parameters:  
  - `filter` → filter by genre  
  - `sortBy` → field to sort by  
  - `sort` → ascending/descending  
  - `limit` → number of results  

---

### 📕 Borrow

- **Borrow a Book** → `POST /api/borrow`  
  - Deducts quantity from Book  
  - Updates availability if copies reach `0`  

- **Borrowed Books Summary** → `GET /api/borrow`  
  - Aggregates **total borrowed quantity** per book  
  - Returns **book title & ISBN**  

📌 **Example Borrow Summary Response:**

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalQuantity": 5
    },
    {
      "book": {
        "title": "1984",
        "isbn": "9780451524935"
      },
      "totalQuantity": 3
    }
  ]
}
🛠 Project Structure

├── src/
│   ├── controllers/
│   │   ├── bookController.ts
│   │   └── borrowController.ts
│   ├── models/
│   │   ├── Book.ts
│   │   └── Borrow.ts
│   ├── services/
│   │   ├── bookService.ts
│   │   └── borrowService.ts
│   ├── routes/
│   │   ├── bookRoutes.ts
│   │   └── borrowRoutes.ts
│   └── app.ts
├── package.json
├── tsconfig.json
└── README.md
Controllers → Handle HTTP requests & responses

Services → Business logic, aggregation, instance methods

Models → MongoDB schemas with validation

Routes → API endpoints

💡 Key Features

✅ Schema Validation using Mongoose
✅ Business Logic Enforcement
✅ Decrement copies on borrow
✅ Update availability automatically
✅ Aggregation Pipelines for borrowed books summary
✅ Instance Methods (Book.decrementCopies)
✅ Filtering and Sorting on books


