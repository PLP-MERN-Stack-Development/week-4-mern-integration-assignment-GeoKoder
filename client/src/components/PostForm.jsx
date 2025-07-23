import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BlogContext } from '../context/BlogContext';
import * as api from '../api';
import styles from './PostForm.module.css';

// Define validation schema
const schema = yup.object({
  title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
  body: yup.string().required('Body is required').min(10, 'Body must be at least 10 characters'),
  category: yup.string().required('Category is required'),
}).required();

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { categories, addPost, updatePost, setError } = useContext(BlogContext);

  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Load post data for editing
  useEffect(() => {
    if (id) {
      setLoading(true);
      api.fetchPostById(id)
        .then((res) => {
          reset({
            title: res.data.title,
            body: res.data.body,
            category: res.data.category?._id || '',
          });
        })
        .catch(() => setError('Failed to load post for editing.'))
        .finally(() => setLoading(false));
    }
  }, [id, reset, setError]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (id) {
        await updatePost(id, data);
      } else {
        await addPost(data);
      }
      navigate('/');
    } catch {
      setError('Failed to save post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} noValidate>
      <h2 className={styles.heading}>{id ? 'Edit Post' : 'New Post'}</h2>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Title</label>
        <input
          className={styles.input}
          {...register('title')}
          disabled={loading}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Body</label>
        <textarea
          className={styles.textarea}
          rows={8}
          {...register('body')}
          disabled={loading}
          aria-invalid={errors.body ? 'true' : 'false'}
        />
        {errors.body && <p style={{ color: 'red' }}>{errors.body.message}</p>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Category</label>
        <select
          className={styles.select}
          {...register('category')}
          disabled={loading}
          aria-invalid={errors.category ? 'true' : 'false'}
        >
          <option value="">Select a category</option>
          {Array.isArray(categories) && categories.map(category => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && <p style={{ color: 'red' }}>{errors.category.message}</p>}
      </div>

      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? 'Saving...' : id ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;
