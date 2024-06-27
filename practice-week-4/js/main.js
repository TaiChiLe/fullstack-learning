import QuizSelection from "./components/quizSelection.js";
import QuizNavigation from "./components/quizNavigation.js";
import QuizContent from "./components/quizContent.js";

class QuizApp {
    #container;
    #quizSelection;
    #quizNavigation;
    #activeQuiz;
    #quizContent;

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

    }

    #onQuizSelectionChange(selectedValue) {
        console.log(selectedValue)
        let url = `data/${selectedValue}.json`;
        console.log(url);
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (result) {
            console.log('Selected Quiz Data', result);
            this.#activeQuiz = result;
            let numPages = result.items.length;
            console.log(numPages);
            this.#quizNavigation = new QuizNavigation(this.#container.querySelector('[data-component="navigation"]'), this.#onChange.bind(this), this.#onSubmit.bind(this));

            this.#quizNavigation.setQuizData(this.#activeQuiz);

            this.#quizContent = new QuizContent(this.#container.querySelector('[data-component="content"]'));

            this.#quizContent.setQuizData(this.#activeQuiz);

            this.#quizContent.setActiveItem(0);

        }.bind(this));
    }

    #onSubmit() {
        console.log("On Submit Function Called");
    }

    #onChange(index) {
        console.log('On Change Active Index: ', index);
        if (this.#quizContent) {
            this.#quizContent.setActiveItem(index);
        }
    }
}

const app = new QuizApp(document.querySelector('#app'));