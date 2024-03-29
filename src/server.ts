import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as notesRouter } from './notes/note.routes';
import { router as colorsRouter } from './colors/color.routes';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/notes', notesRouter);
app.use('/colors', colorsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
