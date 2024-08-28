import express from 'express'
import globalRoutes from './routes/globalRoutes'
const app = express()
import sequelize from './config/dbConfig'
import bodyParser from 'body-parser'

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

app.use(express.json()); 

app.use('/api/v1',globalRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });