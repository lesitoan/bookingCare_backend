const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('newdb', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false
// });

const sequelize = new Sequelize('bg207posdezeu5hgs15d', 'uqkrpuwhfmj5xep6', 'Df31UrO1QmIZVlTqtbFY', {
    host: 'bg207posdezeu5hgs15d-mysql.services.clever-cloud.com',
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

