const { Router } = require('express')
const { addSeeker , getSeeker, editSeeker, deleteSeeker } = require('../controllers/seekerController')
const {verifyToken} = require('../middlewares/authMiddleware')

const jobSeekerRouter = Router()

jobSeekerRouter.post('/', addSeeker)
jobSeekerRouter.use(verifyToken)


jobSeekerRouter.get('/', getSeeker)
jobSeekerRouter.put('/', editSeeker)
jobSeekerRouter.delete('/', deleteSeeker)

module.exports = jobSeekerRouter

