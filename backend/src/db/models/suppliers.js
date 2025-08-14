const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const suppliers = sequelize.define(
    'suppliers',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

supplier_name: {
        type: DataTypes.TEXT,

      },

contact_details: {
        type: DataTypes.TEXT,

      },

contract_terms: {
        type: DataTypes.TEXT,

      },

delivery_schedule: {
        type: DataTypes.DATE,

      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  suppliers.associate = (db) => {

    db.suppliers.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.suppliers.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return suppliers;
};

