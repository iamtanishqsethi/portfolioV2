const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(()=>console.log('MongoDB Connected'))
    .catch(err => console.log(err))


app.listen(3300,()=>console.log('Server is running on localhost:3300'))

