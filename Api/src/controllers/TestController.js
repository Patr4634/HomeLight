//export function T(req, res) {
//    try {
//        //DO STUFF
//        res.status(201).send();
//    } catch (err) {
//        res.status(500).send({errors: err});
//    }
//}
//
//export function Y(req, res, next) {
//    const body = req.body;
//    let user = require('../data/Users').users.find((u) => {
//        return u.username === body.username;
//    })
//
//    if (!user) {
//        res.status(404).send();
//    } else {
//        req.body = {
//            userId: user.id,
//            username: user.username
//        };
//        return next();
//    }
//    return res.status(400).send({errors: ['Invalid User']});
//}