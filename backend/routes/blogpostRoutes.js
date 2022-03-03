import express from "express"
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'

import { getBlogposts, getBlogpostById, deleteBlogpost, createBlogpost, updateBlogpost, getCategories } from '../controllers/blogpostController.js'

router.route('/').get(getBlogposts)
.post(protect, admin, createBlogpost)

router.route('/categories').get(getCategories)
router.route('/:id')
    .get(getBlogpostById)
    .delete(protect, admin, deleteBlogpost)
    .put(protect, admin, updateBlogpost)


export default router