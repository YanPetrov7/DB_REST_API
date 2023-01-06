import express from 'express';
import dataFileRoutes from './routes/dataFileRoutes.js';

const app = express();

app.use(express.json());
app.use('/dataFiles', dataFileRoutes);

export default app;