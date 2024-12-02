import express from 'express'

import controller from '../controllers/producto.js'

const routes = express.Router()

routes.get('/', controller.findAll ) 
routes.post('/', controller.create )
routes.get('/:id', controller.findOne )
routes.put('/', controller.update )
routes.delete('/:id', controller.remove)

routes.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const producto = productos.find((prod) => prod.id === id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  });

export default routes;