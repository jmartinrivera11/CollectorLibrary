'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReadingStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
    }
  }
  ReadingStatus.init({
    bookId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    date_started: DataTypes.DATE,
    date_finished: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    notes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ReadingStatus',
  });
  return ReadingStatus;
};