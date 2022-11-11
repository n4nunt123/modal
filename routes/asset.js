const express = require('express')
const asset = express.Router()
const AssetController = require('../controller/assetController')

asset.get('/assets', AssetController.getAssets)
asset.get('/assets/:id', AssetController.getAsset)
asset.post('/assets', AssetController.insertAsset)
asset.patch('/assets/:id', AssetController.updateAsset)
asset.delete('/assets/:id', AssetController.deleteAsset)


module.exports = asset