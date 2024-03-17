'use strict';

import express from 'express';
import { colorControllers } from './color.controllers';

const {
  getAll,
  findById,
} = colorControllers;

export const router = express.Router();

router.get('/', getAll);
router.get('/:id', findById);
