'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    img: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  articles.associate = function (models) {
    // associations can be defined here
  };
  return articles;
};