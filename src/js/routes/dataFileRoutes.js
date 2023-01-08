import express from 'express';
import { createDataFile, getDataFiles, getDataFile, deleteDataFile, updateDataFile } from '../controllers/dataFilesController.js';

const router = express.Router();

router.get('/', getDataFiles);

router.post('/', createDataFile);

router.get('/:id', getDataFile);

router.delete('/:id', deleteDataFile);     

router.patch('/:id', updateDataFile);

export default router;