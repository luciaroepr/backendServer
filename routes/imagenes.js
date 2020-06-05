var express = require('express');
var fs = require('fs');

var app = express();


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var path = `./uploads/${ tipo }/${ img }`;

    fs.exists(path, existe => {

        console.log('existe imagen ', existe);
        if (!existe) {
            path = './assets/no-img.jpg';
        }

        console.log(path);
        console.log(__dirname);
        res.sendFile(path, { root: __dirname + '/../' });

    });


});

module.exports = app;