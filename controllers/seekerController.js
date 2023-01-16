const SeekerProfileModel = require("../models/jobSeekerProfile")


const addSeeker = async (req, res) => {
const seekerData = req.body

try {
   const newSeekerData=  await SeekerProfileModel.create(seekerData)

   res.send({status: 'success', profileDetails: { newSeekerData}})

} catch (error) {
    res.send({status: 'error', msg: "error adding profile" , error })
}
}

const getSeeker = async (req,res) => {
    const existingseekerdata = req.body
    try {
        const jobseerkers = await SeekerProfileModel.find(existingseekerdata)
    res.send({status: 'success', jobseerkers})
    } catch (error) {
        res.send({status: 'error', msg: error})
    }
    
}

const editSeeker = async (req, res) => {
    const seekerData = req.body
    try {
    const updatedSeekerData = await SeekerProfileModel.findOneAndUpdate({ _id: req.params.id }, seekerData, { new: true })
    res.send({ status: 'success', profileDetails: { updatedSeekerData } })
    } catch (error) {
    res.send({ status: 'error', msg: "error editing profile", error })
    }
    }
    
    
    const deleteSeeker = async (req, res) => {
    try {
    await SeekerProfileModel.findOneAndDelete({ _id: req.params.id })
    res.send({ status: 'success', msg: 'user deleted successfully' })
    } catch (error) {
    res.send({ status: 'error', msg: "error deleting user", error })
    }
    }

module.exports = {
    addSeeker,
    getSeeker,
    editSeeker,
    deleteSeeker
}