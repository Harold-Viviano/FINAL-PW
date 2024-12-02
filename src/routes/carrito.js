import express from 'express';
import controller from '../controllers/carrito.js';

const routes = express.Router();

routes.get('/', controller.findAll);
routes.post('/item', controller.addItem);
routes.delete('/:id', controller.remove);
routes.delete('/', controller.removeAll);
routes.put('/item/:id', controller.newQuantity);

export default routes;