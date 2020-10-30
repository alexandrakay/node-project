require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')


const server = express()

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
    res.send('ENDpoint running')
})
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`\n** server is running on port ${PORT}`.america)
})