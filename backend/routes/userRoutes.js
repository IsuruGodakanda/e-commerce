import express from 'express'
const router = express.Router()
import { registerUser, authUser, getUserProfile, updateUserProfile, getUsers } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/', registerUser)

router.get('/', protect, admin, getUsers)

router.post('/login', authUser)

router.get('/profile', protect, getUserProfile)

router.put('/profile', protect, updateUserProfile)

export default router
