module.exports = function(app) {

    User = require('../models/user.js');
    UserCtrl = require('../controllers/user.controller.js');

    app.get('/api/users', function(req, res){
        UserCtrl.getUsers(function(err,users){
            if(err) {
                throw err;
            }
            res.json(users); 
        })
    });

    app.get('/api/users/:_id', function(req, res){
        var id = req.params._id;
        UserCtrl.getUserById(id, function(err,user){
            if(err || user == null) {
                res.status(404);
                var message = 'user not found by [id : '+id+']';
                res.json({'message' : message});
                throw err;
            }
            res.json(user); 
        })
    });
    
    app.post('/api/users', function(req, res){
        var user = req.body;
        UserCtrl.addUser( user, function(err,addedUser){
            if(err) {
                res.status(500);
                var message = 'internal server error';
                res.json({'message' : message});
                throw err;
            }
            res.status(201);
            res.json(addedUser); 
        })
    });
    
    app.put('/api/users/:_id', function(req, res){
        var user = req.body;
        var id = req.params._id;
        var option = {new: true};
        UserCtrl.updateUser(id, user, option, function(err,updatedUser){
            if(err || updatedUser == null) {
                res.status(404);
                var message = 'user not found by [id : '+id+']';
                res.json({'message' : message});
                throw err;
            }
            res.status(201);
            res.json(updatedUser); 
        })
    });
    
    app.delete('/api/users/:_id', function(req, res){
        var id = req.params._id;
        UserCtrl.deleteUserById(id, function(err,user){
            if(err || user == null) {
                res.status(404);
                var message = 'user not found by [id : '+id+']';
                res.json({'message' : message});
                throw err;
            }
            res.status(204);
            res.json({}); 
        })
    });

};