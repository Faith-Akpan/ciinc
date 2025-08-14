const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const quality_control = sequelize.define(
    'quality_control',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

inspection_stage: {
        type: DataTypes.TEXT,

      },

passed: {
        type: DataTypes.BOOLEAN,

        allowNull: false,
        defaultValue: false,

      },

notes: {
        type: DataTypes.TEXT,

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

  quality_control.associate = (db) => {

    db.quality_control.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.quality_control.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return quality_control;
};

