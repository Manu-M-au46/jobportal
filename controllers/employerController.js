const EmployerProfileModel = require("../models/employerProfile")


const addEmployer = async (req, res) => {
const employerData = req.body
console.log(employerData)
    try {
        const newEmployerData=  await EmployerProfileModel.create(employerData)
     
        res.send({status: 'success', EmployerprofileDetails: { newEmployerData}})
     
     } catch (error) {
         res.send({status: 'error', msg: "error adding employer profile" , error })
     }
     }


const getEmployer = async (req,res) => {
    const existingemployerdata = req.body
    try {
        const employers = await EmployerProfileModel.find(existingemployerdata)
    res.send({status: 'success', employers})
    } catch (error) {
        res.send({status: 'error', msg: error})
    }
    
}

const editEmployer = async (req, res) => {
    const employerData = req.body
    try {
    const updatedEmployerData = await EmployerProfileModel.findOneAndUpdate({ _id: req.params.id }, employerData, { new: true })
    res.send({ status: 'success', EmployerprofileDetails: { updatedEmployerData } })
    } catch (error) {
    res.send({ status: 'error', msg: "error editing employer profile", error })
    }
    }
    

    
    const deleteEmployer = async (req, res) => {
    try {
    await EmployerProfileModel.findOneAndDelete({ _id: req.params.id })
    res.send({ status: 'success', msg: 'employer deleted successfully' })
    } catch (error) {
    res.send({ status: 'error', msg: "error deleting employer", error })
    }
}

module.exports = {
    addEmployer,
    getEmployer,
    editEmployer,
    deleteEmployer
}