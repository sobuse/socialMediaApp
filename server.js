const app=require('express')();
const server=require('http').server(app);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp=next({dev})
const handle = app.getRequestHandler();
require('dotenv').config({path:"./config.env"})
const connectDb=require('./utilsServer/connectDb')
const PORT=process.env.PORT || 3000
connectDb()

nextApp.prepare().then(()=>{
    // app.all('/api/auth',require('./api/auth'))

    app.all('*',(req,res)=>handle(req, res));

    server.listen(PORT,err=>{
        if(err)throw err;
        console.log('express server running on ${PORT}')
    })
})