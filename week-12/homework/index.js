let input = document.querySelector('.input');
let addBtn = document.querySelector('.add-btn');
let itemContainer = document.querySelector('.item-container');
let currentTaskNum = 0;
//Creates tasklist, takes taskNumber and input value
let processTaskList = function (taskNum, inputValue) {

    itemContainer.innerHTML = itemContainer.innerHTML + `
    <div class="item d-flex pt-1" item-number="${taskNum}">
    <input type="text" disabled="true" input-item-number="${taskNum}" class="input-item form-control" value="${inputValue}">
    <button delete-item-number="${taskNum}" class="delete-btn btn btn-danger">X</button>
    <button edit-item-number="${taskNum}" class="edit-btn btn btn-primary">Edit</button>
    <button save-item-number="${taskNum}" class="save-btn d-none btn btn-secondary">Save</button></div>`;

    //clears input value from input section
    input.value = '';
    //Add event listeners to the buttons
    let currentDeleteBtn = document.querySelector(`[delete-item-number="${taskNum}"]`);
    let currentEditBtn = document.querySelector(`[edit-item-number="${taskNum}"]`);
    currentDeleteBtn.addEventListener('click', processDeleteBtn);
    currentEditBtn.addEventListener('click', processEditBtn);
}
let processAddBtn = function (event) {
    processTaskList(currentTaskNum, input.value);
    currentTaskNum++;
}
addBtn.addEventListener('click', processAddBtn);
//Process delete Btn, when clicked remove the html content and from the array:
let processDeleteBtn = function (event) {
    let button = event.target;
    let itemNum = button.getAttribute('delete-item-number');
    let targetItem = document.querySelector(`[item-number="${itemNum}"]`);

    targetItem.outerHTML = '';
}
//Process save Btn when clicked
let processSaveBtn = function (event) {
    let button = event.target;
    let itemNum = button.getAttribute('save-item-number');
    let textInput = document.querySelector(`[input-item-number="${itemNum}"]`);
    let saveBtn = document.querySelector(`[save-item-number="${itemNum}"]`);
    let editBtn = document.querySelector(`[edit-item-number="${itemNum}"]`);

    textInput.disabled = true;
    textInput.setAttribute('value', textInput.value);

    saveBtn.classList.add('d-none');

    editBtn.classList.remove('d-none');
}

let processEditBtn = function (event) {
    let button = event.target;
    let itemNum = button.getAttribute('edit-item-number');
    let targetItem = document.querySelector(`[input-item-number="${itemNum}"`);
    let saveBtn = document.querySelector(`[save-item-number="${itemNum}"`);
    let editBtn = document.querySelector(`[edit-item-number="${itemNum}"`);
    targetItem.disabled = false;
    editBtn.classList.add('d-none');
    saveBtn.classList.remove('d-none');
    saveBtn.addEventListener('click', processSaveBtn);
}

let sortBtn = document.querySelector('.sort-btn');

let processSort = function () {
    let items = document.querySelectorAll('.input-item');
    let itemsValues = [];
    for (let i = 0; i < items.length; i++) {
        itemsValues.push(items[i].value);
    }
    itemsValues.sort();
    itemContainer.innerHTML = '';

    for (let i = 0; i < itemsValues.length; i++) {
        processTaskList(i, itemsValues[i]);
    }
}

sortBtn.addEventListener('click', processSort);