const { Accommodation } = require('../models')

class AccommodationController {
  static async getAccomodations(req, res, next) {
    try {
      const data = await Accommodation.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getAccomodation(req, res, next) {
    try {
      const { id } = req.params
      const data = await Accommodation.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async insertAccomodation(req, res, next) {
    try {
      const { name, cost, priority, CapitalIndustryId } = req.body
      await Accommodation.create({ name, cost, priority, CapitalIndustryId })
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }

  static async updateAccomodation(req, res, next) {
    try {
      const { name, cost, priority } = req.body
      const { id } = req.params
      const data = await Accommodation.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Accommodation.update({ name, cost, priority }, { where: { id }})
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }

  static async deleteAccomodation(req, res, next) {
    try {
      const { id } = req.params
      const data = await Accommodation.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Accommodation.destroy({ where: { id } })
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = AccommodationController