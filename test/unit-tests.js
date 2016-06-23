var redtape = require('redtape');
var dbConfig = require('../db-config')
var knex = dbConfig.knex
var config = dbConfig.config

var db = require('../lib/index')(knex)

var dummyQ = {
  name: 'What color is the sky?',
  started: false,
  created_at: Date.now(),
  updated_at: Date.now()
};

var option = {
  name: 'Green'
};

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest(config)
      .then(function () {
        return knex('questions').insert(dummyQ)
      })
      .then(function () {
        callback()
      })
  },

  afterEach: function (callback) {
    knex.migrate.rollback(config)
      .then(function () {
        callback()
      })
  }
})

test('setup', function (t) {
  knex.migrate.rollback(config)
    .then(function () {
      t.ok(true, 'database setup')
      t.end()
    })
})


test('it gets a particular question', function (t) {
  db.getQuestionById(1)
    .then(question => {
      t.equal(question[0].name, dummyQ.name, 'it got the question')
      t.end()
    })
    .catch(error => {
      t.ok(0, error)
      t.end()
    })
})

var dummyQ2 = {
  name: 'What color is your mum?',
  started: false,
  created_at: Date.now(),
  updated_at: Date.now()
};

test('it adds a question to the database', function (t) {
  db.createNewQuestion(dummyQ2)
    .then(function(newId){
      t.equal(newId[0],2, 'newId = 2')
      return db.getQuestionById(newId[0])
    })
    .then(function(question){
      t.equal(question[0].name,dummyQ2.name, 'New question is accessable')
      t.end()
    })
    .catch(error => {
      t.ok(0, error)
      t.end()
    })
})

var dummyOptions = [
  { name: 'blue', question_id: 1 },
  { name: 'green', question_id: 1 },
  { name: 'red', question_id: 1 }
]

test('it updates options for a question', function (t) {
  db.updateOptions(1, dummyOptions)
    .then(_ => {
      t.ok(true, 'updated options table')
      return db.getOptionsByQuestion(1)
    })
    .then(options => {
      dummyOptions.forEach((option, index) => {
        t.equal(option.name, options[index].name, 'options exist with right name')
      })
      t.end()
    })
    .catch(error => {
      t.ok(0, error)
      t.end()
    })
})
