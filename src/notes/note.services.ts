'use strict';

import { UUID, randomUUID } from 'crypto';
import { Note } from './note.typedefs';
import { createNoteDate } from '../helpers/createNoteDate';

export let notes: Note[] = [];

type Options = Pick<Note, 'colorId' | 'text'>;

const findAll = () => notes;

const findById = (id: UUID) => {
  return notes.find(note => note.id === id);
};

const create = (options: Options) => {
  const newNoteId = randomUUID();
  const newNoteDate = createNoteDate(new Date());

  const newNote = { ...options, id: newNoteId, date: newNoteDate };

  notes = [...notes, newNote];

  return newNote;
};

const remove = (id: UUID) => {
  notes = notes.filter(note => note.id !== id);
};

const update = (note: Note, options: Options) => {
  const updatedNoteDate = note.date !== createNoteDate(new Date())
    ? createNoteDate(new Date())
    : note.date;

  Object.assign(note, { ...options, date: updatedNoteDate });
};

export const notesServices = {
  findAll,
  findById,
  create,
  remove,
  update,
};
