exports.GetLights = function(req, res) {
    try {
        let lights = require('../data/Lights').lights;
        res.status(200).send(lights);
    } catch (err) {
        res.status(500).send({errors: err});
    }
}