const mongoose = require('mongoose')

const db = 'mongodb'
const url = 'localhost'
const database = 'todo'

module.exports = mongoose.connect(`${db}://${url}/${database}`)