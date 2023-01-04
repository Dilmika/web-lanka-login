require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoutes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

app.use('/api/user',userRoutes)

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected to db on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('server error', err);
})
