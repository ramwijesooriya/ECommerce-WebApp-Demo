const cookieParser = require('cookie-parser');
const express = require('express')
const mongoose = require('mongoose')

// create database connection -> you can also
// create a separate file for this and then use/import that file 
mongoose.connect('mongodb+srv://ramwijesooriya:<ramwijesooriya1227>@cluster0.gq12a.mongodb.net/').then(()=>console.log('MongoDB connected')).catch((error)=>console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DETELE', 'PUT'],
        allowedHeaders:[
            "Content-type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        Credentials: true
    })
);
app.use(cookieParser());
app.use(express.json);

app.listen(PORT,()=>console.log('server is now runing on port ${PORT}'))