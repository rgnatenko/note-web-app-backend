import express from 'express';
import cors from 'cors';
import { router as notesRouter } from './notes/note.routes';
import { router as colorsRouter } from './colors/color.routes';
const PORT = 5000;
const CLIENT_URL = 'http://localhost:3000';
const app = express();

app.use(cors({
  origin: CLIENT_URL
}));

app.use(express.json());

app.use('/notes', notesRouter);
app.use('/colors', colorsRouter);

app.listen(5000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
