class QuizContent {
    #container;
    #activeIndex;
    #data;

    constructor(container) {
        this.#container = container;
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
}

export default QuizContent;