class Footer {
    #container;
    #data;

    constructor(container, data) {
        this.#container = container;
        this.#data = data;
    }

    render() {
        let itemsLeft = this.#data.querySelectorAll('li');
        if (itemsLeft.length != 0) {
            this.#container.classList.remove('d-none');
        } else {
            this.#container.classList.add('d-none');
        }
    }
}

export default Footer;