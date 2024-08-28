import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig";

const Orders = sequelize.define('Orders',{
    order_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
    },
    product_id:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    user_id:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    total_price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull:false,
        unique: false
    }
})

export default Orders