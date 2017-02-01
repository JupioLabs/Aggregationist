var Sequelize = require('sequelize');
var sequelize = new Sequelize('DBName', 'username', 'password', {
    host: '172.0.0.1',
    port: '1433',
    dialect: 'mssql'
});

module.exports = sequelize;