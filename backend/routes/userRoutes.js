import express from 'express'
const router = express.Router()
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/', registerUser)

router.get('/', protect, admin, getUsers)

router.post('/login', authUser)

router.get('/profile', protect, getUserProfile)

router.put('/profile', protect, updateUserProfile)

router.delete('/:id', protect, admin, deleteUser)

export default router
