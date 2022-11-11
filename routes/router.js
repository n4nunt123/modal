const express = require('express')
const route = express.Router()
const accommodation = require('./accommodation')
const asset = require('./asset')
const capitalIndustry = require('./capitalIndustry')
const energy = require('./energy')
const fixCost = require('./fixCost')
const maintenance = require('./maintenance')
const rawMaterial = require('./rawMaterial')

route.use(accommodation)
route.use(asset)
route.use(capitalIndustry)
route.use(energy)
route.use(fixCost)
route.use(maintenance)
route.use(rawMaterial)

module.exports = route