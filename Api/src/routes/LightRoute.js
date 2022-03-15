exports.Get = function(app) {
    const controller = require('../controllers/LightController');
    app.get('/Lights', [
        controller.GetLights
    ]);
}