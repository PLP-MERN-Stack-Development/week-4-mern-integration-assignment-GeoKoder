import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogProvider } from './context/BlogContext';
import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BlogProvider>
  </React.StrictMode>
);
