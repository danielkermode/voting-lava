
module.exports = function (knex) {
  return {
    getQuestionById: function (id) {
      return knex('questions').where({ id })
    },
    createNewQuestion: function (obj) {
      obj.started = false
      obj.created_at = Date.now()
      obj.updated_at = Date.now()
      return knex('questions').returning('id').insert(obj);
    },
    updateOptions: function (id, newInfo) {
      var optionPromises = newInfo.map(option => {
        return knex('options').insert(option)
      })
      return Promise.all(optionPromises)
    },
    getOptionsByQuestion: function (id) {
      return knex('options').where({ question_id: id })
    },
    buildPageObject: function (id) {
      //fat arrow functions needed for this ref
      return new Promise((resolve, reject) => {
        var pageObject = {}
        this.getQuestionById(id)
          .then((question) => {
            pageObject = question[0]
            return this.getOptionsByQuestion(id)
          })
          .then((options) => {
            pageObject.options = options
            resolve(pageObject)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}
