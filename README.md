# GeoKoder MERN Stack Blog

GeoKoder is a full-stack blog application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, edit, categorize, and delete blog posts. The project is split into two main parts: the backend API and the frontend client.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Overview](#api-overview)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- Create, edit, and delete blog posts
- Categorize posts
- View posts and categories
- Form validation and error handling
- Responsive UI
- RESTful API integration
- Modular code structure

---

## Tech Stack

- **Frontend:** React, Vite, React Router, Axios, React Hook Form, Yup, CSS Modules, Context API
- **Backend:** Node.js, Express, MongoDB, Mongoose, dotenv, CORS

---

## Project Structure

```
PLP MERN Stack/
├── client/         # Frontend (React + Vite)
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
├── server/         # Backend (Node.js + Express)
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
└── README.md       # Project overview (this file)
```

---

## Setup & Installation

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB (local or cloud)

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/geokoder-blog.git
cd geokoder-blog
```

### 2. Backend Setup

```sh
cd server
npm install
# Create a .env file with:
# MONGO_URI=mongodb://localhost:27017/geokoder-blog
# PORT=5000
npm start
```

### 3. Frontend Setup

```sh
cd client
npm install
# Create a .env file with:
# VITE_BASE_URL=http://localhost:5000/api
npm run dev
```

### 4. Access the App

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## Environment Variables

### Backend (`server/.env`)
```
MONGO_URI=mongodb://localhost:27017/geokoder-blog
PORT=5000
```

### Frontend (`client/.env`)
```
VITE_BASE_URL=http://localhost:5000/api
```

---

## Available Scripts

### Backend

- `npm start` — Start the server
- `npm run dev` — Start with nodemon (auto-reload)

### Frontend

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

---

## API Overview

### Posts

- `GET /api/posts` — List all posts
- `GET /api/posts/:id` — Get a post by ID
- `POST /api/posts` — Create a post
- `PUT /api/posts/:id` — Update a post
- `DELETE /api/posts/:id` — Delete a post

### Categories

- `GET /api/categories` — List all categories
- `POST /api/categories` — Create a category
- `PUT /api/categories/:id` — Update a category
- `DELETE /api/categories/:id` — Delete a category

---

## Troubleshooting

- **MongoDB Connection Issues:** Ensure MongoDB is running and `MONGO_URI` is correct.
- **CORS Errors:** Confirm CORS is enabled in the backend.
- **Port Conflicts:** Change `PORT` or frontend dev port if needed.
- **JSX Errors:** Ensure React component files use `.jsx` extension.

---

## License

This project is licensed under the MIT