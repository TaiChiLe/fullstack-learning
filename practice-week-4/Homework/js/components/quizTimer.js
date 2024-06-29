class QuizTimer {
    #container;
    #timer;

    constructor(container) {
        this.#container = container;
    }

    #setup() {
        this.#container.innerHTML = `<div class="alert alert-info p-1 px-3 mt-3 d-inline-block">
        <i class="bi bi-clock"></i>
        <span data-component="clock">00:00:00</span>
      </div>`;
    }

    resetTimer() {
        clearInterval(this.#timer);
        this.#container.innerHTML = '';
    }

    startTimer() {
        this.#setup();
        var startTime = new Date().getTime(); // Get current time in milliseconds
        this.#timer = setInterval(function () {
            var currentTime = new Date().getTime();
            var elapsedTime = currentTime - startTime;

            var hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            let timerDisplay = this.#container.querySelector('[data-component="clock"]');
            timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
        }.bind(this), 1000);
    }

    getTime() {
        let timerDisplay = this.#container.querySelector('[data-component="clock"]');
        let time = timerDisplay.innerHTML;
        // let timeResult = time.split(':');
        return time;
    }

    destroy() {
        this.#container.innerHTML = '';
    }
}

export default QuizTimer;