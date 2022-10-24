'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FixCost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FixCost.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    priority: DataTypes.STRING,
    CapitalIndustryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FixCost',
  });
  return FixCost;
};