import amqp from 'amqplib'

export default async function sendMessage(queue:string, message: string) {
    try {
        const connection = await amqp.connect('amqp://localhost')
        const channel = await connection.createChannel()

        const q = `${queue}`
        const m = `${message}`

        await channel.assertQueue(q, {
            durable: true
        })

        channel.sendToQueue(q, Buffer.from(m), {
            persistent: true
        })

        console.log(`[x] Sent ${q}`);
        console.log(`[x] Sent ${m}`);

        setTimeout(() => {
            channel.close()
            connection.close()
        }, 500);
    } catch (error) {
        console.log("error", error)
    }
}