"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appointments.init(
    {
      date: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      duration: DataTypes.STRING,
      slot: DataTypes.STRING,
      patientName: DataTypes.STRING,
      doctorName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "appointments",
    }
  );
  return appointments;
};
