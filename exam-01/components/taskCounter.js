class TaskCounter {
    #data;
    #container;

    constructor(container, data) {
        this.#container = container;
        this.#data = data;
    }

    render() {
        this.#container.innerHTML = '';
        let allListItems = document.querySelectorAll('.check-box');
        let activeItemsLeft = 0;
        for (let i = 0; i < allListItems.length; i++) {
            if (allListItems[i].checked == false) {
                activeItemsLeft++;
            }
        }

        if (activeItemsLeft === 1) {
            this.#container.innerHTML = `${activeItemsLeft} item left!`;
        } else {
            this.#container.innerHTML = `${activeItemsLeft} items left!`;
        }

        return activeItemsLeft;
    }

}

export default TaskCounter;