var allData = {
  questions: []
}

var maxId = 0;

function createNewQuestion(obj) {
  return new Promise(function(resolve, reject) {
    maxId++;
    obj.id = maxId;
    obj.started = false;
    obj.options = [];
    obj.voters = [];
    allData.questions.push(obj);
    resolve(obj);
  });
}
function getQuestionById(id) {
  return new Promise(function(resolve, reject) {
    var current = allData.questions.find(question => question.id === id);
    resolve(current);
  });
}

function updateQuestion(id, newInfo) {
  return new Promise(function(resolve, reject) {
    var currentInd = allData.questions.findIndex(question => question.id === id);
    var current = allData.questions[currentInd];
    Object.keys(newInfo).forEach(function(key){
      if(current[key]) {
        current[key] = newInfo[key]
      }
    })
    resolve(current);
  });
}

module.exports = {
  createNewQuestion,
  getQuestionById,
  updateQuestion
}
