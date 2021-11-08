var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/node-mongodb-mongoose-user', function (req, res, next) {
    res.render('node');
})

router.post('/node-mongodb-mongoose-user', function (req, res, next) {
    var emailVar = req.body.emailBody;
    var userObject = new User({
        firstName: 'Eduardo',
        lastName: 'Simon',
        password: "Segredo",
        email: emailVar
    });
    userObject.save();

    res.redirect('/node-mongodb-mongoose-user');
});

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/login-inicio', function (req, res, next) {
    res.render('login-inicio');
});

router.get('/logado-inicio', function (req, res, next) {
    res.render('logado-inicio');
});

// " : " indica que esta parte da URL é alguma variável com dado
router.get('/message/:msgParam', function(req, res, next) {
    res.render('node', {message: req.params.msgParam});
});

router.get('/registro-usuario-salvar', function(req, res, next) {
    res.render('registro-usuario-salvar');
});

router.post('/message', function (req, res, next) {
    var messageVar = req.body.messageBody;
    res.redirect('/message/' + messageVar);
});


router.get('/node-mongodb-mongoose-user-busca', function (req, res, next) {
    User.findOne({}, function(err, documents){
        if (err) {
            return res.send('Error!! :-(');
        }
        res.render('node', {firstNameV: documents.firstName,
                            lastNameV: documents.lastName,
                            passwordV: documents.password,
                            emailV: documents.email,
                            messagesV: documents.message
        });
    });
});

module.exports = router;