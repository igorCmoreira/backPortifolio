'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      src: {
        type: Sequelize.STRING
      },
      alt: {
        type: Sequelize.STRING
      },
      aboutResume: {
        allowNull: true,
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      githubLink: {
        type: Sequelize.STRING
      },
      initialDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};