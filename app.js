const express = require('express')
const DBConnect = require('./dbConfig');
const jobsRouter = require('./Routes/jobsRouter')
const jobSeekerRouter = require('./Routes/jobSeekerRouter');
const authRouter = require('./Routes/authRouter');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const employerRouter = require('./Routes/employeRouter');
const path = require('path')

app.use(cors());

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(express.static('public'))

app.use('/jobs', jobsRouter)
app.use('/jobseekers',jobSeekerRouter)
app.use('/', authRouter)
app.use('/employers',employerRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log("server started successfully on port 3000")
    DBConnect()
})