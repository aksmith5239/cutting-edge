const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init(
    {
        //table definitions
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        style: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
           type: DataTypes.STRING,
           allowNull: false
       },
        style_image: {
           type: DataTypes.STRING,
           allowNull: false
       },
        price: {
           type: DataTypes.DECIMAL,
           allowNull: false
       },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            } 
        },
        stylist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'stylist',
                key: 'id'
            } 
        }
    },
    {
        //table configuration
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'service'
    }
);

module.exports = Service;