const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config();
const cookieParser = require('cookie-parser');
const PortfolioRouter=require('./routes/Portfolio');
const ProjectsRouter=require('./routes/Projects');
const MiniProjectRouter=require('./routes/MiniProjects');
const UserRoute=require('./routes/Users');
app.use(cookieParser());
app.use(cors({
    origin: ['https://iamtanishqsethiv2.vercel.app','http://localhost:3000'],
    credentials: true,
}))
app.use(express.json())
app.use('/user',UserRoute)
app.use('/api/portfolio',PortfolioRouter)
app.use('/api/projects',ProjectsRouter)
app.use('/api/miniProjects',MiniProjectRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.listen(3300,()=>console.log('Server is running on localhost:3300'))

