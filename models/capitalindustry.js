'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CapitalIndustry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CapitalIndustry.hasMany(models.Accommodation, {
        foreignKey: 'CapitalIndustryId'
      })
      CapitalIndustry.hasMany(models.Asset, {
        foreignKey: 'CapitalIndustryId'
      })
      CapitalIndustry.hasMany(models.Energy, {
        foreignKey: 'CapitalIndustryId'
      })
      CapitalIndustry.hasMany(models.FixCost, {
        foreignKey: 'CapitalIndustryId'
      })
      CapitalIndustry.hasMany(models.Maintenance, {
        foreignKey: 'CapitalIndustryId'
      })
      CapitalIndustry.hasMany(models.RawMaterial, {
        foreignKey: 'CapitalIndustryId'
      })
    }
  }
  CapitalIndustry.init({
    name: DataTypes.STRING,
    companyLogo: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    companyLink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CapitalIndustry',
  });
  return CapitalIndustry;
};