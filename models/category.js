'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name_category: DataTypes.STRING
  }, {});
  category.associate = function (models) {
    // associations can be defined here

    category.hasMany(models.articles, { foreignKey: 'category_id' })

  };
  return category;
};