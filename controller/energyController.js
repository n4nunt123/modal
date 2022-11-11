const { Energy } = require('../models')

class EnergyController {
  static async getEnergies(req, res, next) {
    try {
      const data = await Energy.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getEnergy(req, res, next) {
    try {
      const { id } = req.params
      const data = await Energy.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async insertEnergy(req, res, next) {
    try {
      const { name, cost, priority, CapitalIndustryId } = req.body
      await Energy.create({ name, cost, priority, CapitalIndustryId })
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }

  static async updateEnergy(req, res, next) {
    try {
      const { name, cost, priority } = req.body
      const { id } = req.params
      const data = await Energy.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Energy.update({ name, cost, priority }, { where: { id }})
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }

  static async deleteEnergy(req, res, next) {
    try {
      const { id } = req.params
      const data = await Energy.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Energy.destroy({ where: { id } })
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EnergyController