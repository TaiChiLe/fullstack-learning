let btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    alert('Hello World');
});

let ChangeBtn = document.querySelector('.changeBtn');
let Input = document.querySelector('input');
ChangeBtn.addEventListener('click', function () {
    Input.value = 'A button is clicked';
});

let getNameBtn = document.querySelector('.getNameBtn');
let displayName = document.querySelector('[data-component="displayName"]');
getNameBtn.addEventListener('click', function () {
    let firstName = document.querySelector('[data-component="FirstName"]').value;
    let lastName = document.querySelector('[data-component="LastName"]').value;
    displayName.innerHTML = `Full name = ${firstName} ${lastName}`;
});

let uppercaseBtn = document.querySelector('.uppercaseBtn');
uppercaseBtn.addEventListener('click', function () {
    let input = document.querySelector('.uppercaseInput');
    let uppercaseValue = input.value.toUpperCase();
    input.value = uppercaseValue;
});

let backgroundBtn = document.querySelector('[data-action="background"]');
let sizeBtn = document.querySelector('[data-action="size"]');
let displayBtn = document.querySelector('[data-action="display"]');
let box = document.querySelector('.box');

backgroundBtn.addEventListener('click', function () {
    if (box.classList.contains('red')) {
        box.classList.remove('red');
        backgroundBtn.innerHTML = 'Change the box background to red';
    } else {
        box.classList.add('red');
        backgroundBtn.innerHTML = 'Change the box background to default';
    }
});

sizeBtn.addEventListener('click', function () {
    if (box.classList.contains('big')) {
        box.classList.remove('big');
        sizeBtn.innerHTML = 'Make the box bigger';
    } else {
        box.classList.add('big');
        sizeBtn.innerHTML = 'Make the box normla size';
    }
});

displayBtn.addEventListener('click', function () {
    if (box.classList.contains('d-none')) {
        box.classList.remove('d-none');
        displayBtn.innerHTML = 'Hide the box';
    } else {
        box.classList.add('d-none');
        displayBtn.innerHTML = 'Show the box';
    }
});

let colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let rainbowBtn = document.querySelector('.rainbowBtn');
let rainbowBox = document.querySelector('.rainbowBox');

let currentBackgroundIndex = 0;
let nextBackgroundIndex = 1;

rainbowBtn.addEventListener('click', function () {
    currentBackgroundIndex++;
    nextBackgroundIndex++;
    if (currentBackgroundIndex >= colours.length) {
        currentBackgroundIndex = 0;
    }
    if (currentBackgroundIndex >= colours.length - 1) {
        nextBackgroundIndex = 0;
    }


    rainbowBtn.innerHTML = `Change the box background to ${colours[nextBackgroundIndex]}`;
    rainbowBox.style.backgroundColor = colours[currentBackgroundIndex];

});

let personDetails = document.querySelector('[data-action="person-details"]');
let showBtn = document.querySelector('[data-action="show-content-btn"]');

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software engineer',
};

showBtn.addEventListener('click', function () {
    if (personDetails.classList.contains('show')) {
        personDetails.classList.remove('show');
        showBtn.innerHTML = 'Show Content';
        personDetails.innerHTML = 'Content Hidden';
    } else {
        personDetails.classList.add('show');
        showBtn.innerHTML = 'Hide Content';
        personDetails.innerHTML = `
        <div><b>Name:</b> ${person.firstName} ${person.lastName}</div>
        <div><b>Age:</b> ${person.age}</div>
        <div><b>Occupation:</b> ${person.occupation}</div>
        `
    }
});