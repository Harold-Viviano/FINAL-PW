import repository from '../repositories/carrito.js';

const findAll = async  (req, res) => {
  const carrito = await repository.findAll();
  return res.status(200).json(carrito);
};

const addItem = (req, res) => {
  const producto = req.body;
  const carritoActualizado = repository.addItem(producto);
  return res.status(201).json(carritoActualizado);
};

const remove = (req, res) => {
  const id = req.params.id;
  const result = repository.remove(id);
  return res.status(200).json({ success: result, message: result ? 'Producto eliminado' : 'Producto no encontrado' });
};

const removeAll = (req, res) => {
  const carritoVacio = repository.removeAll();
  return res.status(200).json({ message: 'Carrito vaciado', carrito: carritoVacio });
};

const newQuantity = (req, res) => {
  const id = req.params.id;
  const { cantidad } = req.body;
  const result = repository.newQuantity(id, cantidad);
  return res.status(200).json({ success: result, message: result ? 'Cantidad actualizada' : 'Producto no encontrado' });
};

export default { findAll, addItem, remove, removeAll, newQuantity };