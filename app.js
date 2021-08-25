const express = require("express");
const cors = require('cors')
const request = require("request");
const cheerio = require('cheerio');
const axios = require('axios');
const { response } = require("express");
const app = express();
const port = 5000;

app.use(cors())

app.get("/wtso", function(req, res) {

    axios
    .get("https://www.wtso.com")
    .then((response) => {
        const $ = cheerio.load(response.data);
        let title = $("title").text();
        let src = $('#current-offer-bottle-image').attr().src;
        let quote = $('#wine-quote').text().trim();
        let price = $("#price").text();
        let hash = {image: src, quote: quote, price: price}; 
        console.log(hash);
        res.send(hash);

    })
    .catch((err) => {
        reject(err);
    });


});

app.get("/lastbottle", function(req, res) {

    axios
    .get("https://www.lastbottlewines.com/")
    .then((response) => {
        const $ = cheerio.load(response.data);
        let name = $(".offer-name").text();
        let hash = {name: name};
        console.log(hash);
        res.send(hash);

    })
    .catch((err) => {
        reject(err);
    });

});

app.listen(port, () => console.log(`CORS-enabled web server listening on port ${port}!`));