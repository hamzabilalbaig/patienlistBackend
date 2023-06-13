"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.patients, { foreignKey: "patientId" });
      orders.belongsTo(models.Pharmacy, { foreignKey: "itemId" });
    }
  }
  orders.init(
    {
      patientId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      quantity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "orders",
    }
  );
  return orders;
};
