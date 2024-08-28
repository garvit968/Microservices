import { createOrder } from "../controller/orderCreate"
import express from 'express'

const router = express.Router()
router.post("/order-create",createOrder)

export default router