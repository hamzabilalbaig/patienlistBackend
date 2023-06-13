"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patients.hasMany(models.Notes, { foreignKey: "id" });
      patients.hasMany(models.vitals, { foreignKey: "id" });
      patients.hasMany(models.results, { foreignKey: "id" });
      patients.hasMany(models.bills, { foreignKey: "id" });
      patients.hasMany(models.orders, { foreignKey: "id" });
    }
  }
  patients.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.STRING,
      gender: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      all: DataTypes.STRING,
      meds: DataTypes.STRING,
      medhx: DataTypes.STRING,
      surghx: DataTypes.STRING,
      sochx: DataTypes.STRING,
      mrn: DataTypes.STRING,
      pcp: DataTypes.STRING,
      ins: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "patients",
    }
  );
  return patients;
};
