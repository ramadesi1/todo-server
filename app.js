require('dotenv').config()
const express = require('express')
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const PORT =  process.env.PORT
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))