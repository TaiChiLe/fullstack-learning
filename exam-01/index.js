import GetInput from './getInput.js';
import Task from './tasks.js';
import TaskCounter from './taskCounter.js';
import Footer from './footer.js';
import Filter from './filter.js';
import ClearCompleted from './clearCompleted.js';
import CheckAll from './checkAll.js';

let inputTextContainer = document.querySelector('.text-input');
let inputText;
let counter;
let footer;
let filter;
let checkAllTasks;

let getInput = new GetInput(inputTextContainer, setInput);

function setInput(text) {
  inputText = text;

  if (inputText) {
    let taskContainer = document.querySelector('.task-container');
    let taskComponent = new Task(taskContainer, onDeleteBtnClick, onCheckboxCheck);
    taskComponent.addTodo(inputText);
    let counterContainer = document.querySelector('.counter');
    let data = document.querySelector('.task-list');

    counter = new TaskCounter(counterContainer, data);
    counter.render();

    footer = new Footer(document.querySelector('.footer'), data);
    footer.render();

    filter = new Filter(document.querySelector('.footer-middle'), data);
    filter.update();

    let clearCompleted = new ClearCompleted(document.querySelector('.footer-end'), data, notifyClear);

    let checkAllImage = document.querySelector('.select-all-image');
    checkAllTasks = new CheckAll(checkAllImage, data, notifyAllCheck);
    checkAllTasks.render();
  }
}

function onDeleteBtnClick() {
  counter.render();
  footer.render();
  checkAllTasks.render();
}

function onCheckboxCheck() {
  counter.render();
}

function notifyAllCheck() {
  counter.render();
}

function notifyClear() {
  footer.render();
}

