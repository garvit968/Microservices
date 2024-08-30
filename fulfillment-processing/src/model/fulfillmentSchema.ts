import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig";

const Fulfillments = sequelize.define('Fulfillments',{
    order_id:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
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
    shipment_id:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: false
    },
    payment_id:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Fulfillments