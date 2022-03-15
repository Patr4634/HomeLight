const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./src/routes/LightRoute').Get(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));






//app.use('/users/authenticate', (message) => {
//    message.send(
//        new Promise((resolve, reject) => {
//            console.log(message.method);
//            setTimeout(() => {
//                if (message.method === 'POST') {
//                    const params = JSON.parse(message.body);
//                    const user = users.find(x => x.username.toUpperCase() === params.username.toUpperCase() && x.password === params.password);
//                    if (!user) return error('Username or password is incorrect');
//                    return ok({
//                        id: user.id,
//                        username: user.username,
//                        firstName: user.firstName,
//                        lastName: user.lastName,
//                        role: user.role,
//                        token: `fake-jwt-token.${user.role}`
//                    })
//                }
//
//                function ok(body) {
//                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
//                }
//
//                function unauthorised() {
//                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
//                }
//
//                function error(message) {
//                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
//                }
//            }, 500);
//        })
//    )
//});