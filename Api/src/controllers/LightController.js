exports.Get = function(req, res) {
    try {
        let light = require('../data/Light').lights.find((l) => {
            return l.id == req.params.Id;
        })
        res.status(200).send(light);
    } catch (err) {
        res.status(500).send({errors: err});
    }
}

exports.GetAll = function(req, res) {
    try {
        let lights = require('../data/Light').lights;
        res.status(200).send(lights);
    } catch (err) {
        res.status(500).send({errors: err});
    }
}

exports.Create = function(req, res) {
    try {
        res.status(201).send();
    } catch (err) {
        res.status(500).send({errors: err});
    }
}

exports.Update = function(req, res) {
    try {
        res.status(200).send();
    } catch (err) {
        res.status(500).send({errors: err});
    }
}

exports.Delete = function(req, res) {
    try {
        res.status(200).send();
    } catch (err) {
        res.status(500).send({errors: err});
    }
}