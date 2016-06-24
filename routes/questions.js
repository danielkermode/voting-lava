var express = require('express')
var router = express.Router()
var dbConfig = require('../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../lib/index')(knex)

/* GET questions listing. */
router.get('/', function(req, res) {
  //res.redirect('/questions/new')
  res.send('cannot list questions at the moment')
})

router.get('/new', function(req, res) {
  res.render('index')
})

router.post('/', function(req, res){
  db.createNewQuestion(req.body)
    .then(function(id){
      res.redirect('/questions/' + id[0] + '/edit')
    })
    .catch(function(error){
      console.log(error)
      res.render('error',error)
    })
})

router.get('/:id/edit', function(req, res) {
  db.buildPageObject(req.params.id)
    .then(function(pageObject) {
      res.render('pollOptions', pageObject)
    })
    .catch(function(error) {
      console.log(error)
      res.render('error', error)
    })
})

router.post('/:id', function(req, res){
  var options = req.body.name.map(function(opt) {
    return {
      name: opt,
      votes: 0,
      question_id: req.params.id
    }
  })
  db.updateOptions(req.params.id, options)
    .then(function(){
      res.redirect('/questions/' + req.params.id)
    })
    .catch(function(error){
      console.log(error)
      res.render('error', error)
    })
})

router.get('/:id', function(req, res) {
  db.buildPageObject(req.params.id)
    .then(function(pageObject) {
      res.render('pollView', pageObject)
    })
    .catch(function(error) {
      console.log(error)
      res.render('error', error)
    })
})

module.exports = router
