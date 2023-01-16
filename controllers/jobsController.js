const jobModel = require("../models/jobsModel")

const addJobs = async (req, res) => {
const jobData = req.body

try {
   const newJobData=  await jobModel.create(jobData)
   res.send({status: 'success', job: newJobData})

} catch (error) {
    res.send({status: 'error', msg: error})
}
}

const getJobs = async (req,res) => {

    try {
        const jobs = await jobModel.find()
    res.send({status: 'success', jobs})
    } catch (error) {
        res.send({status: 'error', msg: error})
    }
    
}

const editJob = async (req, res) => {
    const jobData = req.body
    try {
    const updatedJobData = await jobModel.findOneAndUpdate({ _id: req.params.id }, jobData, { new: true })
    res.send({ status: 'success', job: updatedJobData })
    } catch (error) {
    res.send({ status: 'error', msg: "error editing job", error })
    }
    }
    
    
    const deleteJob = async (req, res) => {
    try {
    await jobModel.findOneAndDelete({ _id: req.params.id })
    res.send({ status: 'success', msg: 'job deleted successfully' })
    } catch (error) {
    res.send({ status: 'error', msg: "error deleting job", error })
    }
    }

module.exports = {
    addJobs,
    getJobs,
    editJob,
    deleteJob
}