class Filter {
    #container;
    #data;
    #allBtn;
    #activeBtn;
    #completedBtn;

    constructor(container, data) {
        this.#container = container;
        this.#data = data;

        this.#allBtn = document.querySelector('.select-all');
        this.#activeBtn = document.querySelector('.select-active');
        this.#completedBtn = document.querySelector('.select-completed');

        this.#allBtn.addEventListener('click', this.#onAllSelect.bind(this));
        this.#activeBtn.addEventListener('click', this.#onActiveSelect.bind(this));
        this.#completedBtn.addEventListener('click', this.#onCompletedSelect.bind(this));
    }

    update() {
        if (this.#allBtn.classList.contains('active-select')) {
            this.#onAllSelect();
        } else if (this.#activeBtn.classList.contains('active-select')) {
            this.#onActiveSelect();
        } else if (this.#completedBtn.classList.contains('active-select')) {
            this.#onCompletedSelect();
        }
    }

    #onAllSelect() {
        let allListItems = this.#data.querySelectorAll('li');
        for (let i = 0; i < allListItems.length; i++) {
            allListItems[i].classList.remove('d-none');
        }

        this.#allBtn.classList.add('active-select');
        this.#activeBtn.classList.remove('active-select');
        this.#completedBtn.classList.remove('active-select');
    }

    #onActiveSelect() {
        this.#onAllSelect();
        let allListCheckBoxes = this.#data.querySelectorAll('.check-box');
        for (let i = 0; i < allListCheckBoxes.length; i++) {
            if (allListCheckBoxes[i].checked) {
                let listItem = allListCheckBoxes[i].parentElement.parentElement;
                listItem.classList.add('d-none');
            }
        }
        this.#allBtn.classList.remove('active-select');
        this.#activeBtn.classList.add('active-select');
        this.#completedBtn.classList.remove('active-select');
    }

    #onCompletedSelect() {
        this.#onAllSelect();
        let allListCheckBoxes = this.#data.querySelectorAll('.check-box');
        for (let i = 0; i < allListCheckBoxes.length; i++) {
            if (!allListCheckBoxes[i].checked) {
                let listItem = allListCheckBoxes[i].parentElement.parentElement;
                listItem.classList.add('d-none');
            }
        }
        this.#allBtn.classList.remove('active-select');
        this.#activeBtn.classList.remove('active-select');
        this.#completedBtn.classList.add('active-select');
    }
}

export default Filter;