(() => {
    "use strict";
    // let loadMessage = $('#page-loading').toggleClass('hidden');
    let submitBtn = document.querySelector('#movie-choice');
    let submitNewMovie = document.querySelector('#newMovieBtn');
    let filterMovie = document.querySelector('#movie-cards');


    pageLoaded();
    console.log(submitNewMovie);

    // function to add new movies
    function addMovies(name, rating, type) {
        // addFilm.preventDefault();
        let filmObject = {
            title: name,
            rate: rating,
            genre: type
        };
        fetch('https://longing-flossy-bed.glitch.me/movies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(filmObject)
        })
            .then(() => fetch('https://longing-flossy-bed.glitch.me/movies'))
            .then(res => res.json())
            .then((movie) => {
                let movies = document.getElementById('movie-cards');
                let html = '';

                for (let i = 0; i < movie.length; i++) {
                    html += `<div>`
                    html += `<h2>${movie[i].title}</h2>`
                    html += `<h6>Rating: ${movie[i].rate} stars</h6>`
                    html += `<h6>Genre: ${movie[i].genre}</h6>`
                    html += `<button name="Save" id="save-Movies" type="submit" value="${movie[i].id}">Save</button>`
                    html += `<button name="Edit" id="edit-Movies" type="submit" value="${movie[i].id}">Edit</button>`
                    html += `<button name="Delete" id="delete-Movies" type="submit" value="${movie[i].id}">Delete</button>`
                    html += `</div>`
                }
                // $('#page-loading').toggle("hidden");
                movies.innerHTML = html;
            });
        // addTitle.value = '';
    }

    submitNewMovie.addEventListener('click', function () {
        let addRating = document.querySelector('#newMovieRate').value;
        let addTitle = document.querySelector('#newMovie').value;
        let addGenre = document.querySelector('#newMovieGenre').value;
        addMovies(addTitle, addRating, addGenre);
    });

    //loading image

        function pageLoaded() {
            $(document).ready(function () {
                let movies = document.getElementById('movie-cards');
                fetch('https://longing-flossy-bed.glitch.me/movies')
                    .then(response => response.json())
                    .then(movie => {
                        let html = '';

                        for (let i = 0; i < movie.length; i++) {
                            html += `<div>`
                            html += `<h2>${movie[i].title}</h2>`
                            html += `<h6>Rating: ${movie[i].rate} stars</h6>`
                            html += `<h6>Genre: ${movie[i].genre}</h6>`
                            html += `<button name="Save" id="save-Movies" type="submit" value="${movie[i].id}">Save</button>`
                            html += `<button name="Edit" id="edit-Movies" type="submit" value="${movie[i].id}">Edit</button>`
                            html += `<button name="Delete" id="delete-Movies" type="submit" value="${movie[i].id}">Delete</button>`
                            html += `</div>`
                        }
                        // $('#page-loading').toggle("hidden");
                        movies.innerHTML = html;
            $('#page-loading').toggle(2000);

    });

    // let movies = document.getElementById('movie-cards');
    // fetch('https://longing-flossy-bed.glitch.me/movies')
    //     .then(response => response.json())
    //     .then(movie => {
    //         let html = '';
    //
    //         for (let i = 0; i < movie.length; i++) {
    //             html += `<div>`
    //             html += `<h2>${movie[i].title}</h2>`
    //             html += `<h6>Rating: ${movie[i].rate} stars</h6>`
    //             html += `<h6>Genre: ${movie[i].genre}</h6>`
    //             html += `<button name="Save" id="save-Movies" type="submit" value="${movie[i].id}">Save</button>`
    //             html += `<button name="Edit" id="edit-Movies" type="submit" value="${movie[i].id}">Edit</button>`
    //             html += `<button name="Delete" id="delete-Movies" type="submit" value="${movie[i].id}">Delete</button>`
    //             html += `</div>`
    //         }
    //         // $('#page-loading').toggle("hidden");
    //         movies.innerHTML = html;


            $('#edit-Movies').click(function () {
                let editPic = ($(this).val());
                let titlePic1 = $(this).parent().children('h2').first().html()
                let ratingPic1 = $(this).parent().children('h6').first().html()
                $(this).parent().children('#save-Movies').toggleClass('hidden')

                $(this).parent().children('h2').first().html(`<input type='text' value='${title}' id="makeChange">`);
                $(this).parent().children('h6').first().html(changeRating(rating));

                //save btn

                $('#save-Movies').click(function () {
                    let titlePic2 = $('#makeChange').val();
                    let ratingPic2 = $("#selector").val();
                    changeMovies(editPic, titlePic2, ratingPic2);
                });

                // change title
                $('#makeChange').click(function (e) {
                    let typing = e.key;
                    let inputBox = $(this).val();
                    let ratingPic3 = $('#selector').val();
                    changeMovies(editPic, inputBox, ratingPic3);
                });

                // change rating

                $('.changeRate').click(function (e) {
                    let typing = e.key;
                    let inputBox = $('#makeChange').val();
                    let ratingPic4 = $('#selector').val();
                    changeMovies(editPic, inputBox, ratingPic4);
                });
            })
        })
    // $('#delete-Movies').on(click, deleteMovies())


    //deleting movies

    function deleteMovies() {
        fetch('https://longing-flossy-bed.glitch.me/movies/', {
            method: 'DELETE'
        }).then(() => fetch('https://longing-flossy-bed.glitch.me/movies'))
            .then(res => res.json())
            .then(() => pageLoaded());
    }



    //editing movies

    function changeMovies(chngFilm, title, rating) {//id parameter added here
        let changedFilm = {
            id: chngFilm,//add in an 'id' property  [IF ID IS HERE DO NOT NEED IN URL]
            name: title,
            rate: rating
        };
        fetch('https://longing-flossy-bed.glitch.me/movies' + chngFilm, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changedFilm)
        })
            .then(() => fetch('https://longing-flossy-bed.glitch.me/movies'))
            .then(res => res.json())
            .then(() => pageLoaded());
    }

    //change ratings
    function changeRating(rate) {
        let html = '';
        if (rate === 1) {
            html += `<select id="selector" class="changeRate">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
            return html;
        } else if (rating == 2) {
            html += `<select id="selector" class="changeRate">
                    <option value="1">1</option>
                    <option selected value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
            return html;
        } else if (rating == 3) {
            html += `<select id="selector" class="changeRate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option selected value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
            return html;
        } else if (rating == 4) {
            html += `<select id="selector" class="changeRate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option selected value="4">4</option>
                    <option value="5">5</option>
                </select>`
            return html;
        } else if (rating == 5) {
            html += `<select id="selector" class="changeRate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option selected value="5">5</option>
                </select>`
            return html;
        }
    }
}
})();


// window.onload = function () {
//     alert('Please be patient while page is loading');
// }
// fetch('https://longing-flossy-bed.glitch.me/movies')
//     .then(response => response.json()).then(movies => {
//     movies.forEach(movie => {
//         console.log(movie);


// let listmovies = document.getElementById('listmovies');
// fetch("https://longing-flossy-bed.glitch.me/movies").then(resp => resp.json())
//     .then(data => {
//         let html = '';
//         for (var i = 0; i < data.length; i++)


// var loadingSign = document.getElementsByTagName('body')
// alert('Please be patient while the page loads...');
// console.log(loadingSign)



