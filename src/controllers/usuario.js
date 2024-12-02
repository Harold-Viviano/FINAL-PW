import repository from '../repositories/usuario.js';

const findAll = async (req, res) => {
    const usuarios = await repository.findAll();

    return res.status(200).json(usuarios);
}

const create = async (req, res) => {
    const usuario = req.body;
    const usuarioCreated = await repository.create(usuario);
    return res.status(201).json(usuarioCreated)
}

const findOne = (req,res) => {
    
    const id = req.params.id;

    const result = repository.findOne(id);

    return res.status(200).json(result);
}

const update = (req, res) => {
    const usuario = req.body;
    const result = repository.update(usuario);

    return res.status(200).json(result)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}
const removeAll = (req,res)=>{
    const result = repository.removeAll();

    return res.status(200).json(result);
}
const controller = { findAll, create, findOne, update, remove,removeAll }

export default controller;