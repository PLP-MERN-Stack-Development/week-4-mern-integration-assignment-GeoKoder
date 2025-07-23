# GeoKoder Blog Frontend (React + Vite)

This is the client-side application for the GeoKoder MERN Stack Blog. It is built with **React** and **Vite** for fast development and hot module replacement (HMR). The frontend interacts with a Node.js/Express backend and MongoDB database.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Context & State Management](#context--state-management)
- [API Integration](#api-integration)
- [Form Validation](#form-validation)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- View, create, edit, and delete blog posts
- Categorize posts
- Form validation with `yup` and `react-hook-form`
- Responsive design
- Error handling and loading states
- Context API for global state management

---

## Tech Stack

- **React** (UI library)
- **Vite** (build tool)
- **React Router** (routing)
- **Axios** (HTTP requests)
- **Yup** & **React Hook Form** (form validation)
- **CSS Modules** (styling)
- **Context API** (state management)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/geokoder-blog.git
   cd geokoder-blog/client
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set environment variables:**
   - Create a `.env` file in the `client` directory.
   - Add your backend API base URL:
     ```
     VITE_BASE_URL=http://localhost:5000/api
     ```

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Project Structure

```
client/
├── public/
├── src/
│   ├── api/               # Axios API calls
│   ├── components/        # React components (PostList, PostForm, etc.)
│   ├── context/           # BlogContext for global state
│   ├── styles/            # CSS modules
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
├── .env                   # Environment variables
├── package.json
└── README.md
```

---

## Environment Variables

- **VITE_BASE_URL**: The base URL for your backend API.
  ```
  VITE_BASE_URL=http://localhost:5000/api
  ```

---

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

---

## Context & State Management

This project uses the React Context API for global state management. The `BlogContext` provides state and dispatch functions to manage blog posts and user authentication.

---

## API Integration

Axios is used for making HTTP requests to the backend API. Base URL is set from the `VITE_BASE_URL` environment variable.

---

## Form Validation

Form validation is handled by `yup` and `react-hook-form`. Validation schemas are defined using `yup` and passed to `react-hook-form` for managing form state and validation.

---

## Styling

Styling is done using CSS Modules. Each component has an associated CSS module file for scoped and modular styles.

---

## Troubleshooting

- If you encounter issues, check the browser console for error messages.
- Ensure the backend server is running and accessible.
- Verify environment variables are correctly set in the `.env` file.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
