import Player from "../models/playerModel.js";

//Sevdiğini korumak için savaşman yetmezse eğer en karanlık çare onun sevgisini öldürmektir. Sevdiğini kurtarmak için en kötü ihtimal en son yol ona ihanet etmektir.


export const getPlayer = async (req, res) => {
    const posts = await Player.find();
      
    res.send(posts);
    //res.status(200).json(posts);
  };

  export const getOnePlayer = async (req, res,) => {
    const id=req.params
    console.log(id)
    
    try {
     const data = await Player.findById(id)

     console.log(data)
     res.status(200).send(data)

    } catch (error) {
        console.log('==============>',error)
        res.status(400).send(error)

          }




   
      
    //res.status(200).json(posts);
  };


  