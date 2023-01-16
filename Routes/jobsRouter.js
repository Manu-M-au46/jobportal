const { Router } = require('express')
const { getJobs, addJobs,  editJob, deleteJob } = require('../controllers/jobsController')

const {verifyToken} = require('../middlewares/authMiddleware')


const jobsRouter = Router()
jobsRouter.use(verifyToken)

jobsRouter.post('/', addJobs)
jobsRouter.get('/',getJobs)
jobsRouter.put('/',editJob)
jobsRouter.delete('/',deleteJob)

module.exports = jobsRouter

