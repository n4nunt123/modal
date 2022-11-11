const express = require('express')
const energy = express.Router()
const EnergyController = require('../controller/energyController')

energy.get('/energies', EnergyController.getEnergies)
energy.get('/energies/:id', EnergyController.getEnergy)
energy.post('/energies', EnergyController.insertEnergy)
energy.patch('/energies/:id', EnergyController.updateEnergy)
energy.delete('/energies/:id', EnergyController.deleteEnergy)

module.exports = energy