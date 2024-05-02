let quizData = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'High Text Markup Language', correct: false },
            { text: 'Hyper Tabular Markup Language', correct: false },
            { text: 'None of these', correct: false },
        ],
    },
    {
        question: 'Which language runs in a web browser?',
        answers: [
            { text: 'Java', correct: false },
            { text: 'C', correct: false },
            { text: 'Python', correct: false },
            { text: 'JavaScript', correct: true },
        ],
    },
    {
        question: 'What does CSS stand for?',
        answers: [
            { text: 'Central Style Sheets', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Cascading Simple Sheets', correct: false },
            { text: 'Cars SUVs Sailboats', correct: false },
        ],
    },
    {
        question: 'What year was JavaScript launched?',
        answers: [
            { text: '1996', correct: false },
            { text: '1995', correct: true },
            { text: '1994', correct: false },
            { text: 'none of the above', correct: false },
        ],
    },
    {
        question: 'Which tool can you use to ensure code quality?',
        answers: [
            { text: 'Angular', correct: false },
            { text: 'jQuery', correct: false },
            { text: 'RequireJS', correct: false },
            { text: 'ESLint', correct: true },
        ],
    },
];

//set variables
let container = document.querySelector('[data-component="container"]');
let questionElement = document.querySelector('[data-component="question"]');
let answersElement = document.querySelector('[data-component="answers"]');
let currentQuestion = 0;
let score = 0;

let checkResult = function (button, answer) {
    //select all buttons
    let allBtns = answersElement.querySelectorAll('.btn');
    //disable all buttons
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].disabled = true;
    }
    //check is answer is true
    if (answer.correct) {
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-success');
        button.innerHTML += '<i class="bi bi-check-circle-fill ms-2"></i>';
        score++;
    } else {
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-danger');
        button.innerHTML += '<i class="bi bi-exclamation-circle-fill ms-2"></i>';
    }
}

//Shows current question
let showQuestion = function () {
    //Select current question and answers
    let questionData = quizData[currentQuestion];
    let question = questionData.question;
    let answers = questionData.answers;
    //Create the question in html
    questionElement.innerHTML = `<span class="fw-bold">Question ${currentQuestion + 1}.</span> ${question}`;
    //Set answerElement inner html to blank otherwise it will display old answers
    answersElement.innerHTML = '';
    //For every answer, create the button and add it to answers element
    for (let i = 0; i < answers.length; i++) {
        let currentAnswer = answers[i];
        let newButton = document.createElement('button');
        newButton.textContent = currentAnswer.text;
        newButton.classList.add('btn', 'btn-outline-secondary', 'd-block');
        //Add event listener on click and check the result parsing the btn and currentAnswer
        newButton.addEventListener('click', function () {
            checkResult(newButton, currentAnswer);
        });
        answersElement.appendChild(newButton);
    }
}
let nextQuestion = function () {
    //increment currentQuestion counter
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        //Else display score
        container.innerHTML = `<h2>Quiz Completed!</h2><div class="alert alert-primary mt-2">Your score is <span class="fw-bold">${score} / ${quizData.length}</span></div>`;
    }
}

//Renders first question
showQuestion();