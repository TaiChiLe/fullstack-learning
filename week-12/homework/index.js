let input = document.querySelector('.input');
let addBtn = document.querySelector('.add-btn');
let itemContainer = document.querySelector('.item-container');
let deleteBtns = document.querySelectorAll('.delete-btn');
let editBtns = document.querySelectorAll('.edit-btn');
let currentTaskNum = 0;

//Creates tasklist, takes taskNumber and input value
let processTaskList = function (taskNum, inputValue) {
    let newInput = document.createElement("input");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    let newDiv = document.createElement("div");

    deleteBtn.innerHTML = "X";
    deleteBtn.setAttribute('delete-item-number', taskNum);
    deleteBtn.classList.add('delete-btn');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger');
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute('edit-item-number', taskNum);
    editBtn.classList.add('edit-btn');
    editBtn.classList.add('btn');
    editBtn.classList.add('btn-primary');
    saveBtn.innerHTML = "Save";
    saveBtn.setAttribute('save-item-number', taskNum);
    saveBtn.classList.add('save-btn');
    saveBtn.classList.add('d-none');
    saveBtn.classList.add('btn');
    saveBtn.classList.add('btn-secondary');
    newInput.type = "text";
    newInput.setAttribute('disabled', 'true');
    newInput.setAttribute('input-item-number', taskNum);
    newInput.classList.add('input-item');
    newInput.classList.add('form-control');
    newInput.value = inputValue;
    newDiv.classList.add("item");
    newDiv.classList.add("d-flex");
    newDiv.classList.add("pt-1")
    newDiv.setAttribute('item-number', taskNum);

    newDiv.appendChild(newInput);
    newDiv.appendChild(deleteBtn);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(saveBtn);

    itemContainer.appendChild(newDiv);


    input.value = '';

    deleteBtns = document.querySelectorAll('.delete-btn');
    editBtns = document.querySelectorAll('.edit-btn');

    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', processDeleteBtn);
    }

    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', processEditBtn);
    }
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




