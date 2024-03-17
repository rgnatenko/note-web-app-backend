import { Controller } from '../typedefs/typedefs';
import { colorsServices } from './color.services';

const getAll: Controller = (req, res) => {
  const colors = colorsServices.findAll();

  res.send(colors);
};

const findById: Controller = (req, res) => {
  const { id: idParams } = req.params;
  const id = Number(idParams);

  const color = colorsServices.findById(id);

  if(!color) {
    res.sendStatus(404);
    return;
  }

  res.send(color);
};

export const colorControllers = {
  getAll,
  findById,
};
