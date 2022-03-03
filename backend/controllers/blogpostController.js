import asyncHandler from 'express-async-handler'
import Blogpost from '../models/blogpostModel.js'

// @description    Fetch all blogposts
// @route          GET /api/blogposts
// @access         Public

const getBlogposts = asyncHandler(async(req, res) => {
    const title = req.query.title || '';
    const category = req.query.category || '',
    const titleFilter = title ? { title: { $regex: title, $options: 'i' } } : {};
    const categoryFilter = category ? { category } : {};
    const blogposts = await Blogpost.find({
        ...titleFilter,
        ...categoryFilter
    })

    res.send(blogposts)
})

// @description    Fetch single blogpost
// @route          GET /api/blogpost/:id
// @access         Public

const getBlogpostByID = asyncHandler(async(req, res) => {
    const blogpost = await Blogpost.findById(req.params.id)
    if(blogpost) {
        res.json(blogpost)
    } else {
        res.status(404)
        throw new Error('Article non trouvé')
    }
})

// @desc    Delete a blogpost
// @route   DELETE /api/blogposts/:id
// @access  Private/Admin