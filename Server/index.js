const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser = require('cookie-parser');
const PortfolioRouter=require('./routes/portfolio');
const ProjectsRouter=require('./routes/projects');
const MiniProjectRouter=require('./routes/miniProjects');
const UserRoute=require('./routes/Users');

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser());
app.use('/user',UserRoute)
app.use('/api/portfolio',PortfolioRouter)
app.use('/api/projects',ProjectsRouter)
app.use('/api/miniProjects',MiniProjectRouter)

mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.listen(3300,()=>console.log('Server is running on localhost:3300'))

