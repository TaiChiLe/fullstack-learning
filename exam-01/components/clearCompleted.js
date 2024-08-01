class ClearCompleted {
    #container;
    #data;
    #notifyClear;

    constructor(container, data, notifyClear) {
        this.#container = container;
        this.#data = data;
        this.#notifyClear = notifyClear;
        this.#container.addEventListener('click', this.#clear.bind(this))
    }

    #clear() {
        let allListCheckBoxes = this.#data.querySelectorAll('.check-box');
        for (let i = 0; i < allListCheckBoxes.length; i++) {
            if (allListCheckBoxes[i].checked) {
                let listItem = allListCheckBoxes[i].parentElement.parentElement;
                listItem.remove();
            }
        }
        this.#notifyClear();
    }
}

export default ClearCompleted;