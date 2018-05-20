module.exports = function(app) {
    
    var mongoose = require ("mongoose");

    mongoose.connect('mongodb://moin:moin@ds229290.mlab.com:29290/learn_mongo');
    var db = mongoose.connection;
};