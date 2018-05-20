module.exports = function(app) {
    
    var bodyParser = require ("body-parser");

    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    require('../config/routes.js')(app)
};