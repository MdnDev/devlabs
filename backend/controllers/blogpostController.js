import asyncHandler from 'express-async-handler'
import Blogpost from '../models/blogpostModel.js'

// @description    Fetch all blogposts
// @route          GET /api/blogposts
// @access         Public

const getBlogposts = asyncHandler(async(req, res) => {
    const title = req.query.title || '';
    const category = req.query.category || '';
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

const getBlogpostById = asyncHandler(async(req, res) => {
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

const deleteBlogpost = asyncHandler(async(req, res) => {
    const blogpost = await Blogpost.findById(req.params.id)

    if(blogpost) {
        await blogpost.remove()
        res.json({ message: 'Article retiré' })
    } else {
        res.status(404)
        throw new Error('Article non trouvé')
    }
})

// @desc    Create a blogpost
  // @route   POST /api/blogposts
  // @access  Private/Admin

  const createBlogpost = asyncHandler(async(req, res) => {
      const blogpost = new Blogpost({
        user: req.user._id,
        title: 'sample title',
        date: 'sample date',
        author: 'sample author',
        category: 'sample category',
        bannerImage: '/images/sample.jpg',
        text: {
            paragraph1: 'sample paragraph',
            paragraph2: 'sample paragraph',
            paragraph3: 'sample paragraph',
            paragraph4: 'sample paragraph',
            paragraph5: 'sample paragraph',
        },
        images: {
            image1: '/images/sample.jpg',
            image2: '',
            image3: '',
            image4: '',
            image5: '',
        }

      })

      const createdBlogpost = await blogpost.save()
      res.status(201).json(createdBlogpost)
  })

  // @desc    Update a blogpost
  // @route   PUT /api/blogposts/:id
  // @access  Private/Admin

  const updateBlogpost = asyncHandler(async (req, res) => {
      const {
          user,
          title,
          author,
          date,
          bannerImage,
          category,
          text,
          images

      } = req.body

      const blogpost = await Blogpost.findById(req.params.id)

      if (blogpost) {
        blogpost.title = title
        blogpost.author = author
        blogpost.dtae = date
        blogpost.bannerImage = bannerImage
        blogpost.category = category
        blogpost.text = text
        blogpost.images = images

        const updatedBlogpost = await blogpost.save()
        res.json(updatedBlogpost)

      } else {
          res.status(404)
          throw new Error ('Article non trouvé')
      }

  })

  const getCategories = asyncHandler(async(req, res) => {
      const categories = await Blogpost.find().distinct('category')
      res.send(categories)
  })

  export {
      getBlogposts,
      getBlogpostById,
      deleteBlogpost,
      createBlogpost,
      updateBlogpost,
      getCategories
  }