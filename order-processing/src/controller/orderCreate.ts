import { v4 as uuidv4 } from 'uuid';
import { ReqRes, Orderr } from "../middleware/types";
import Orders from "../model/orderSchema";
import client from '../config/reddisConfig';
import sendMessage from '../rabbitMQ/sender';
import {Request, Response} from 'express'

export const createOrder = async (req: Request, res: Response) => {
    const { product_id, user_id, total_price } =  req.body;
    const status = false;

    if (!product_id || !user_id || !total_price) {
        return res.status(400).json({ success: false, message: "Enter Fields Properly" });
    }
    
    const order_id = uuidv4(); 
    try {
        // const ord = {
        //     order_id,
        //     product_id,
        //     user_id,
        //     total_price,
        //     status
        // } 


        // const order = await Orders.create({ order_id, product_id, user_id, total_price, status });
        
        const redisKey = `Order:${order_id}`
        const order = await client.hSet(redisKey, {
            product_id,  
            user_id,
            total_price: total_price.toString(),
            status: status.toString()
        });

        res.status(200).json({ order, message: "Order Added" });


        const queue = "orderQueue"
        const message = JSON.stringify({order_id,user_id,total_price,status})
        sendMessage(queue,message)
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({ success: false, message: "Failed to create order" });
    }
}
