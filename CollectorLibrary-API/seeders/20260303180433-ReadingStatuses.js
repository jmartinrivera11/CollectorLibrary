'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ReadingStatuses", [
      {
        id: 1,
        bookId: 1,
        status: "Read",
        date_started: new Date("2023-01-01"),
        date_finished: new Date("2023-01-15"),
        rating: 5,
        notes: "Excellent book!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ReadingStatuses", null, {});
  }
};
