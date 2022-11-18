const express = require('express');
const mongoose = require("mongoose");
const shortUrl = require("./modules/urlShortner");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.mongodb);
const PORT = process.env.PORT || 5000;

app.set("view engine" , "ejs");
app.use(express.urlencoded({extended : false}));

app.get('/' , async (req, res) => {
    const shortUrls = await shortUrl.find()
    res.render("index", {shortUrls : shortUrls});

})

app.post('/shortUrls', async (req, res) => {
    await shortUrl.create({ 
        full: req.body.fullURL
     })

     res.redirect('/');
})
app.get("/:shortUrl",async (req, res) => {

    const Surl = await shortUrl.findOne({ short : req.params.shortUrl });

    if(Surl == null) return res.sendStatus(404);

    Surl.clicks++;
    Surl.save();

    res.redirect(Surl.full);
});

app.listen(PORT, () => {
    console.log(`Port is lestining on port ${PORT}`)
});