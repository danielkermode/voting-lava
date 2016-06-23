var express = require('express');
var router = express.Router();
var data = require('../data/data.json');
var questionFunctions = require('../lib/index');
var createNewQuestion = questionFunctions.createNewQuestion;
var getQuestionById = questionFunctions.getQuestionById;
var updateQuestion = questionFunctions.updateQuestion;

/* GET questions listing. */
router.get('/', function(req, res) {
  //res.redirect('/questions/new');
  res.send('cannot list questions at the moment');
});

router.get('/new', function(req, res) {
  res.render('index');
});

router.post('/', function(req, res){
  createNewQuestion(req.body)
    .then(function(question){
      res.redirect('/questions/' + question.id + '/edit');
    })
    .catch(function(error){
      res.render('error',error);
    })
});

// router.get('/:id/edit', function(req, res) {
//   getQuestionById(req.params.id)
//     .then(function(question) {
//       res.render('pollOptions', question);
//     })
//     .catch(function(error) {
//       res.render('error', error);
//     })
// });

// Temporary route to view edit page
router.get('/edit', function(req, res) {
  res.render('pollOptions')
})

router.post('/:id', function(req, res){
  updateQuestion(req.params.id,req.body)
    .then(function(){
      res.redirect('/questions/' + req.params.id);
    })
    .catch(function(error){
      res.render('error', error);
    })
});

router.get('/:id', function(req, res) {
  getQuestionById(req.params.id)
    .then(function(question) {
      res.render('pollView', question);
    })
    .catch(function(error) {
      res.render('error', error);
    })
});

module.exports = router;
