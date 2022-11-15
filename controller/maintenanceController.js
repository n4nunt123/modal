const { Maintenance } = require('../models')

class MaintenanceController {
  static async getMaintenances(req, res, next) {
    try {
      const data = await Maintenance.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getMaintenance(req, res, next) {
    try {
      const { id } = req.params
      const data = Maintenance.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async insertMaintenance(req, res, next) {
    try {
      const { name, cost, CapitalIndustryyId } = req.body
      await Maintenance.create({ name, cost, CapitalIndustryyId })
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }
  
  static async updateMaintenance(req, res, next) {
    try {
      const { name, cost } = req.body
      const { id } = req.params
      const data = await Maintenance.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Maintenance.update({ name, cost }, { where: { id } })
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }

  static async deleteMaintenance(req, res, next) {
    try {
      const { id } = req.params
      const data = await Maintenance.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await Maintenance.destroy({ where: { id } })
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = MaintenanceController