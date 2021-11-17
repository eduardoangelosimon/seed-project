var express = require('express');
const user = require('../models/user');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('index');
});

var userRoutes = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new user({
        firstNameSch: req.body.firstName,
        lastNameSch: req.body.lastName,
        passwordSch: req.body.password,
        emailSch: req.body.email,
        messagesSch: req.body.messages
    });

    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de salvar o usuário',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSuccess: "Usuário salvo com sucesso",
            objUserSave : result,
            auxUserId
        });
        console.log(result);
    });
});

// router.get('/node-mongodb-mongoose-user', function (req, res, next) {
//     res.render('node');
// })

// router.post('/node-mongodb-mongoose-user', function (req, res, next) {
//     var emailVar = req.body.emailBody;
//     var userObject = new User({
//         firstName: 'Eduardo',
//         lastName: 'Simon',
//         password: "Segredo",
//         email: emailVar
//     });
//     userObject.save();

//     res.redirect('/node-mongodb-mongoose-user');
// });


// router.get('/login-inicio', function (req, res, next) {
//     res.render('login-inicio');
// });

// router.get('/logado-inicio', function (req, res, next) {
//     res.render('logado-inicio');
// });

// // " : " indica que esta parte da URL é alguma variável com dado
// router.get('/message/:msgParam', function(req, res, next) {
//     res.render('node', {message: req.params.msgParam});
// });

// router.get('/registro-usuario-salvar', function(req, res, next) {
//     res.render('registro-usuario-salvar');

//     var emailVar = req.body.emailBody;
//     var userObject = new User({
//         firstName: 'Eduardo',
//         lastName: 'Simon',
//         password: "Segredo",
//         email: emailVar
//     });
//     userObject.save();

//     res.redirect('/node-mongodb-mongoose-user');
// });



// router.post('/message', function (req, res, next) {
//     var messageVar = req.body.messageBody;
//     res.redirect('/message/' + messageVar);
// });


// router.get('/node-mongodb-mongoose-user-busca', function (req, res, next) {
//     User.findOne({}, function(err, documents){
//         if (err) {
//             return res.send('Error!! :-(');
//         }
//         res.render('node', {firstNameV: documents.firstName,
//                             lastNameV: documents.lastName,
//                             passwordV: documents.password,
//                             emailV: documents.email,
//                             messagesV: documents.message
//         });
//     });
// });

module.exports = router;