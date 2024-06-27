class QuizNavigation {
    #container;
    #activeIndex;
    #nextBtn;
    #prevBtn;
    #onSubmit;
    #onChange;

    constructor(container, onChange, onSubmitClicked) {
        this.#container = container;
        this.#onSubmit = onSubmitClicked;
        this.#onChange = onChange;
    }
    setQuizData(data) {
        console.log('data passing onto navigation', data);
        let pageNavigation = '';
        for (let i = 0; i <= data.items.length - 1; i++) {
            pageNavigation =
                pageNavigation +
                `<li class="page-item">
              <button class="page-link">${i + 1}</button>
          </li>`;
        }
        this.#container.innerHTML = `
      <div class="d-flex justify-content-center gap-4 mt-2">
          <div>
              <button class="btn btn-secondary" data-component="previous">
              Previous
              </button>
          </div>
          <ul class="pagination" data-component="pagination">
          ${pageNavigation}</ul>
          <div>
              <button class="btn btn-primary" data-component="next">
              Next
              </button>
          </div>
      </div>`;
        this.#setup();
        this.#setActivePagination(0);
    }

    #setup() {
        let allPaginationButtons = this.#container.querySelectorAll('.page-link');

        for (let i = 0; i < allPaginationButtons.length; i++) {
            let currentButton = allPaginationButtons[i];
            currentButton.addEventListener(
                'click',
                this.#onPaginationItemClick.bind(this)
            );
        }

        this.#nextBtn = this.#container.querySelector('[data-component="next"]');
        this.#nextBtn.addEventListener('click', this.#onNextButtonClick.bind(this));

        this.#prevBtn = this.#container.querySelector(
            '[data-component="previous"]'
        );
        this.#prevBtn.addEventListener(
            'click',
            this.#onPreviousButtonClick.bind(this)
        );
    }

    #onNextButtonClick() {


        let currentText = this.#nextBtn.innerHTML;
        if (currentText === 'Submit') {
            //user wants to submit, we need to notify main.js
            this.#onSubmit();
        } else {
            let newIndex = this.#activeIndex + 1;
            this.#setActivePagination(newIndex);
        }
    }

    #onPreviousButtonClick() {
        if (this.#activeIndex > 0) {
            let newIndex = this.#activeIndex - 1;
            this.#setActivePagination(newIndex);
        }
    }

    #onPaginationItemClick(event) {
        let currentButton = event.target;
        let label = currentButton.innerHTML;
        let index = Number(label) - 1;

        this.#setActivePagination(index);
    }

    #setActivePagination(index) {
        let allPaginationButtons = this.#container.querySelectorAll('.page-link');

        for (let i = 0; i < allPaginationButtons.length; i++) {
            let button = allPaginationButtons[i];

            if (i === index) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }

        this.#activeIndex = index;

        //select prev button
        let prevBtn = this.#container.querySelector('[data-component="previous"]');

        if (this.#activeIndex > 0) {
            prevBtn.disabled = false;
        } else {
            prevBtn.disabled = true;
        }

        if (this.#activeIndex === allPaginationButtons.length - 1) {
            this.#nextBtn.innerHTML = 'Submit';
        } else {
            this.#nextBtn.innerHTML = 'Next';
        }

        this.#onChange(this.#activeIndex);
    }
}

export default QuizNavigation;