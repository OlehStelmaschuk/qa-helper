import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.mjs'

// @desc Get all posts
// @route GET /api/posts
// @access Private
export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  res.json(posts)
})

// @desc Fetch single post
// @route GET /api/posts/:id
// @access Private
export const getPostByID = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc Add new Post
// @route /api/posts/
// @access Private
export const addNewPost = asyncHandler(async (req, res) => {
  const { title, category, weight, ru, en, ua } = req.body
  const postExist = await Post.findOne({ title })

  if (postExist) {
    res.status(400)
    throw new Error('Post already exists')
  }

  const post = await Post.create({
    title,
    category,
    weight,
    ru,
    ua,
    en,
  })

  if (post) {
    res.json({
      _id: post._id,
      title: post.title,
      weight: post.weight,
      category: post.category,
      ru: post.ru,
      ua: post.ua,
      en: post.en,
    })
  } else {
    res.status(400)
    throw new Error('Invalid post data')
  }
})

// @desc Update Post
// @route PUT /api/posts/:id
// @access Private
export const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    post.title = req.body.title || post.title
    post.category = req.body.category || post.category
    post.weight = req.body.weight || post.weight
    post.ru = req.body.ru || post.ru
    post.ua = req.body.ua || post.ua
    post.en = req.body.en || post.en

    const updatedPost = await post.save()

    res.json({
      title: updatedPost.title,
      category: updatedPost.category,
      weight: updatedPost.weight,
      ru: updatedPost.ru,
      ua: updatedPost.ua,
      en: updatedPost.en,
    })
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc Delete Post
// @route DELETE /api/posts/:id
// @access Private
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (post) {
    await Post.findByIdAndDelete(req.params.id)
    res.json({
      msg: 'Deleted',
    })
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})
