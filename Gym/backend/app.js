//4MPlMDcF4pLwv5Xv
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");

const app = express();

//Middelware
app.use(express.json());
app.use("/users", router);


mongoose.connect("Your mongo url")
    .then(() => console.log("connected to MongoDB"))
    .then(() => {
        app.listen(3000);
    })

    .catch((err) => console.log((err)));

