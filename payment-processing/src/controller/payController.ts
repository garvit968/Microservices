import { v4 as uuidv4 } from "uuid";
import client from "../config/redisConfig";
import sendMessage from "../rabbitMQ/sender";

export const proceedPay = async(msg: any) =>{
    try {        
        const cont = msg.content.toString()
        const content = JSON.parse(cont)
        const { user_id, product_id, total_price, status } = content
        console.log("pay", content.user_id)
        const payment_id = uuidv4()
        const redisKey = `Payments:${payment_id}`
        const pays = await client.hSet(redisKey,{
            product_id, 
            user_id, 
            total_price: total_price.toString(),
            status: status.toString()
        })
        const queue = "paymentQueue"
        const message = JSON.stringify({payment_id, total_price, user_id, status})
        sendMessage(queue, message)
    } catch (error) {
        console.log("Error Ocurred", error)
    }   
}