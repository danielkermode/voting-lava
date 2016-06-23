var express = require('express');
var router = express.Router();
var data = require('../data/data.json');
var dbConfig = require('../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../lib/index')(knex)

/* GET questions listing. */
router.get('/', function(req, res) {
  //res.redirect('/questions/new');
  res.send('cannot list questions at the moment');
});

router.get('/new', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res){
  db.createNewQuestion(req.body)
    .then(function(question){
      res.redirect('/questions/' + question.id + '/edit');
    })
    .catch(function(error){
      res.render('error',error);
    })
});

router.get('/:id/edit', function(req, res) {
  db.getQuestionById(req.params.id)
    .then(function(question) {
      res.render('pollOptions', question[0]);
    })
    .catch(function(error) {
      res.render('error', error);
    })
});

router.post('/:id', function(req, res){
  db.updateQuestion(req.params.id,req.body)
    .then(function(){
      res.redirect('/questions/' + req.params.id);
    })
    .catch(function(error){
      res.render('error', error);
    })
});

router.get('/:id', function(req, res) {
  db.getQuestionById(req.params.id)
    .then(function(question) {
      res.render('pollView', question);
    })
    .catch(function(error) {
      res.render('error', error);
    })
});

module.exports = router;
