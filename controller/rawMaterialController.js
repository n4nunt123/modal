const { RawMaterial } = require('../models')

class RawMaterialController {
  static async getRawMaterials(req, res, next) {
    try {
      const data = await RawMaterial.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getRawMaterial(req, res, next) {
    try {
      const { id } = req.params
      const data = RawMaterial.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
  static async insertRawMaterial(req, res, next) {
    try {
      const { name, cost, CapitalIndustryyId } = req.body
      await RawMaterial.create({ name, cost, CapitalIndustryyId })
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }
  static async updateRawMaterial(req, res, next) {
    try {
      const { name, cost } = req.body
      const { id } = req.params
      const data = await RawMaterial.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await RawMaterial.update({ name, cost }, { where: { id } })
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }
  static async deleteRawMaterial(req, res, next) {
    try {
      const { id } = req.params
      const data = await RawMaterial.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await RawMaterial.destroy({ where: { id } })
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = RawMaterialController