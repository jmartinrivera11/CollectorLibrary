'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Authors", [
      {
        id: 1,
        first_name: "J.K.",
        last_name: "Rowling",
        birth_year: "1965",
        nationality: "British",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 2,
        first_name: "George",
        last_name: "Orwell",
        birth_year: "1903",
        nationality: "British",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]).then(() => {
      return queryInterface.bulkInsert("Books", [
        {
          id: 1,
          title: "Harry Potter and the Sorcerer's Stone",
          authorId: 1,
          genre: "Fantasy",
          publication_year: "1997",
          isbn: "978-0439553448",
          page_count: 309,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 2,
          title: "1984",
          authorId: 2,
          genre: "Dystopian",
          publication_year: "1949",
          isbn: "978-0451524935",
          page_count: 328,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Books", null, {}).then(() => {
      return queryInterface.bulkDelete("Authors", null, {});
    });
  },
};
