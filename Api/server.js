const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./src/routes/LightRoute').LightRoute(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));