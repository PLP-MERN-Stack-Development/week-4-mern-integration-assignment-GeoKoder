import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "./context/BlogContext";

import PostList from "./components/PostList";
import PostView from "./components/PostView";
import PostForm from "./components/PostForm";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorToast from "./components/ErrorToast";
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from "./components/Dashboard";


import styles from "./App.module.css";

function App() {
  const { loading, error, setError } = useContext(BlogContext);

  return (
    <Router>
  <nav className={styles.nav}>
    <Link to="/" className={styles.link}>Blog</Link>
    <Link to="/new" className={styles.link}>New Post</Link>
  </nav>
  <main className={styles.main}>
    {loading && <LoadingSpinner />}
    <ErrorToast message={error} onClose={() => setError(null)} />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<PostList />} />
      <Route path="/posts/:id" element={<PostView />} />
      <Route path="/edit/:id" element={<PostForm />} />
      <Route path="/new" element={<PostForm />} />
    </Routes>
  </main>
</Router>
  );
}

export default App;

