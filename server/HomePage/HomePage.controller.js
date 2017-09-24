var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 
var restful = require('node-restful');	

var Provider = app.Provider = restful.model('BusinessUsers', new mongoose.Schema({
    CompanyName :   String,
    OwnerName : String,
    ContactPersonName : String,
    AreaOfBusiness: String,
    Speciality: String,
    Experience :   String,
    MainCategory :   String,
    Categories :   String,
    SubCategories :   [],
    registerDate: String,
    State :   String,
    City :   String,
    Area :   String,
    SubArea :   [],
    PrimaryServices :   [],
    ValueAddedServices :   [],
    FreeServices :   [],
    WorkingTime:   String,
    HolidayDays:   String,
    ContactNumber1 :   String,
    ContactNumber2 :   String,
    ContactNumber3 :   String,
    RegistrationNo : String,
    Order :String,
    Tags: String,
    Address1: String,
    Address2 : String,
    UserId : String,
    Ratings : {
        star1: Number,
        star2: Number,
        star3: Number,
        star4: Number,
        star5: Number,
    },
    ProfilePic : String,
    Socical : {
        facebook : String,
        twitter : String,
        google : String,
        Youtube : String,
        instagram : String
    }
}));

Provider.methods(['get', 'post', 'put', 'delete'], function(req, res, next) {
    console.log('logging from nore-restful');
    next(); // Don't forget to call next!
});

Provider.register(app, '/clients');

module.exports = app;