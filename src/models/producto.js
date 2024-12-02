import sequelize from "../config/data.js";
import { DataTypes } from "sequelize";

const producto = sequelize.define('producto', {

  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      },

  titulo: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.DOUBLE,

  },

  descuento: {
    type: DataTypes.DOUBLE,

  },
  descontado: {
    type: DataTypes.DOUBLE,

  },
  imagen : {
    type: DataTypes.STRING,
  }
});

export default producto;
