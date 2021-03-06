'use strict';

module.exports = function (sequelize, DataTypes) {
  var Operation = sequelize.define('Operation', {
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    internal_code: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    obs: DataTypes.STRING
  }, {});

  Operation.associate = function (models) {
    Operation.hasMany(models.Order);
    Operation.belongsTo(models.User);
  };

  return Operation;
};