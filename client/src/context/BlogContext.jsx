import React, { createContext, useState, useEffect } from 'react';
import * as api from '../api';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts & categories initially
  useEffect(() => {
    setLoading(true);
    Promise.all([api.fetchPosts(), api.fetchCategories()])
      .then(([postsRes, catsRes]) => {
        setPosts(postsRes.data);
        setCategories(catsRes.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const addPost = async (postData) => {
    setPosts((prev) => [...prev, postData]);
    try {
      const res = await api.createPost(postData);
      setPosts((prev) => prev.map((p) => (p === postData ? res.data : p)));
    } catch (err) {
      setError(err.message);
      setPosts((prev) => prev.filter((p) => p !== postData));
    }
  };

  const updatePost = async (id, postData) => {
    const prevPosts = [...posts];
    setPosts((prev) => prev.map((p) => (p._id === id ? { ...p, ...postData } : p)));
    try {
      await api.updatePost(id, postData);
    } catch (err) {
      setError(err.message);
      setPosts(prevPosts);
    }
  };

  const deletePost = async (id) => {
    const prevPosts = [...posts];
    setPosts((prev) => prev.filter((p) => p._id !== id));
    try {
      await api.deletePost(id);
    } catch (err) {
      setError(err.message);
      setPosts(prevPosts);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        categories,
        loading,
        error,
        setError,
        setLoading,
        addPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
