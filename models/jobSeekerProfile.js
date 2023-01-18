const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const SeekerProfileSchema = new Schema({

    education: {
        type: String,
        required: true
    },

    skills: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    }

})

const SeekerProfileModel = mongoose.model('seekerprofiles',SeekerProfileSchema)
module.exports = SeekerProfileModel
