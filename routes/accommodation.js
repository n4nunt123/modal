const express = require('express')
const accommodation = express.Router()
const AccommodationController = require('../controller/accommodationController')

accommodation.get('/accomodations', AccommodationController.getAccomodations)
accommodation.get('/accomodations/:id', AccommodationController.getAccomodation)
accommodation.post('/accomodations', AccommodationController.insertAccomodation)
accommodation.patch('/accomodations/:id', AccommodationController.updateAccomodation)
accommodation.delete('/accomodations/:id', AccommodationController.deleteAccomodation)


module.exports = accommodation