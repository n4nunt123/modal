const express = require('express')
const rawMaterial = express.Router()
const RawMaterialController = require('../controller/rawMaterialController')

rawMaterial.get('/assets', RawMaterialController.getRawMaterials)
rawMaterial.get('/assets/:id', RawMaterialController.getRawMaterial)
rawMaterial.post('/assets', RawMaterialController.insertRawMaterial)
rawMaterial.patch('/assets/:id', RawMaterialController.updateRawMaterial)
rawMaterial.delete('/assets/:id', RawMaterialController.deleteRawMaterial)

module.exports = rawMaterial