"use strict";

const { UUIDV4 } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      sellerId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "users", key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      productDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productPrice: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productPictures: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
