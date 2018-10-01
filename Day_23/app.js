(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    const responseContainer = document.querySelector('#response-container');
    let searchedForText;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        
        getImage();
        getArticles();
    });

    function getImage() {
        const unsplashRequest = new XMLHttpRequest();

        unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query="${searchedForText}"`);
        unsplashRequest.onload = addImage;
        unsplashRequest.setRequestHeader('Authorization', 'Client-ID 7200cb58d12b5b5169a2904f02f480b1d9381716781e631cba49cfc2ed9e8cd7')
        unsplashRequest.send();
    }

    function addImage() {
        let htmlContent = '';
        const data = JSON.parse(this.responseText);

        if(data && data.results && data.results[0]) { 
            const firstImage = data.results[0];
            htmlContent = `
            <figure>
                <img src="${firstImage.urls.regular}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            </figure>
            `;
        } else {
            htmlContent = '<div class="error-no-image">No Images Available</div>';
        }

        responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    }

    function addArticles() {
        let htmlContent = '';
        const data = JSON.parse(this.responseText);

        if(data.response && data.response.docs && data.response.docs.length > 1) { 
            htmlContent = '<ul>' + data.response.docs.map(article => `<li class="article"> 
                <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
                <p>${article.snippet}</p>
            `).join('') + '</ul>';
        } else {
            htmlContent = '<div class="error-no-articles">No Articles Available</div>';
        }
        responseContainer.insertAdjacentHTML('beforeend', htmlContent)
    };

    function getArticles() {
        const articleRequest = new XMLHttpRequest();
        articleRequest.onload = addArticles;
        articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=a9b3da6396eb479bb640afd3b6bf082c`);
        articleRequest.send();
    }
    
})();
