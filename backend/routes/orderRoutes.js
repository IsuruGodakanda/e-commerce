import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderDeliverStatus,
  getMyOrders,
  getOrders
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.post('/', protect, addOrderItems)

router.get('/', protect, admin, getOrders)

router.get('/myorders', protect, getMyOrders)

router.get('/:id', protect, getOrderById)

router.put('/:id/pay', protect, updateOrderToPaid)

router.put('/:id/deliver', protect, admin, updateOrderDeliverStatus)

export default router
