//get all buttons, contents, tablinks, numbers
let buttons = document.querySelectorAll('.proceed-btn');
let contents = document.querySelectorAll('.tabcontent');
let tabLinks = document.querySelectorAll('.tablinks');
let prevButtons = document.querySelectorAll('.prev-btn');
let numButton = document.querySelectorAll('.number');

//check what button is clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        for (let x = 0; x < contents.length; x++) {
            contents[x].style.display = 'none';
        }
        contents[i + 1].style.display = 'flex';
        tabLinks[i].classList.remove('active');
        tabLinks[i + 1].classList.add('active');
        numButton[i].classList.remove('active');
        numButton[i + 1].classList.add('active');
    })
}

for (let i = 0; i < prevButtons.length; i++) {
    prevButtons[i].addEventListener('click', function () {

        for (let x = 0; x < contents.length; x++) {
            contents[x].style.display = 'none';
            tabLinks[x].classList.remove('active');
            numButton[x].classList.remove('active');
        }
        contents[i].style.display = 'flex';
        tabLinks[i].classList.add('active');
        numButton[i].classList.add('active');
    })
}

//if side-bar-btn is clicked minize window
let sideBtn = document.querySelector('.side-bar-btn');
let navBar = document.querySelector('.nav-bar');
let navBar2 = document.querySelector('.nav-bar2');
let mainPageContent = document.querySelector('.main-page-content');

sideBtn.addEventListener('click', function () {
    //make the window smaller;
    let sideBar = document.querySelector('.side-bar');
    let sideBarBtn = document.querySelector('.side-bar-btn');

    if (sideBar.classList.contains('small')) {
        sideBar.classList.remove('small');
        navBar.classList.remove('small');
        navBar2.classList.remove('small');
        mainPageContent.classList.remove('small');
        //loop through all class="side-bar-text" and remove hidden class
        let sideTexts = document.querySelectorAll('.side-bar-text');
        for (let i = 0; i < sideTexts.length; i++) {
            sideTexts[i].classList.remove('hidden');
        }
        //remove side-bar-btn rotation
        sideBarBtn.classList.remove('rotate');
    } else {
        sideBar.classList.add('small');
        navBar.classList.add('small');
        navBar2.classList.add('small');
        mainPageContent.classList.add('small');
        //loop through all class="side-bar-text" and add hidden class
        let sideTexts = document.querySelectorAll('.side-bar-text');
        for (let i = 0; i < sideTexts.length; i++) {
            sideTexts[i].classList.add('hidden');
        }

        //add side-bar-btn rotation
        sideBarBtn.classList.add('rotate');
    }


});

function openTab(evt, contentName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentName).style.display = "flex";
    evt.currentTarget.className += " active";

    //loop through numbButton and remove class active
    for (let x = 0; x < contents.length; x++) {
        numButton[x].classList.remove('active');
    }

    //loop through to find the active tablink and set associated numButton to active
    for (y = 0; y < tablinks.length; y++) {
        if (tablinks[y].classList.contains('active')) {
            numButton[y].classList.add('active');
        }
    }
}