exports.GetGroup = function(req, res) {
    try {
        let group = require('../data/Group').groups.find((g) => {
            return g.id === req.body.id;
        })
        res.status(200).send(group);
    } catch (err) {
        res.status(500).send({errors: err});
    }
}