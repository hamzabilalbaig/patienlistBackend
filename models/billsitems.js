"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class billsItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      billsItems.belongsTo(models.bills, { foreignKey: "invoiceId" });
    }
  }
  billsItems.init(
    {
      name: DataTypes.STRING,
      quantity: DataTypes.STRING,
      price: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      invoiceId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "billsItems",
    }
  );
  return billsItems;
};
