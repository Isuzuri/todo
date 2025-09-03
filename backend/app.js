import express from 'express';
import sequelize from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import cookieParser from 'cookie-parser';
import './models/associations.js'
import './dotenv.js'

// DB connect
export const app = express()
app.use(express.json())

// CORS Policy 
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Cookie connect
app.use(cookieParser());

// Routes
app.use('/user', userRoutes)
app.use('/task', taskRoutes)

// DB Sync and Server start (if all good)
sequelize.sync().then(() => {
  console.log('База данных синхронизирована');
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
  });
}).catch(err => {
  console.error('Ошибка синхронизации базы:', err);
});

