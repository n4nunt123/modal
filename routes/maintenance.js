const express = require('express')
const maintenance = express.Router()
const MaintenanceController = require('../controller/maintenanceController')

maintenance.get('/maintenances', MaintenanceController.getMaintenances)
maintenance.get('/maintenances/:id', MaintenanceController.getMaintenance)
maintenance.post('/maintenances', MaintenanceController.insertMaintenance)
maintenance.patch('/maintenances/:id', MaintenanceController.updateMaintenance)
maintenance.delete('/maintenances/:id', MaintenanceController.deleteMaintenance)

module.exports = maintenance