import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { BlogContext } from '../context/BlogContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { posts, deletePost, loading } = useContext(BlogContext);

  // Filter posts by current user if user info is available
  const userPosts = user ? posts.filter(post => post.author === user.username || post.author === user._id) : posts;

  return (
    <div>
      <h2>Dashboard</h2>
      {user && <p>Welcome, <strong>{user.username || user.email}</strong>!</p>}
      <div style={{ margin: '1rem 0' }}>
        <Link to="/new">
          <button>Create New Post</button>
        </Link>
      </div>
      <h3>Your Posts</h3>
      {loading ? (
        <p>Loading...</p>
      ) : userPosts.length === 0 ? (
        <p>You have not created any posts yet.</p>
      ) : (
        <ul>
          {userPosts.map(post => (
            <li key={post._id} style={{ marginBottom: '1rem' }}>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
              <span style={{ marginLeft: '1rem' }}>
                <Link to={`/edit/${post._id}`}><button>Edit</button></Link>
                <button onClick={() => deletePost(post._id)} style={{ marginLeft: '0.5rem' }}>Delete</button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard; 