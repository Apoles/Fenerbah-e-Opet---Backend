import mongoose from "mongoose";



const playerSchema = new mongoose.Schema({
    playerName: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
        unique: true,
      },
      year: {
        type: String,
        required: true,
        
      },
      playerPosition: {
        type: String,
        required: true,
        
      },
      flagUrl: {
        type: String,
        required: true,
        
      },
      weight:{
        type: String,
        required: true,
        
      },
      
      birdthPlace:{
        type: String,
        required: true,
        
      },
      nation:{
        type: String,
        required: true,
      }
   
  });

const Player = mongoose.model("player", playerSchema);
export default Player;