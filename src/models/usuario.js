import sequelize from "../config/data.js";
import { DataTypes } from "sequelize";

const usuario = sequelize.define('usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  apellido: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.INTEGER,
  },
  fechaNacimiento: {
    type: DataTypes.STRING,
  },
  DNI: {
    type: DataTypes.INTEGER,
  },
  correoelectrico: {
    type: DataTypes.STRING,
  },
  contraseña: {
    type: DataTypes.STRING,
  },
});

export default usuario;
