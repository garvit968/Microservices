import express from 'express'
import { proceedPay } from '../controller/payController'
import paymentDone from '../controller/paydoneController'

const router = express.Router()
router.post("/payment-intiate",proceedPay)
router.post("/payment-complete",paymentDone)

export default router