"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class vitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      vitals.belongsTo(models.patients, { foreignKey: "patientId" });
    }
  }
  vitals.init(
    {
      t: DataTypes.STRING,
      bp: DataTypes.STRING,
      hr: DataTypes.STRING,
      pr: DataTypes.STRING,
      spotwo: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "vitals",
    }
  );
  return vitals;
};
