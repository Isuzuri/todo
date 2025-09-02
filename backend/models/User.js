import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    defaultScope: {
        attributes: {
            exclude: ['password']
        },
    },
    scopes: {
        withPassword: {
            attributes: {
                include: ['password']
            }
        }
    }
})

export default User;