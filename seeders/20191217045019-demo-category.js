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
        name_category: "Hiking",
      },
      {
        name_category: "Travelling",
      },
      {
        name_category: "Cars",
      },
      {
        name_category: "Fashion",
      },
      {
        name_category: "Aesthetic",
      },
      {
        name_category: "Music",
      },
      {
        name_category: "Film",
      },
      {
        name_category: "Healthy",
      },
      {
        name_category: "Bussiness",
      },
      {
        name_category: "Photography",
      },
      {
        name_category: "Law",
      },
      {
        name_category: "Education",
      },
      {
        name_category: "Electronics",
      },
      {
        name_category: "Communication",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
  }
};
