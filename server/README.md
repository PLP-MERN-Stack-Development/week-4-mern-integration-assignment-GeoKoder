# GeoKoder Blog Backend (Node.js + Express + MongoDB)

This is the backend API for the GeoKoder MERN Stack Blog project. It provides RESTful endpoints for managing blog posts and categories, handles data validation, and connects to a MongoDB database using Mongoose.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- RESTful API for blog posts and categories
- MongoDB integration via Mongoose
- Data validation and error handling
- CORS support for frontend integration
- Environment-based configuration
- Modular route and model structure

---

## Tech Stack

- **Node.js** (runtime)
- **Express** (web framework)
- **MongoDB** (database)
- **Mongoose** (ODM)
- **dotenv** (environment variables)
- **CORS** (cross-origin resource sharing)

---

## Project Structure

```
server/
├── models/           # Mongoose models (Post, Category)
├── routes/           # Express route handlers
├── middleware/       # Custom middleware (error handling, etc.)
├── server.js         # Main server entry point
├── .env              # Environment variables
├── package.json
└── README.md
```

---

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
MONGO_URI=mongodb://localhost:27017/geokoder-blog
PORT=5000
```

- **MONGO_URI**: Connection string for your MongoDB database
- **PORT**: Port number for the Express server (default: 5000)

---

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/geokoder-blog.git
   cd geokoder-blog/server
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file as described above.

4. **Start the server:**
   ```sh
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

---

## Available Scripts

- `npm start` — Start the server
- `npm run dev` — Start the server with nodemon for development (auto-restarts on changes)

---

## API Endpoints

### Posts

- `GET /api/posts` — Get all posts (populated with category)
- `GET /api/posts/:id` — Get a single post by ID
- `POST /api/posts` — Create a new post
- `PUT /api/posts/:id` — Update a post
- `DELETE /api/posts/:id` — Delete a post

### Categories

- `GET /api/categories` — Get all categories
- `POST /api/categories` — Create a new category
- `PUT /api/categories/:id` — Update a category
- `DELETE /api/categories/:id` — Delete a category

---

## Models

### Post

- `title`: String (required)
- `body`: String (required)
- `category`: ObjectId (reference to Category)

### Category

- `name`: String (required, unique)

---

## Middleware

- **errorHandler**: Centralized error handling for API responses
- **CORS**: Allows requests from the frontend client

---

## Error Handling

All errors are handled by the custom `errorHandler` middleware. Errors return a JSON response with an appropriate status code and message.

---

## Troubleshooting

- **MongoDB Connection Issues**: Ensure MongoDB is running locally or update `MONGO_URI` for your environment.
- **CORS Errors**: Make sure CORS is enabled and the frontend is running on the allowed origin.
- **Port Conflicts**: Change the `PORT` variable in `.env` if another service is using port 5000.

---

## License