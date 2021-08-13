const express = require("express");
const cors = require('cors')
const request = require("request");
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors())

app.get("/", (req, res) => res.send("Hello world!"));
app.get("/wtso", function(req, res) {

    axios
    .get("https://www.wtso.com")
    .then((response) => {
        const $ = cheerio.load(response.data);
        let title = $("title").text();
        let src = $('#current-offer-bottle-image').attr().src;
        console.log("Image: " + src);
        res.send(src);

    })
    .catch((err) => {
        reject(err);
    });


});

app.listen(port, () => console.log(`CORS-enabled web server listening on port ${port}!`));