let sideBarBtn = document.querySelector('.sidebar-toggle-button');
let sideBarWindow = document.querySelector('.sidebar');

let toggleSideBar = function () {
    if (sideBarWindow.classList.contains('collapsed')) {
        sideBarWindow.classList.remove('collapsed');
    } else {
        sideBarWindow.classList.add('collapsed');
    }
}

sideBarBtn.addEventListener('click', toggleSideBar);

let tabTriggerButtons = document.querySelectorAll('.tabs-trigger');
const allTabPanels = document.querySelectorAll(`[data-tab-content]`);

let onTabTriggerButtonClicked = function (event) {
    let currentButton = event.target;
    for (let i = 0; i < tabTriggerButtons.length; i++) {
        let tabButton = tabTriggerButtons[i];
        tabButton.classList.remove('active');
    }
    currentButton.classList.add('active');

    const tabTarget = currentButton.getAttribute('data-tab-target');

    for (let i = 0; i < allTabPanels.length; i++) {
        let currentTab = allTabPanels[i];
        let tabContentValue = currentTab.getAttribute('data-tab-content');

        if (tabContentValue === tabTarget) {
            currentTab.classList.add('active');
        } else {
            currentTab.classList.remove('active');
        }
    }

};

for (let i = 0; i < tabTriggerButtons.length; i++) {
    let button = tabTriggerButtons[i];

    button.addEventListener('click', onTabTriggerButtonClicked);
}
