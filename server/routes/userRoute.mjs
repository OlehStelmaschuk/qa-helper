import express from 'express'
import * as USER_CONTROLLER from '../controllers/userController.mjs'
import { protect } from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/register').post(USER_CONTROLLER.registerUser)
router.post('/login', USER_CONTROLLER.authUser)
router
  .route('/profile')
  .get(protect, USER_CONTROLLER.getUserProfile)
  .put(protect, USER_CONTROLLER.updateUserProfile)

export default router
