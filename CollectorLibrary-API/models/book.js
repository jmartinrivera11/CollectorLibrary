'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Author, {foreignKey: 'authorId'});
      this.hasOne(models.ReadingStatus, {foreignKey: 'bookId'});
    }
  }
  Book.init({
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    publication_year: DataTypes.INTEGER,
    isbn: DataTypes.STRING,
    page_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};