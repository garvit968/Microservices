import { Request, Response } from "express"
import { INTEGER } from "sequelize"

export interface Messages{
    queue: String,
    msg: String
}

export interface ReqRes {
    req: Request,
    res: Response
}

export interface Orderr {
        order_id: String,
        product_id: String, 
        user_id: String,
        total_price: Number,
        status: Boolean
}