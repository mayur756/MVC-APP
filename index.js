const express=require('express');
const dbconnect = require('./config/db');
const userRouter = require('./routes/user.route');
const cors=require('cors');
const taskRoute = require('./routes/task.route');
const app=express();

app.use(express.json());
app.use(cors());
app.use("/user",userRouter);
app.use("/tasks", taskRoute)

app.get("/user", (req, res) => {
    res.send("Hello mongodb");
})

app.listen(8090,()=>{
    console.log("listening port 8090");
    dbconnect();
})