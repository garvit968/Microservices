import client from "../config/reddisConfig";
import { ReqRes } from "../middleware/types";

export const removeOrder = async({req,res}: ReqRes) =>{
    const { order_id } = req.body;

    const redisKey = `Order:${order_id}`

    await client.del(redisKey)
   
    return res.status(200).json({ success: true, message: "Order deleted successfully" });


}