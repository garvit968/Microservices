import {v4 as uuidv4} from 'uuid'
import client from '../config/redisConfig'

export const fulfillmentController = async(msg:any) =>{
    const cont = msg.content.toString()
    const content = JSON.parse(cont)
    const { user_id, product_id, status, payment_id } = content
    const shipment_id = uuidv4()
    if(status == false){
        console.log("Shipment not recieved")
        return ;
    }
    const redisKey = `Order:${shipment_id}`
    const shipment = await client.hSet(redisKey, {
        product_id,  
        user_id,
        payment_id,
        status
    });
}