'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name_category: "Programming",
      },
      {
        name_category: "Lifestyle",
      },
      {
        name_category: "Otomotive",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todos', null, {})
  }
};
