import express from 'express'
import sequelize from './config/dbConfig'
import globalRoutes from './route/globalRoutes'

const app =  express()

require('dotenv').config()

sequelize.authenticate()
.then(() => {
    console.log("Connection Established")
}).catch((err:any) => {
    console.log("Unable to connect", err)
});

sequelize.sync().then(() => {
    console.log('Database synchronized');
 }).catch(err => {
    console.error('Error synchronizing database:', err);
});

const PORT = 3000

app.use(express.json())

app.use('/api/v1',globalRoutes)

app.listen(PORT,()=>{
    console.log(`Connected to Port ${PORT}`)
})