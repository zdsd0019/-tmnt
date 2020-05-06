// DOM MANIPULATION

const questionEl = document.querySelector('.question'); 
const questionCol = document.querySelector('.question__column')
//const questionCat = document.querySelector('.')

/*
for (let index = 1; index < 5; index++) {
  const questionHeader = document.querySelector(`question__header category-${index}`)
  for (let j=1; j < 5; j++) {
    const clue = document.querySelector(`question__clue ${j}`)
  }
 
}
*/

// Takes category title and array of question objects (example below)
/*
Category title: Web Dev Brainstation Today
[ { clue: 'Instructor of this Cohort', answer: 'Daniil' },
 { clue: 'Timing of this Cohort', answer: 'Spring 2020' } ]
*/
// and generates HTML
const generateColumn = (title, questionArr) => {

}


// *** API INTEGRATION *** //

// Max number of categories available in API
const maxCategoryId = 18148;

// Returns random category ID
const getRandomCategoryId = () => Math.floor(Math.random() * maxCategoryId);

let questionTarget = {};

const questionReturn = (res, value) => {
  let questionObj = res.data.clues.find(question => question.value == value);
  questionTarget = {
    clue: questionObj.question,
    answer: questionObj.answer
  }
  console.log(questionTarget);
};

// Takes category ID and question value and returns the clue and answer
const findQuestion = (categoryId, questionValue) => {
  axios
    .get(`http://jservice.io/api/category?id=${categoryId}`)
    .then(result => {
      questionReturn(result, questionValue);
    })
};

findQuestion(230, 300)