var allData = {
  questions: []
}

var maxId = 0;

module.exports = function (knex) {
  return {
    getQuestionById: function (id) {
      return knex('questions').where({ id })
    },

    createNewQuestion: function (obj) {
      return knex('questions').returning('id').insert(obj);
    },

    updateOptions: function (id, newInfo) {
      var optionPromises = newInfo.map(option => {
        return knex('options').insert(option)
      })
      return Promise.all(optionPromises)
      // return new Promise(function(resolve, reject) {
      //   var currentInd = allData.questions.findIndex(question => question.id === id);
      //   var current = allData.questions[currentInd];
      //   Object.keys(newInfo).forEach(function(key){
      //     if(current[key]) {
      //       current[key] = newInfo[key]
      //     }
      //   })
      //   resolve(current);
      // });
    },
    getOptionsByQuestion: function (id) {
      return knex('options').where({ question_id: id })
    }
  }
}
