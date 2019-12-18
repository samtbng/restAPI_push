'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', [
      {
        title: "The Economics of the Boomers",
        category_id: 1,
        content: "From the Mac startup tone to the Skype ring, sound designers discuss the legacy of their creations",
        img: "https://miro.medium.com/max/5184/1*df6SmsVK8k5m-gL85RqSag.jpeg",
        author_id: 1
      },
      {
        title: "The Joy of Being an Untethered Woman",
        category_id: 2,
        content: "On sex, solitude, and female friendship",
        img: "https://miro.medium.com/max/6400/1*ABKMOAKgjnC2CnuF8PDtsQ.jpeg",
        author_id: 3
      },
      {
        title: "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades",
        category_id: 3,
        content: "Twelve years ago, I had just returned from a four month solo journey in India. I received physically and emotionally intense Ayurveda",
        img: "https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg",
        author_id: 4
      },
      {
        title: "Three Magical Phrases to Comfort a Dying Person",
        category_id: 6,
        content: "Your disappearing act is probably saying far",
        img: "https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg",
        author_id: 2
      },
      {
        title: "The Economics of the Boomers (2)",
        category_id: 1,
        content: "From the Mac startup tone to the Skype ring, sound designers discuss the legacy of their creations",
        img: "https://miro.medium.com/max/5184/1*df6SmsVK8k5m-gL85RqSag.jpeg",
        author_id: 1
      },
      {
        title: "The Joy of Being an Untethered Woman(2)",
        category_id: 2,
        content: "On sex, solitude, and female friendship",
        img: "https://miro.medium.com/max/6400/1*ABKMOAKgjnC2CnuF8PDtsQ.jpeg",
        author_id: 3
      },
      {
        title: "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades(2)",
        category_id: 3,
        content: "Twelve years ago, I had just returned from a four month solo journey in India. I received physically and emotionally intense Ayurveda",
        img: "https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg",
        author_id: 4
      },
      {
        title: "Three Magical Phrases to Comfort a Dying Person(2)",
        category_id: 6,
        content: "Your disappearing act is probably saying far",
        img: "https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg",
        author_id: 2
      },
      {
        title: "The Economics of the Boomers (3)",
        category_id: 1,
        content: "From the Mac startup tone to the Skype ring, sound designers discuss the legacy of their creations",
        img: "https://miro.medium.com/max/5184/1*df6SmsVK8k5m-gL85RqSag.jpeg",
        author_id: 1
      },
      {
        title: "The Joy of Being an Untethered Woman(3)",
        category_id: 2,
        content: "On sex, solitude, and female friendship",
        img: "https://miro.medium.com/max/6400/1*ABKMOAKgjnC2CnuF8PDtsQ.jpeg",
        author_id: 3
      },
      {
        title: "A Nude ‘Playboy’ Photo Has Been a Mainstay in Testing Tech for Decades(3)",
        category_id: 3,
        content: "Twelve years ago, I had just returned from a four month solo journey in India. I received physically and emotionally intense Ayurveda",
        img: "https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg",
        author_id: 4
      },
      {
        title: "Three Magical Phrases to Comfort a Dying Person(3)",
        category_id: 6,
        content: "Your disappearing act is probably saying far",
        img: "https://miro.medium.com/max/5120/1*XCVXNUtfnv44Fgs_Sz-Wug.jpeg",
        author_id: 2
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {})
  }
};
