import amqp from 'amqplib'

export default async function recieveMessage(){
    try {
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()
        
        const queue = `Payments`
        
        await channel.assertQueue(queue, {
            durable: true, // ensures the queue survives server restarts
        });
        
        channel.prefetch(1)
        console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);
        
        channel.consume(queue, (msg)=>{
            if(msg === null){
                console.log("No message", msg)
                return ;
            }
                const content = msg.content.toString()
                console.log(`[x] Received ${content}`);
                
                setTimeout(() => {
                    console.log('[x] Done');
                    channel.ack(msg); // Acknowledge the message has been processed
                }, content.length * 1000);
        },{
            noAck:false
        })
    } catch (error) {
        console.log(error)   
    }
}