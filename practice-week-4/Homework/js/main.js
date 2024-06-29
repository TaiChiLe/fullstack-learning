import QuizSelection from "./components/quizSelection.js";
import QuizNavigation from "./components/quizNavigation.js";
import QuizContent from "./components/quizContent.js";
import QuizTimer from "./components/quizTimer.js";
import QuizReport from "./components/quizReport.js";

class QuizApp {
    #container;
    #quizSelection;
    #quizNavigation;
    #activeQuiz;
    #quizContent;
    #attemptedItems = [];
    #timer;
    #quizReport;

    constructor(container) {
        this.#container = container;
        this.#render();
        this.#setup();
    }

    #render() {
        this.#container.innerHTML = `
        <div class="container mt-5 text-center">
        <div data-component="selection"></div>
        <div data-component="content"></div>
        <div data-component="timer"></div>
        <div data-component="navigation"></div>
        <div data-component="report"></div>
        </div>`;
    }

    #setup() {
        let container = this.#container;

        this.#quizSelection = new QuizSelection(container.querySelector('[data-component="selection"]'), this.#onQuizSelectionChange.bind(this));

        this.#timer = new QuizTimer(this.#container.querySelector('[data-component="timer"]'));

    }

    #onQuizSelectionChange(selectedValue) {
        this.#timer.resetTimer();
        this.#timer.startTimer();
        if (this.#quizReport) {
            this.#quizReport.destroy();
        }
        console.log(selectedValue)
        let url = `data/${selectedValue}.json`;
        console.log(url);
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log('Selected Quiz Data', result);
            this.#attemptedItems = [];
            this.#activeQuiz = result;
            let numPages = result.items.length;
            console.log(numPages);
            this.#quizNavigation = new QuizNavigation(this.#container.querySelector('[data-component="navigation"]'), this.#onChange.bind(this), this.#onSubmit.bind(this));
            this.#quizNavigation.setQuizData(this.#activeQuiz);
            this.#quizContent = new QuizContent(this.#container.querySelector('[data-component="content"]'), this.#onQuizAnswerChange.bind(this));
            this.#quizContent.setQuizData(this.#activeQuiz);
            this.#quizContent.setActiveItem(0);
        }.bind(this));


    }

    #onSubmit() {
        console.log("On Submit Function Called");
        let timeResult = this.#timer.getTime();
        console.log('Time Result', timeResult);
        let totalQuestions = this.#activeQuiz.items.length;
        let score = 0;
        //calculate correct answers
        for (let i = 0; i < this.#attemptedItems.length; i++) {
            if (this.#attemptedItems[i].correct) {
                score++;
            }
        }

        this.#quizReport = new QuizReport(this.#container.querySelector('[data-component="report"]'));
        let scoreString = `${score} / ${totalQuestions}`;

        this.#quizReport.displayResults(scoreString, timeResult);
        this.#quizNavigation.destroy();
        this.#quizContent.destroy();
        this.#timer.resetTimer();
        this.#timer.destroy();


    }

    #onChange(index) {
        console.log('On Change Active Index: ', index);
        if (this.#quizContent) {
            this.#quizContent.setActiveItem(index);
        }
    }

    #onQuizAnswerChange(data) {
        console.log('Answer Data', data);
        this.#attemptedItems.push(data);
        console.log('Attempted Items', this.#attemptedItems);
    }
}

const app = new QuizApp(document.querySelector('#app'));