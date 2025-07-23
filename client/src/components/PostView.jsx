import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import * as api from '../api';
import styles from './PostView.module.css';

const PostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deletePost, setError } = useContext(BlogContext);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api.fetchPostById(id)
      .then((res) => setPost(res.data))
      .catch(() => setLocalError('Failed to load post.'))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        navigate('/');
      } catch (err) {
        setError('Failed to delete post.');
      }
    }
  };

  if (loading) return <p>Loading post...</p>;
  if (localError) return <p style={{ color: 'red' }}>{localError}</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
      <p className={styles.category}>
        Category: {post.category?.name || 'Uncategorized'}
      </p>
      <div className={styles.actions}>
        <Link to={`/edit/${post._id}`} className={styles.link}>
          Edit
        </Link>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default PostView;
