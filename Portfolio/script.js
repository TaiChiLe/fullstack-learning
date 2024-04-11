// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");

//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("active");
//         } else {
//             reveals[i].classList.remove("active");
//         }
//     }
// }

// window.addEventListener("scroll", reveal);


let navButtons = document.querySelectorAll('.nav-bar-icons');
let section1 = document.querySelector('.section-1');
let section2 = document.querySelector('.section-2');
let section3 = document.querySelector('.section-3');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", function () {
        section1.classList.add('hidden');
        section2.classList.add('hidden');
        section3.classList.add('hidden');
        section1.classList.remove('reveal');
        section2.classList.remove('reveal');
        section3.classList.remove('reveal');
        if (i === 0) {
            section1.classList.add('reveal');
            section1.classList.remove('hidden');
        }

        if (i === 1) {
            section2.classList.add('reveal');
            section2.classList.remove('hidden');
        }



    })
}