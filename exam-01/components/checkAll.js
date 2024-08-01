class CheckAll {
    #container;
    #data;
    #notifyAllCheck;

    constructor(container, data, notifyAllCheck) {
        this.#container = container;
        this.#data = data;
        this.#notifyAllCheck = notifyAllCheck;

        this.#container.addEventListener('click', this.#onCheckAllClick.bind(this));
    }

    render() {
        let itemsLeft = this.#data.querySelectorAll('li');
        if (itemsLeft.length != 0) {
            this.#container.classList.remove('d-none');
        } else {
            this.#container.classList.add('d-none');
        }
    }

    #onCheckAllClick() {
        //A Viet can you double check why this isn't working for an even number of tasks, i debugged and still can't find out why
        let allListItems = this.#data.querySelectorAll('.check-box');

        let allChecked = true;
        for (let i = 0; i < allListItems.length; i++) {
            if (allListItems[i].checked === false) {
                allChecked = false;
            }
        }

        if (allChecked === true) {
            for (let i = 0; i < allListItems.length; i++) {
                allListItems[i].checked = false;
                let selectedTask = allListItems[i].parentElement;
                selectedTask.classList.remove('strike-out');
            }
        } else {
            for (let i = 0; i < allListItems.length; i++) {
                allListItems[i].checked = true;
                let selectedTask = allListItems[i].parentElement;
                selectedTask.classList.add('strike-out');
            }
        }

        this.#notifyAllCheck();
    }

}

export default CheckAll;