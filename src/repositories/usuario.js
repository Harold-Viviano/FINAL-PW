import model from '../models/usuario.js'

const findAll = async () => {
    return await model.findAll();
}

const create = async (usuario) => {
    return await model.create(usuario);
}

const findOne = (id) => {
    const result = usuarios.find(x => x.id == id);

    return result;
}

const update = (usuario) => {
    const index = usuarios.findIndex(item => item.id == usuario.id);

    if (index > -1) {
        usuarios[index] = usuario;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = usuarios.findIndex(item => item.id == id);

    if (index > -1) {
        usuarios.splice(index,1);
        return true;
    }
    else   
        return false;
}

const removeAll = () =>{

    usuarios = [];

    
}




const repository = { findAll, create, findOne, update, remove,removeAll }

export default repository;