import sequelize from '../config/db.js';
import { DataTypes } from 'sequelize';
const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    isComplete: {
        type: DataTypes.BOOLEAN
    }

}, {})

export default Task;