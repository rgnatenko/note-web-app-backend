'use strict';

import { UUID } from 'crypto';
import { Controller } from '../typedefs/typedefs';
import { notesServices } from './note.services';
import { isValidNumber } from '../helpers/isValidNumber';
import { colorsServices } from '../colors/color.services';

const getAll: Controller = (req, res) => {
  const notes = notesServices.findAll();

  res.send(notes);
};

const findById: Controller = (req, res) => {
  const { id } = req.params;
  const note = notesServices.findById(id as UUID);

  if (!note) {
    res.sendStatus(404);
    return;
  }

  res.send(note);
};

const create: Controller = (req, res) => {
  const { text, colorId } = req.body;
  const color = colorsServices.findById(colorId);

  if (!isValidNumber(colorId)) {
    res.status(400).send('Invalid color id');
    return;
  }

  if (!text || typeof text !== 'string') {
    res.status(400).send('Invalid text');
  }

  if (!color) {
    res.status(404).send('Color not found');
    return;
  }

  const newNote = notesServices.create({
    text,
    colorId,
  });

  res.status(201).send(newNote);
};

const remove: Controller = (req, res) => {
  const { id } = req.params;
  const noteToDelete = notesServices.findById(id as UUID);

  if (!noteToDelete) {
    res.sendStatus(404);
    return;
  }

  notesServices.remove(id as UUID);

  res.status(204).send('Note deleted successfully');
};

const update: Controller = (req, res) => {
  const { id } = req.params;
  const { text, colorId, highlighted } = req.body;

  const noteToUpdate = notesServices.findById(id as UUID);
  const color = colorsServices.findById(colorId);

  if (!noteToUpdate) {
    res.sendStatus(404);
    return;
  }

  if (!isValidNumber(colorId)) {
    res.status(400).send('Invalid color id');
    return;
  }

  if (!color) {
    res.status(404).send('Color not found');
    return;
  }

  notesServices.update(noteToUpdate, { text, colorId, highlighted });

  res.status(204).send(noteToUpdate);
};

export const noteControllers = {
  getAll,
  findById,
  create,
  remove,
  update,
};
