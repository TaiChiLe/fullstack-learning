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

let score = 0;
let currentQuestionIndex = 0;
let container = document.querySelector('[data-component="container"]');
let questionElement = document.querySelector('[data-component="question"]');
let answerElement = document.querySelector('[data-component="answers"]')

let checkAnswer = function (button, answer) {
    //once answer is clicked disable all buttons
    let allBtn = answerElement.querySelectorAll('.btn');

    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].disabled = true;
    }

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

let renderQuestion = function () {
    let currentQuestion = quizData[currentQuestionIndex];
    let question = currentQuestion.question;
    let answers = currentQuestion.answers;

    //Display first question
    questionElement.innerHTML = `<span class="fw-bold">Question ${currentQuestionIndex + 1}.</span> ${question}`;

    //clear buttons
    answerElement.innerHTML = '';

    //loop through answers and add button
    for (let i = 0; i < answers.length; i++) {
        let button = document.createElement('button');
        button.textContent = answers[i].text;
        button.classList.add('btn', 'btn-outline-secondary', 'd-block');
        //add event listener to button
        button.addEventListener('click', function () {
            checkAnswer(button, answers[i]);
        })
        answerElement.appendChild(button);
    }
}

let nextQuestion = function () {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        renderQuestion();
    } else {
        container.innerHTML = '';
        container.innerHTML = `<h2>Quiz Completed!</h2><div class="alert alert-primary mt-2">Your score is<span class="fw-bold"> ${score} / ${quizData.length}</span></div>`;
    }
}

renderQuestion();