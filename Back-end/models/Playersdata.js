const mongoose = require("mongoose");
const PlayersShema = new mongoose.Schema (
    {
        name : {
            type :String,
            required : true,
        },
        country : {
            type : String,
            required :true,
        },
        age : {
            type :String,
            required :true,
        },
    },
    {collection:'Playersdata'}
);

const Playersdata = mongoose.model("Playersdata",PlayersShema);
module.exports= Playersdata;