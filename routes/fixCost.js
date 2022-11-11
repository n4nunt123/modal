const express = require('express')
const fixCost = express.Router()
const FixCostController = require('../controller/fixCostController')

fixCost.get('/fixCosts', FixCostController.getFixCosts)
fixCost.get('/fixCosts/:id', FixCostController.getFixCost)
fixCost.post('/fixCosts', FixCostController.insertFixCost)
fixCost.patch('/fixCosts/:id', FixCostController.updateFixCost)
fixCost.delete('/fixCosts/:id', FixCostController.deleteFixCost)

module.exports = fixCost