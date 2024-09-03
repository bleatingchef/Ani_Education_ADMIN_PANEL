import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import cors from "cors";
// import passport from "passport"
import userRoute from "./routes/userRoute.js";
import appointmentRoute from"./routes/appointmentRoute.js"
import studentRoute from"./routes/studentRoute.js"
import loanRoute from "./routes/loanRoute.js"
import detailsRoute from "./routes/detailsRoute.js"
import eligibilityRoute from "./routes/eligibilityRoute.js"
import deleteloan from "./routes/loanRoute.js";


dotenv.config()

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:[process.env.SESSION_SECRET]
}))

app.use(express.urlencoded({extended:false}));
// app.use(passport.initialize());
app.use(bodyParser.json());

app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true,
}))

app.use("/api/user", userRoute);
app.use('/api/appoint',appointmentRoute)
app.use('/api/delete',appointmentRoute)
app.use('/api/form',studentRoute)
app.use('/api/loan',loanRoute)
app.use('/api/moreDetails',detailsRoute)
app.use('/api/eligible',eligibilityRoute)
app.use('/api/deleteloan',deleteloan)


const PORT = process.env.PORT||5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`the server is running in PORT ${PORT}`);
    })
}).catch((err)=>console.log(err));