import express from 'express'
import { protect } from '../middleware/authMiddleware.mjs'
import * as POST_CONTROLLER from '../controllers/postController.mjs'

const router = express.Router()

router
  .route('/')
  .get(protect, POST_CONTROLLER.getAllPosts)
  .post(protect, POST_CONTROLLER.addNewPost)
router
  .route('/:id')
  .get(protect, POST_CONTROLLER.getPostByID)
  .put(protect, POST_CONTROLLER.updatePost)

export default router
