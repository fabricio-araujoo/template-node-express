import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import todoRoutes from './adapters/routes/TodoRoutes';
import notFoundHandler from './adapters/middlewares/NotFoundHandler';
import errorHandler from './adapters/middlewares/ErrorHandler';

import 'express-async-errors';
import './config/db';

const app = express();

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/v1', todoRoutes);

// Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
