const mongoose = require("mongoose");

const PlayersShema = new mongoose.Schema (
    {
     


    },
    {collection:"players"}
);

const Players = mongoose.model("players",PlayersShema);
module.exports= Players;