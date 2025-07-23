import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

export const fetchPosts = () => axios.get(`${API_URL}/posts`);

export const fetchPostById = (id) => axios.get(`${API_URL}/posts/${id}`);

export const createPost = (postData) => axios.post(`${API_URL}/posts`, postData);

export const updatePost = (id, postData) => axios.put(`${API_URL}/posts/${id}`, postData);

export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);

export const fetchCategories = () =>
  axios.get('/api/categories');
