exports.LightRoute = function (app) {
    const controller = require('../controllers/LightController');

    app.get('/Light/:Id', controller.Get);
    app.get('/Light', controller.GetAll);
    app.post('/Light/Toggle', controller.TogglePin);
}