const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Venta = sequelize.define("Venta", {
  NoTicket: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Codigo: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  CajeroId: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  Fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  CostoTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  
}, {
  tableName: "Venta",
  timestamps: false, // si la tabla no tiene createdAt / updatedAt
});

module.exports = Venta;
