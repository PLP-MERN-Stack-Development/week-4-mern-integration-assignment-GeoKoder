import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';

const PostList = () => {
  const { posts, loading, error } = useContext(BlogContext);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      {(!Array.isArray(posts) || posts.length === 0) && <p>No posts found.</p>}
      <ul className={styles.postList}>
        {Array.isArray(posts) && posts.map(post => (
          <li key={post._id} className={styles.postItem}>
            <Link to={`/posts/${post._id}`} className={styles.postTitle}>
              {post.title}
            </Link>
            <p className={styles.postExcerpt}>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
