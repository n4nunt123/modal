const { Asset } = require('../models')

class AssetController {
  static async getAssets(req, res, next) {
    try {
      const data = await Asset.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getAsset(req, res, next) {
    try {
      const { id } = req.params
      const data = await Asset.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
  static async insertAsset(req, res, next) {
    try {
      const { name, cost, priority, assetReplacement, CapitalIndustryId } = req.body
      await Asset.create({ name, cost, priority, assetReplacement, CapitalIndustryId })
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }
  static async updateAsset(req, res, next) {
    try {
      const { name, cost, assetReplacement, priority } = req.body
      const { id } = req.params
      const data = await Asset.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Asset.update({ name, cost, assetReplacement, priority }, { where: { id }})
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }
  static async deleteAsset(req, res, next) {
    try {
      const { id } = req.params
      const data = await Asset.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Asset.destroy({ where: { id } })
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AssetController