
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import loginRoute from "./routes/loginRoute.js";
import getPlayerRoute from "./routes/getPlayerRoute.js";


const PORT = 8000;
const CONNTECTION_URL = "mongodb+srv://Chandlers:Apoles123.@nodeblock.jlxam.mongodb.net/fenerbahce?retryWrites=true";

const app = express();

dotenv.config();




app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({
    message: "nice and quick server",
    admin: "create by APoles",
  });
});

app.use("/login", loginRoute);
app.use("/player",getPlayerRoute)

mongoose
  .connect(CONNTECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server çalısıyor", PORT);
    });
  })
  .catch((error) => {console.log(error)});

