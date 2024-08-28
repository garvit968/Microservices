import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379',
})

async function connectRedis(){
    try {
        await client.connect()
        console.log("Redis Connected...")
    } catch (error) {
        console.log("Connection failed...",error)
    }
}

client.on('error',(err)=>{
    console.log("Redis connection fail", err)
})

process.on('SIGINT', async () => {
    console.log("Disconnecting Redis...");
    await client.quit();
    process.exit(0);
});

connectRedis()

export default client