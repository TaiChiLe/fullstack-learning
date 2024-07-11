import QuizSelection from './components/quizSelection.js';
import QuizNavigation from './components/quizNavigation.js';
import QuizContent from './components/quizContent.js';

class QuizApp {
    #container;
    #quizSelection;
    #activeQuiz;
    #quizNavigation;
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

        this.#quizSelection = new QuizSelection(
            container.querySelector('[data-component="selection"]'),
            this.#onQuizSelectionChange.bind(this)
        );

        let navigationContainer = this.#container.querySelector(
            '[data-component = "navigation"]'
        );
        this.#quizNavigation = new QuizNavigation(
            navigationContainer,
            this.#onNavigationChange.bind(this),
            this.#onSubmit.bind(this)
        );
        this.#quizContent = new QuizContent(
            container.querySelector('[data-component="content"]')
        );
    }

    #onNavigationChange(activeIndex) {
        console.log('Current active index ', activeIndex);
        // main now will tell quizContent which index it should move to
        this.#quizContent.setActiveIndex(activeIndex);
    }

    #onSubmit() {
        console.log('On submit is being called from Quiz Navigation');
    }

    #onQuizSelectionChange(selectedValue) {
        console.log(selectedValue);
        //to do fetch we need to know the url we arbout to fetch
        //1. construct the url so we can fetch
        //what do we want : date/javasscript-quiz.json
        let url = 'data/' + selectedValue + '.json';
        //same : let url = `data/${selectedValue}.json`;
        console.log(url);

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(
                function (result) {
                    console.log('Selected quiz data', result);
                    this.#activeQuiz = result;
                    this.#quizNavigation.setQuizData(this.#activeQuiz);
                    this.#quizContent.setQuizData(this.#activeQuiz);
                }.bind(this)
            );
    }
}

const app = new QuizApp(document.querySelector('#app'));