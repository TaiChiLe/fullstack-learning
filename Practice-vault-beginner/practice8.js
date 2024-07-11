let submitBtn = document.querySelector('.submit-button');

submitBtn.addEventListener('click', function () {
    let firstNameBtn = document.querySelector('[name="firstname"]');
    let lastNameBtn = document.querySelector('[name="lastname"]');
    let ageBtn = document.querySelector('[name="age"]');
    let occupationBtn = document.querySelector('[name="occupation"]');
    let avatarBtn = document.querySelector('[name="avatar"]');

    let profileCard = document.querySelector('.card');
    let cardBody = profileCard.querySelector('.card-body');

    let profileData = {
        firstName: firstNameBtn.value,
        lastName: lastNameBtn.value,
        age: ageBtn.value,
        occupation: occupationBtn.value,
        avatar: avatarBtn.value,
    }

    cardBody.innerHTML = `
            <div class="col">
            <img class="avatar" src="${profileData.avatar}" alt="">
                <div>
                    <p>Name: ${profileData.firstName} ${profileData.lastName}</p>
                    <p>Age: ${profileData.age}</p>
                    <p>Occupation: ${profileData.occupation}</p>
                </div>
            </div>
    `;

    firstNameBtn.disabled = true;
    lastNameBtn.disabled = true;
    ageBtn.disabled = true;
    occupationBtn.disabled = true;
    avatarBtn.disabled = true;

    profileCard.classList.remove('d-none');
    console.log(profileData);
});