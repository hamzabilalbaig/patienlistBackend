"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class results extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      results.belongsTo(models.patients, { foreignKey: "patientId" });
    }
  }
  results.init(
    {
      report: DataTypes.STRING,
      image: DataTypes.STRING,
      imagetype: DataTypes.STRING,
      imagesize: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "results",
    }
  );
  return results;
};
