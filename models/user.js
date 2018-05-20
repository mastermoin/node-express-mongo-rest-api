var mongoose = require ('mongoose');

var userSchema = mongoose.Schema({
    name :{
        type : String,
    },
    email :{
        type : String,
    },
    password :{
        type : String,
    },
    created_date: { 
        type : Date,
        default : Date.now
    }
});

var User = module.exports = mongoose.model('user', userSchema);