const express = require('express')
const capitalIndustry = express.Router()
const CapitalIndustry = require('../controller/capitalIndustryController')

capitalIndustry.get('/capitalIndustries', CapitalIndustry.getCapitalIndustries)
capitalIndustry.get('/capitalIndustries/:id', CapitalIndustry.getCapitalIndustry)
capitalIndustry.post('/capitalIndustries', CapitalIndustry.insertCapitalIndustry)
capitalIndustry.patch('/capitalIndustries/:id', CapitalIndustry.updateCapitalIndustry)
capitalIndustry.delete('/capitalIndustries/:id', CapitalIndustry.deleteCapitalIndustry)

module.exports = capitalIndustry