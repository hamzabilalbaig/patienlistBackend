'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pharmacy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pharmacy.init({
    itemName: DataTypes.STRING,
    itemType: DataTypes.STRING,
    itemCategory: DataTypes.STRING,
    price: DataTypes.STRING,
    quantity: DataTypes.STRING,
    stock: DataTypes.STRING,
    grade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pharmacy',
  });
  return Pharmacy;
};