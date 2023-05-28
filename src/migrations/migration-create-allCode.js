'use strict';

const { sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Allcodes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            keyMap: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            valueEn: {
                type: Sequelize.STRING
            },
            valueVi: {
                type: Sequelize.STRING
            },
            createdAt: {
                // allowNull: false,
                type: Sequelize.DATE,
                // defaultValue: Sequelize.fn('NOW')
            },
            updatedAt: {
                // allowNull: false,
                type: Sequelize.DATE,
                // defaultValue: Sequelize.fn('NOW')
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Allcodes');
    }
};