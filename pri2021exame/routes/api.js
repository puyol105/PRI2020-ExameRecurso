var express = require('express');
var router = express.Router();
//var jwt = require('jsonwebtoken')

const Team = require('../controllers/team')

// GET /api/teams
router.get('/teams', function(req, res) {
  Team.listar()
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
});


// GET /api/teams/:id
router.get('/teams/:id', function(req, res) {
  var idTeam = req.params.id;
  Team.listarTeam(idTeam)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
});

// GET /api/teams/:id/members/:idMember
router.get('/teams/:id/members/:idMember', function(req, res) {
  var idTeam = req.params.id;
  var idMember = req.params.idMember;
  Team.listarMembro(idTeam,idMember)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
});

// POST /api/teams
router.post('/teams', function(req, res) {
  var team = req.body;
  Team.inserir(team)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
  
});

// POST /api/teams/:id/members
router.post('/teams/:id/members', function(req, res) {
  var idTeam = req.params.id;
  var member = req.body;
  Team.inserirId(idTeam,member)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
  
});

// DELETE /api/teams/:id
router.delete('/teams/:id', function(req, res) {
  var idTeam = req.params.id;
  Team.eliminar(idTeam)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
  
});

// DELETE /api/teams/:id/members/:idMember
router.delete('/teams/:id/members/:idMember', function(req, res) {
  var idTeam = req.params.id;
  var idMember = req.params.idMember;
  Team.eliminarMember(idTeam,idMember)
    .then(dados => res.status(200).jsonp(dados) )
    .catch(e => res.status(500).jsonp({error: e}))
  
});

module.exports = router;
