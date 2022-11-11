const { FixCost } = require('../models')

class FixCostController {
  static async getFixCosts(req, res, next) {
    try {
      const data = await FixCost.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getFixCost(req, res, next) {
    try {
      const { id } = req.params
      const data = await FixCost.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async insertFixCost(req, res, next) {
    try {
      const { name, cost, priority, CapitalIndustryId } = req.body
      await FixCost.create({ name, cost, priority, CapitalIndustryId })
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }

  static async updateFixCost(req, res, next) {
    try {
      const { name, cost, priority } = req.body
      const { id } = req.params
      const data = await FixCost.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await FixCost.update({ name, cost, priority }, { where: { id } })
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }

  static async deleteFixCost(req, res, next) {
    try {
      const { id } = req.params
      const data = await FixCost.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await FixCost.destroy({ where: { id } })
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = FixCostController