'use strict';

import { noteControllers } from './note.controllers';
import express from 'express';

const {
  getAll,
  findById,
  create,
  remove,
  update,
} = noteControllers;

export const router = express.Router();

router.get('/', getAll);
router.get('/:id', findById);
router.post('/', create);
router.delete('/:id', remove);
router.patch('/:id', update);
