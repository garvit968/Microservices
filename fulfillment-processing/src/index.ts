import express from 'express'
import sequelize from './config/dbConfig';
const app = express()

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

// app.use('/api/v1',globalRoutes)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });