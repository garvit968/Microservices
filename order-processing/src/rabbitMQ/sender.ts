import amqp from 'amqplib'
import { Messages } from '../middleware/types'

async function sendMessage(queue: string, msg: string) {
    try {
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()

        const q = `${queue}`
        const message = `${msg}`

        await channel.assertQueue(q, {
            durable: true
        })

        channel.sendToQueue(q, Buffer.from(message), {
            persistent: true
        })

        console.log(`[x] Sent ${q}`);
        console.log(`[x] Sent ${message}`);

        setTimeout(() => {
            channel.close()
            connection.close()
        }, 500);
    } catch (error) {
        console.log("error", error)
    }
}

export default sendMessage