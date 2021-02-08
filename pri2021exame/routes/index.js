var express = require('express');
var router = express.Router();

const Team = require('../controllers/team')

/* GET home page. */
router.get('/', function (req, res) {
    Team.listar()
        .then(dados => res.render('index', { 
            title: 'PRI2021exame',
            dados 
        }) )
        .catch(e => res.render('error', { error: e }))
});

router.get('/api/teams/:id', function (req, res) {
    var idTeam = req.params.id;
    Team.listarTeam(idTeam)
        .then(dados => res.render('teams', { 
            title: 'PRI2021exame',
            dados 
        }) )
        .catch(e => res.render('error', { error: e }))
});

module.exports = router;
