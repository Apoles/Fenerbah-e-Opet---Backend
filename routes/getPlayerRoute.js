import express from "express";
import { getOnePlayer, getPlayer } from "../controller/getPlayer.js";



const getPlayerRoute = express.Router();

getPlayerRoute.get("/", getPlayer);
getPlayerRoute.get('/:_id',getOnePlayer)

export default getPlayerRoute;