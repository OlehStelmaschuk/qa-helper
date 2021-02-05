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
