const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Producto = sequelize.define("Productos", {
  Codigo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  Precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  
}, {
  tableName: "Productos",
  timestamps: false, // si la tabla no tiene createdAt / updatedAt
});

module.exports = Producto;
