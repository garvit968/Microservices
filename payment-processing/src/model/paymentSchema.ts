import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig";

const Payments = sequelize.define('Payments',{
    payment_id:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
    order_id:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
    }
})

export default Payments