const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value = '';

    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = docs => {
    console.log(docs);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    document.getElementById('result-found').innerText = docs.length;
    if (docs.length == 0) {
        const result = document.getElementById('no-result');
        result.style.display = 'block';
    }
    else {
        const result = document.getElementById('no-result');
        result.style.display = 'none';
    }
    docs.forEach(doc => {
        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${doc.title}</h5>
            <p class="card-text">${doc.author_name}</p>
            <p class="card-text">${doc.first_publish_year}</p>
        </div>
   </div >`
        searchResult.appendChild(div);
    });
}

