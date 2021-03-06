'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      internal_code: {
        type: Sequelize.STRING,
        defaultValue: '----'
      },
      internal_code_order: {
        type: Sequelize.STRING,
        defaultValue: '----'
      },
      purchase: {
        type: Sequelize.DECIMAL,
        defaultValue: 0
      },
      iva: {
        type: Sequelize.DECIMAL,
        defaultValue: 0
      },
      discount: {
        type: Sequelize.DECIMAL,
        defaultValue: 0
      },
      total: {
        type: Sequelize.DECIMAL,
        defaultValue: 0
      },
      userId: {
        type: Sequelize.INTEGER
      },
      providerId: {
        type: Sequelize.INTEGER
      },
      inputId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      description: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      serial_number: {
        type: Sequelize.STRING
      },
      obs: {
        type: Sequelize.STRING
      },
      manufactured_by: {
        type: Sequelize.STRING
      },
      type_value: {
        type: Sequelize.STRING,
        defaultValue: 'A'
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      year_made: {
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Articles');
  }
};