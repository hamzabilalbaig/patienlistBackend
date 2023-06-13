"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */ return Promise.all([
      queryInterface.addColumn("patients", "mrn", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("patients", "pcp", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("patients", "ins", {
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
