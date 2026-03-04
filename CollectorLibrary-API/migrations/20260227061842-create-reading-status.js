'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReadingStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      date_started: {
        type: Sequelize.DATE
      },
      date_finished: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
      },
      bookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Books', key: 'id' },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReadingStatuses');
  }
};