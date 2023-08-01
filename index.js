const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const bcrypt = require('bcrypt');
const postRoute = require("./routes/posts");

dotenv.config();


mongoose
        .connect(process.env.MONGO_URL)  
        .then(() => console.log('connected to Mongodb'))
        .catch((err)=>{
            console.log(err);
        })


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


app.listen(8800,()=>{
    console.log('server is running on port 8800');
})