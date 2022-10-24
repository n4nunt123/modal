'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asset.belongsTo(models.CapitalIndustry, {
        foreignKey: 'CapitalIndustryId'
      })
    }
  }
  Asset.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    assetReplacement: DataTypes.INTEGER,
    priority: DataTypes.STRING,
    CapitalIndustryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};