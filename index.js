const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const toolRoute = require("./routes/tools");
const submissionRoute = require("./routes/submission");
const categoryRoute = require("./routes/category");
const check = require("./routes/check");
const app = express();

dotenv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongo connected"))
.catch((err)=>{ console.log("ERROR", err);});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",check)
app.use("/api/tool", toolRoute);
app.use("/api/submission", submissionRoute);
app.use("/api/category", categoryRoute);

app.listen( process.env.PORT||8800, ()=>{
    console.log("Backend server is running");
})