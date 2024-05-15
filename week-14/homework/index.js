//select all necessary elements
let list = document.querySelector('[data-compenent="list"]');
let loader = document.querySelector('[data-compenent="loader"]');
let prevBtn = document.querySelector('[data-component="pagination:previous"]');
let nextBtn = document.querySelector('[data-component="pagination:next"]');
let selectPagination = document.querySelector('[data-component="pagination:select"]');
let filter = document.querySelector('[data-compenent="filter"]');
let searchText = document.querySelector('[data-component="searchText"]');
let searchBtn = document.querySelector('[data-component="searchBtn"]');
let currentPage = 1;
let totalPages;

//renders the anime data
let renderData = function (animeData) {
    let data = animeData.data;

    //loops through data and generates html
    list.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        //check if title_english has null value
        let title = data[i].title_english;
        if (!title) {
            title = data[i].title;
        }
        list.innerHTML += `
        <div class="col-6 col-md-3 mb-5 text-center" title="${title}">
          <a href="details.html?id=${data[i].mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
            <span class="position-absolute badge bg-danger top-0 end-0">
                <i class="bi bi-star-fill"></i> ${data[i].score}
            </span>
            <span class="d-flex flex-column justify-content-center">
                <img class="rounded shadow" src="${data[i].images.jpg.image_url}" data-component="image">
                <span class="text-dark mt-2" data-component="title">${title}</span>
            </span>
          </a>
        </div>`;
    }

    //renders the pagination selection
    let page = animeData.pagination;
    currentPage = page.current_page;
    totalPages = page.items.count;

    //clears page
    selectPagination.innerHTML = '';
    //loop through pages and generate html
    for (i = 1; i <= totalPages; i++) {
        if (i == currentPage) {
            selectPagination.innerHTML += `<option selected value="${i}">${i}</option>`;
        } else {
            selectPagination.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }

    //hide loader and re-enable buttons when data received
    loader.classList.add('d-none');
    selectPagination.disabled = false;
    nextBtn.disabled = false;
    prevBtn.disabled = false;
    filter.disabled = false;
}

let renderFilter = function (genresData) {
    let allGenres = genresData.data;
    let currentFilter = filter.value;

    //render filter dropdown
    filter.innerHTML = '';
    if (currentFilter === 'top') {
        filter.innerHTML += `<option selected value="top">Top anime</option>`;
    } else {
        filter.innerHTML += `<option value="top">Top anime</option>`;
    }
    for (let i = 0; i < allGenres.length; i++) {
        if (currentFilter == allGenres[i].mal_id) {
            filter.innerHTML += `<option selected value="${allGenres[i].mal_id}">${allGenres[i].name} (${allGenres[i].count})</option>`;
        } else {
            filter.innerHTML += `<option value="${allGenres[i].mal_id}">${allGenres[i].name} (${allGenres[i].count})</option>`;
        }
    }
}

//fetch from api
let fetchData = function (input) {
    //remove d-none to show loader and disable buttons while loading
    loader.classList.remove('d-none');
    selectPagination.disabled = true;
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    filter.disabled = true;

    //add loading animation
    let allListItems = list.querySelectorAll('div');
    for (let i = 0; i < allListItems.length; i++) {
        allListItems[i].classList.add('animate-pulse');
    }

    //Checks if current filter is 'top' else renders genres
    if (input) {
        fetch(`https://api.jikan.moe/v4/anime?q=${input}&page=${currentPage}`).
            then(function (response) {
                return response.json();
            }).then(renderData);
    } else {
        if (filter.value == 'top') {
            fetch(`https://api.jikan.moe/v4/top/anime?page=${currentPage}`).
                then(function (response) {
                    return response.json();
                }).then(renderData);
        } else {
            fetch(`https://api.jikan.moe/v4/anime?genres=${filter.value}&page=${currentPage}`).
                then(function (response) {
                    return response.json();
                }).then(renderData);
        }
    }
}

//Renders the filter
let renderGenre = function () {
    fetch('https://api.jikan.moe/v4/genres/anime').
        then(function (response) {
            return response.json();
        }).then(renderFilter);
}

let loadPreviousPage = function () {
    if (currentPage >= 1) {
        currentPage--;
        fetchData(searchText.value);
    }
}

let loadNextPage = function () {
    if (currentPage <= totalPages) {
        currentPage++;
        fetchData(searchText.value);
    }
}

let selectPage = function () {
    let selectedPage = selectPagination.value;
    currentPage = selectedPage;
    fetchData(searchText.value);
}

let selectFilter = function () {
    currentPage = 1;
    fetchData();
}

let searchAnime = function () {
    if (searchText.value != '') {
        fetchData(searchText.value);
    }
}

//add event listeners
prevBtn.addEventListener('click', loadPreviousPage);
nextBtn.addEventListener('click', loadNextPage);
selectPagination.addEventListener('change', selectPage);
filter.addEventListener('change', selectFilter);
searchBtn.addEventListener('click', searchAnime);

//renders first page
fetchData();
renderGenre();