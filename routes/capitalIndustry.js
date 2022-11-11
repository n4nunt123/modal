const express = require('express')
const capitalIndustry = express.Router()
const CapitalIndustry = require('../controller/capitalIndustryController')

capitalIndustry.get('/capitalIndustrys', CapitalIndustry.getCapitalIndustries)
capitalIndustry.get('/capitalIndustrys/:id', CapitalIndustry.getCapitalIndustry)
capitalIndustry.post('/capitalIndustrys', CapitalIndustry.insertCapitalIndustry)
capitalIndustry.patch('/capitalIndustrys/:id', CapitalIndustry.updateCapitalIndustry)
capitalIndustry.delete('/capitalIndustrys/:id', CapitalIndustry.deleteCapitalIndustry)

module.exports = capitalIndustry