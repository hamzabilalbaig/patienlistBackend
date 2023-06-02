"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bills.belongsTo(models.patients, { foreignKey: "patientId" });
      bills.hasMany(models.billsItems, { foreignKey: "id" });
    }
  }
  bills.init(
    {
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bills",
    }
  );
  return bills;
};
