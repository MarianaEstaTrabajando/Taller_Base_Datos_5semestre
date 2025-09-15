const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tienda", "sa", "12345678", {
  host: "localhost",
  dialect: "mssql", // por usar SQL Server
  dialectOptions: {
    options: {
      encrypt: false, // cambiarlo a true si SQL requiere SSL
      trustServerCertificate: true, // necesario en local
    },
  },
});

module.exports = sequelize;
