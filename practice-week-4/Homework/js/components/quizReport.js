class QuizReport {
    #container;

    constructor(container) {
        this.#container = container;
    }

    displayResults(score, time) {
        this.#container.innerHTML += `
        <h2>Quiz completed!</h2>
        <div class="alert alert-primary mt-2">
            Your score is <span class="fw-bold">${score}</span>
        </div>
        <div class="alert alert-secondary">Your test time is <strong>${time}</strong></div>`;

    }

    destroy() {
        this.#container.innerHTML = '';
    }
}

export default QuizReport;