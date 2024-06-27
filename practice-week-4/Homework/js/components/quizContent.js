class QuizContent {
    #container;
    #activeIndex;
    #data;
    #onChange;

    constructor(container, onChange) {
        this.#container = container;
        this.#onChange = onChange;
    }

    setQuizData(data) {
        console.log(data);
        this.#data = data;

        let content = '';

        for (let i = 0; i < data.items.length; i++) {
            // get the current item at the current position i
            let currentItem = data.items[i];
            let answerContent = '';

            for (let y = 0; y < currentItem.answers.length; y++) {
                // get the current answer at the current index y
                let currentAnswer = currentItem.answers[y];

                answerContent =
                    answerContent +
                    `<button class="btn btn-outline-secondary d-block" data-answer="${y}">${currentAnswer.text}</button>`;
            }

            content =
                content +
                `<div class="d-none" data-item="${i}">
              <div class="mb-3"><span class="fw-bold">Question ${i + 1}.</span> ${currentItem.question
                }</div>
              <div class="mb-3 d-flex flex-column gap-3 w-100">
                  ${answerContent}
              </div>
          </div>`;
            // render the current item question with the format Question [number] - [content]
            // Where do we render this content ^^
            // this.#container.innerHTML =
        }

        this.#container.innerHTML = `
       <h1 class="mb-4">${this.#data.title}</h1>
       <div data-component="content" class="mb-3">
          ${content}        
       </div>`;

        this.#setup();
    }

    setActiveItem(itemIndex) {
        let dataItems = this.#container.querySelectorAll('[data-item]');

        for (let i = 0; i < dataItems.length; i++) {
            if (i === itemIndex) {
                dataItems[i].classList.remove('d-none');
            } else {
                dataItems[i].classList.add('d-none');
            }
        }
    }

    #onAnswerSelected(event) {
        let currentButton = event.target;
        console.log('Current Button Clicked', currentButton);
        let currentAnswerIndex = currentButton.getAttribute('data-answer');
        let parentNode = currentButton.parentNode.parentNode;
        console.log('Parent of Btn', parentNode);
        let currentQuestionIndex = parentNode.getAttribute('data-item');
        console.log('Answer Node Index', currentAnswerIndex);
        console.log('Parent Node Index', currentQuestionIndex);
        let currentQuestionAnswers = this.#data.items[currentQuestionIndex].answers;
        console.log(currentQuestionAnswers);

        //disable all current question answer btns
        let allCurrentAnswerBtns = parentNode.querySelectorAll('button');
        console.log('All Current Answer Btns', allCurrentAnswerBtns);
        for (let i = 0; i < allCurrentAnswerBtns.length; i++) {
            allCurrentAnswerBtns[i].disabled = true;
        }

        if (currentQuestionAnswers[currentAnswerIndex].correct) {
            currentButton.classList.remove('btn-outline-secondary');
            currentButton.classList.add('btn-success');
            currentButton.innerHTML += `<i class="bi ms-2 bi-check-circle-fill"></i>`;
        } else {
            currentButton.classList.remove('btn-outline-secondary');
            currentButton.classList.add('btn-danger');
            currentButton.innerHTML += `<i class="bi ms-2 bi-exclamation-circle-fill"></i>`;
        }

        let data = {
            itemIndex: currentQuestionIndex,
            answerIndex: currentAnswerIndex,
            correct: currentQuestionAnswers[currentAnswerIndex].correct,
        };

        this.#onChange(data);
    }

    #setup() {
        let allAnswers = this.#container.querySelectorAll('[data-answer]');
        for (let i = 0; i < allAnswers.length; i++) {
            allAnswers[i].addEventListener('click', this.#onAnswerSelected.bind(this));
        }
    }
}

export default QuizContent;