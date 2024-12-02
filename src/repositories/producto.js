import model from '../models/producto.js';

const findAll = async () => {
    return await model.findAll();
};

const create =  async (producto) => {
    return  await model.create(producto);
};

const findOne = async (id) => {
    return await model.findByPk(id);
};

const update = async (producto) => {
    const result = await model.update(producto, {
        where: { id: producto.id },
    });

    return result[0] > 0; 
};

const remove = async (id) => {
    const result = await model.destroy({
        where: { id },
    });

    return result > 0; 
};

const repository = { findAll, create, findOne, update, remove };

export default repository;
