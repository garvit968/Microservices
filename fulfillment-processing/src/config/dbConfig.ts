import { Sequelize } from "sequelize"

const sequelize = new Sequelize('test', 'admin', 'admin' ,{
    host: "localhost",
    dialect: "postgres"
})

export default sequelize