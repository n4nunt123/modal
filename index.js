if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const route = require('./routes/router')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(route)


app.listen(port, () => {
  console.log('MODAL APP LISTENING TO PORT', port)
})