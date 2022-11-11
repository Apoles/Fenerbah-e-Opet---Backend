import express from "express";
import { createTokFromRefTok, getUser, login } from "../controller/login.js";



const loginRoute = express.Router();

loginRoute.get("/", getUser);
loginRoute.post("/ref", createTokFromRefTok);
loginRoute.post("/dene",getUser);
loginRoute.post("/", login);

export default loginRoute;
