import Payments from "../model/paymentSchema"

export default async function paymentDone(msg:any) {
    try {
        const cont = msg.content.toString()
        const content = cont.JSON.parse()
        const {payment_id, total_price, user_id, status} = content
        if(status == false){
            console.log("Payment not successful")
        }
        else{
            // push to database and set status to true
            const order = await Payments.create({ payment_id, user_id, total_price, status });
        }
    } catch (error) {
        console.log("Error occured", error)
    }
}