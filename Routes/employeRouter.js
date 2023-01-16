const { Router } = require('express')
const {verifyToken} = require('../middlewares/authMiddleware')
const { addEmployer, getEmployer, editEmployer, deleteEmployer } = require('../controllers/employerController')

const employerRouter = Router()

employerRouter.use(verifyToken)

employerRouter.post('/', addEmployer)
employerRouter.get('/',getEmployer)
employerRouter.put('/',editEmployer)
employerRouter.delete('/',deleteEmployer)

module.exports = employerRouter

