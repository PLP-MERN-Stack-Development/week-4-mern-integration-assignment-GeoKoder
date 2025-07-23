import express from 'express';
import { getCategories, createCategory } from '../controllers/categories.js';
import { validateCategory } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getCategories);
router.post('/', validateCategory, createCategory);

export default router;
