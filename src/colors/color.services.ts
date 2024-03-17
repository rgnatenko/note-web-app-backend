'use strict';

import { Color } from './color.typedefs';

export const colors: Color[] = [
  { id: 0,name: 'purple',hash: '#B488F8' },
  { id: 1, name: 'yellow', hash: '#E5F699' },
  { id: 2, name: 'red', hash: '#F5957A' },
  { id: 3, name: 'blue', hash: '#26E6FA' },
  { id: 4, name: 'orange', hash: '#F9CA7C' }
];

const findAll = () => colors;

const findById = (id: number) => {
  return colors.find(note => note.id === id);
};

export const colorsServices = {
  findAll,
  findById,
};
