const { CapitalIndustry } = require('../models')

class CapitalIndustryController {
  static async getCapitalIndustries(req, res, next) {
    try {
      const data = await CapitalIndustry.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getCapitalIndustry(req, res, next) {
    try {
      const { id } = req.params
      const data = await CapitalIndustry.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
  
  static async insertCapitalIndustry(req, res, next) {
    try {
      const { name, companyLogo, location, email, description, companyLink } = req.body
      await CapitalIndustry.create({ 
        name,
        companyLogo,
        location,
        email,
        description,
        companyLink
      }, { where: { id }})
      res.status(201).json({ message: `data successfully added with name: ${name}` })
    } catch (err) {
      next(err)
    }
  }

  static async updateCapitalIndustry(req, res, next) {
    try {
      const { name, companyLogo, location, email, description, companyLink } = req.body
      const { id } = req.params
      const data = await CapitalIndustry.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await CapitalIndustry.update({ 
        name,
        companyLogo,
        location,
        email,
        description,
        companyLink
      }, { where: { id }})
      res.status(201).json({ message: `data successfully updated with id: ${id}` })
    } catch (err) {
      next(err)
    }
  }
  
  static async deleteCapitalIndustry(req, res, next) {
    try {
      const { id } = req.params
      const data = await CapitalIndustry.findOne({ where: { id } })
      if(!data) throw { name: 'Error-404' }
      await CapitalIndustry.destroy({ where: { id }})
      res.status(200).json({ message: `data successfully deleted with id: ${id}`})
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CapitalIndustryController