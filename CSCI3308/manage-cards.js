var g = 0;
function addCard(i) {
    g = g + 1;
    var ident = Math.random();
    var tweet = $(  '<div class="card bg-light p-1 m-1 text-dark" id="' + g + '">' +
                        '<button onclick="deleteCard(' + g + ')" class="btn btn-danger m-1 btn-circle ml-auto">x</button>' +
                        '<img class="w-25 mx-auto p-1" src="img/twitter.svg" alt="">' +
                        '<b>@user1234</b>' +
                        '<p>This is a sample tweet</p>' +
                    '</div>');
    tweet.appendTo(i);
}

function deleteCard(i) {
    document.getElementById(i).remove()
}