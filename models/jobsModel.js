const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const jobSchema = new Schema({

    position: {
        type: String,
        required: true,
    },

    company: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    skills: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true,
    }
})

const jobModel = mongoose.model('jobs',jobSchema)
module.exports = jobModel
