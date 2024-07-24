class Task {
  #container;
  #inputText;
  #notifyDeleteBtnClick;
  #notifyCheckBox;

  constructor(container, notifyDeleteBtnClick, notifyCheckBox) {
    this.#container = container;
    this.#notifyDeleteBtnClick = notifyDeleteBtnClick;
    this.#notifyCheckBox = notifyCheckBox;
  }

  addTodo(text) {

    let list = this.#container.querySelector('.task-list');
    let newLi = document.createElement('li');
    newLi.innerHTML = `<div><input class="check-box" type="checkbox"/> <input class="task-text" disabled type="text" value=${text}> </div>
          <i class="bi bi-file-x delete-btn d-none"></i>`;
    list.appendChild(newLi);

    let deleteBtn = newLi.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this.#onDeleteButtonClick.bind(this));

    let checkBox = newLi.querySelector('.check-box');
    checkBox.addEventListener('click', this.#onCheckBox.bind(this));

    let taskText = newLi.querySelector('.task-text').parentNode.parentNode;
    console.log(taskText);
    taskText.addEventListener('dblclick', this.#onTaskDbleClick.bind(this));
    taskText.addEventListener('keypress', this.#onKeyPress.bind(this));
  }

  #onCheckBox(event) {
    this.#notifyCheckBox();
    let selectedTask = event.target.parentElement;
    let checkBox = event.target;

    if (checkBox.checked) {
      selectedTask.classList.add('strike-out');
    } else {
      selectedTask.classList.remove('strike-out');
    }

  }

  #onDeleteButtonClick(event) {
    let currentButton = event.target;
    let listItem = currentButton.parentElement;
    listItem.remove();
    this.#notifyDeleteBtnClick();
  }

  #onTaskDbleClick(event) {
    let taskTextBox = event.target.querySelector('.task-text');
    taskTextBox.disabled = false;
  }

  #onKeyPress(event) {
    if (event.key === 'Enter') {
      let taskTextBox = event.target;
      taskTextBox.disabled = true;
      taskTextBox.focus();
    }
  }
}

export default Task;
