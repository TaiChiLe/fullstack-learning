class GetInput {
  #container;
  #setInput;

  constructor(container, setInput) {
    this.#container = container;
    this.#setInput = setInput;

    this.#container.addEventListener('keypress', this.#getInputText.bind(this));
  }

  #clearInput() {
    this.#container.value = '';
  }

  #getInputText(event) {
    if (event.key == 'Enter') {
      this.#setInput(this.#container.value);
      this.#clearInput();
    }
  }
}

export default GetInput;
