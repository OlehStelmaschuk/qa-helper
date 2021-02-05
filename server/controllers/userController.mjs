import asyncHandler from 'express-async-handler'
import User from '../models/userModel.mjs'
import generateToken from '../utils/generateToken.mjs'

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body
  const user = await User.findOne({ name })
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc update user profile
// @route PUT /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    req.body.password && (user.password = req.body.password)

    const updateUser = await user.save()

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      role: updateUser.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Register User
// @route POST /api/users/register
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body
  const userExist = await User.findOne({ name })

  if (userExist) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
