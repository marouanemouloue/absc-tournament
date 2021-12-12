const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PlayersModel = require("./models/Players");
const Playersdata = require("./models/Playersdata");
app.use(express.json());
app.use(cors());
mongoose.connect(
    " mongodb+srv://newuser:admin@cluster0.nbfyj.mongodb.net/Players?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);
//Add to database:
// app.post("/insert", async (req, res) => {
//     const name = req.body.name;
//     const country = req.body.country;
//     const age = req.body.age;
//     const playerr = new Playersdata({ name: name, country: country, age: age });
//     try {       

//         await playerr.save();

//         res.send("insterted data");

//     }
//     catch (error) {
//         console.log(error);
//     }
// });
app.get("/read", async (req, res) => {
    await PlayersModel.find({}, (err, result) => {
        if (err) { res.send(err) }
        res.send(result)
    }).clone().catch(function(err){ console.log(err)})
});

app.listen(3003, () => {
    console.log("server is running on port 3005 ...");
});
