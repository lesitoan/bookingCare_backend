import dotenv from "dotenv";
dotenv.config();
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('newdb', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false
// });

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection has been established successfully');
    } catch (err) {
        console.log('unable to connect to the database:', err);
    }
};

module.exports = connectDB;

