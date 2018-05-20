var mongoose = require ('mongoose');

User = require('../models/user.js');

module.exports.getUsers = function(callback, limit) {
    User.find(callback).limit(limit);
};

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.addUser = function (user , callback){
    User.create(user, callback);
};

module.exports.updateUser = function(id, user, option, callback){
    var query = { _id : id };
    var update = {
        name : user.name,
        password : user.password
    }
    User.findOneAndUpdate(query, update, option, callback);
}

module.exports.deleteUserById = function(id, callback) {
    var query = { _id : id };
    User.remove(query, callback);
};