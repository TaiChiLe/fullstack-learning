//Get params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

//Select the html data components
let loader = document.querySelector('[data-component="loader"]');
let content = document.querySelector('[data-component="content"]');

//Display Content
let displayContent = function (animeData) {
    let data = animeData.data;
    let allTitles = [];
    let allProducers = [];
    let allGenres = [];

    for (let i = 0; i < data.titles.length; i++) {
        allTitles.push(data.titles[i].title);
    }

    for (let i = 0; i < data.producers.length; i++) {
        allProducers.push(data.producers[i].name);
    }

    for (let i = 0; i < data.genres.length; i++) {
        allGenres.push(data.genres[i].name);
    }

    loader.classList.add('d-none');

    //checks if title_english is null
    let title = data.title_english;
    if (!title) {
        title = data.title;
    }

    //render content
    content.innerHTML = `
    <div class="col col-md-4">
        <img class="rounded shadow" src="${data.images.jpg.large_image_url}">
    </div>
    <div class="col col-md-8">
        <div class="display-5 mb-2">${title}</div>
        <div class="mb-3">
            <strong class="me-3">Alternative</strong>
            <span>${allTitles.join('; ')}</span>
        </div>
        <div class="mb-3">
            <strong class="me-3">Producers</strong>
            <span>${allProducers.join(' - ')}</span>
        </div>
        <div class="mb-3">
            <strong class="me-3">Status</strong>
            <span>${data.status}</span>
        </div>
        <div class="mb-3">
            <strong class="me-3">Genres</strong>
            <span>${allGenres.join(' - ')}</span>
        </div>
        <div class="mb-3">
            <strong class="me-3">Rating</strong>
            <span>${data.rating}</span>
        </div>
        <div class="mb-3">
            <strong class="me-3">Rank</strong>
            <span class="badge bg-danger me-1">
                #${data.rank}
            </span>
            <span>(Score: ${data.score})</span>
        </div>
        <div>${data.synopsis}</div>
    </div>
`;
}

//fetch the data
fetch(`https://api.jikan.moe/v4/anime/${id}`)
    .then(function (response) {
        return response.json();
    }).then(displayContent);
