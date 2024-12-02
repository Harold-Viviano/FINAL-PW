let carrito = { items: [], subtotal: 0 };

const findAll = () => carrito;

const addItem = (producto) => {
  const index = carrito.items.findIndex(item => item.id === producto.id);

  if (index > -1) {
    carrito.items[index].cantidad += 1;
  } else {
    carrito.items.push({ ...producto, cantidad: 1 });
  }

  carrito.subtotal = carrito.items.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);
  return carrito;
};

const remove = (id) => {
  const index = carrito.items.findIndex(item => item.id === parseInt(id, 10));
  if (index > -1) {
    carrito.items.splice(index, 1);
    carrito.subtotal = carrito.items.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);
    return true;
  }
  return false;
};

const removeAll = () => {
  carrito.items = [];
  carrito.subtotal = 0;
  return carrito;
};

const newQuantity = (id, cantidad) => {
  const index = carrito.items.findIndex(item => item.id === parseInt(id, 10));
  if (index > -1) {
    carrito.items[index].cantidad = cantidad;
    carrito.subtotal = carrito.items.reduce((acc, curr) => acc + (curr.precio * curr.cantidad), 0);
    return true;
  }
  return false;
};

export default { findAll, addItem, remove, removeAll, newQuantity };
