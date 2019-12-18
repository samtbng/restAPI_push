'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        username: "samtbng",
        password: "adaaja123",
        fullname: "Samuel Tobing",
        email: "samuel@gmail.com",
        avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/220px-Patrick_Star.svg.png",
        is_active: 0
      },
      {
        username: "mrandi",
        password: "soktaulu",
        fullname: "Muhammad Randi",
        email: "randi@gmail.com",
        avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/220px-Sandy_Cheeks.svg.png",
        is_active: 0
      },
      {
        username: "chandra",
        password: "adaaja123",
        fullname: "Chandra Antonious",
        email: "chandra@gmail.com",
        avatar: "https://www.pikpng.com/pngl/m/72-727346_spongebob-characters-hd-png-download.png",
        is_active: 0
      },
      {
        username: "mrsantuy",
        password: "soktaulu",
        fullname: "Faisal Adhi",
        email: "mrsantuy@gmail.com",
        avatar: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
        is_active: 0
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
