"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn("patients", "all", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("patients", "meds", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("patients", "medhx", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("patients", "surghx", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("patients", "sochx", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
