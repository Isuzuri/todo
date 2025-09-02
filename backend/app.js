import express from 'express';
import sequelize from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import './models/associations.js'
import './dotenv.js'

// DB connect
export const app = express()
app.use(express.json())

// Routes
app.use('/user', userRoutes)
app.use('/task', taskRoutes)

// Express start
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})

// Sequalize start
sequelize.sync().then(() => {
    console.log('База данных синхронизирована');
});
