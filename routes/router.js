const express = require('express')
const route = express.Router()
const accommodation = require('./accommodation')
const asset = require('./asset')
const energy = require('./energy')
const fixCost = require('./fixCost')
const maintenance = require('./maintenance')
const rawMaterial = require('./rawMaterial')

route.use('/accommodation', accommodation)
route.use('/asset', asset)
route.use('/energy', energy)
route.use('/fixCost', fixCost)
route.use('/maintenance', maintenance)
route.use('/rawMaterial', rawMaterial)

module.exports = route