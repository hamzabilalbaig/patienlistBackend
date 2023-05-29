"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Notes.belongsTo(models.patients, { foreignKey: "userId" });
    }
  }
  Notes.init(
    {
      type: DataTypes.STRING,
      note: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      signed: DataTypes.BOOLEAN,
      signedBy: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Notes",
    }
  );
  return Notes;
};
