exports.LightRoute = function (app) {
    const controller = require('../controllers/LightController');

    app.get('/Light/:Id', controller.Get);
    app.get('/Light', controller.GetAll);
    app.post('/Light', controller.Create);
    app.put('/Light', controller.Update);
    app.delete('/Light', controller.Delete);
}

//exports.LightRoute = function(app) {
//    const controller = require('../controllers/LightController');
//    app.get('/Light', [
//        controller.GetLights
//    ]);
//}
