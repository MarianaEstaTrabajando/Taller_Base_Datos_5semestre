import { Sequelize } from "sequelize";
const connection = new Sequelize('tienda', 'sa', '12345678', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        }
    },
    port: 3000
});




export default connection;