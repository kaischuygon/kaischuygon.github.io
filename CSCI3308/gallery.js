function newCard(url, title) {
    var newCard = document.createElement('div');
    newCard.className = 'card flex-item bg-info text-white';
    newCard.style = 'width: 18vw; margin: 2px';
    newCard.innerHTML = `
    <img class="card-img-top" src="${url}" alt="card image">
    <div class="card-body">
        <h5 class="card-title">${title}</h5>
    </div>`;
    document.getElementById('galleryPlaceholder').appendChild(newCard);
}

function parseArray(objArray) {
    const size = objArray.length;
    for (var i = 0; i < size; i++) {
        var farmid = objArray[i].farm;
        var serverid = objArray[i].server;
        var id = objArray[i].id;
        var secret = objArray[i].secret;
        var photoURL = `https://farm${farmid}.staticflickr.com/${serverid}/${id}_${secret}.jpg`;
        var photoTitle = objArray[i].title;
        newCard(photoURL, photoTitle);
    }
}

function refresh() {
    document.getElementById('galleryPlaceholder').innerHTML = '';
}

function makeApiCall() {
    const numberOfImages = document.getElementById('imageCount').value;
    const tags = document.getElementById('tagsInput').value;
    const data_url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b3fc55babf387e15fd62c0e23211af2d&tags=${tags}&per_page=${numberOfImages}&format=json&nojsoncallback=1`;
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4) {
            var jsonObj = JSON.parse(ajaxRequest.responseText);
            // console.log(jsonObj);
            var photosArray = jsonObj.photos.photo;
            parseArray(photosArray);
        }
    }
    ajaxRequest.open("GET", data_url, true);
    ajaxRequest.send();
}

window.onscroll = function() {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    if (offset >= height) {
      makeApiCall();
    }
};
