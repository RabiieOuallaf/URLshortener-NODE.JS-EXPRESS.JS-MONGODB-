const express = require('express');
const mongoose = require("mongoose");
const shortUrl = require("./modules/urlShortner");
const app = express();

mongoose.connect("mongodb://localhost/urlShortner")
const PORT = process.env.PORT || 5000;

app.set("view engine" , "ejs");

app.get('/' , (req, res) => {

    res.render("index");

})

app.get('/shortUrls', )


app.listen(PORT, () => {
    console.log(`Port is lestining on port ${PORT}`)
});