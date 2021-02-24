import express from 'express'
import { getTranslate } from '../controllers/translateController.mjs'

const router = express.Router()

router.route('/').post(getTranslate)

export default router
