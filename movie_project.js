
( () => {
    "use strict";

    let loadMessage = $('#page-loading').toggleClass('hidden');
    let addRating = document.getElementById('add-rate');
    let addTitle = document.getElementById('add-title');
    let submitBtn = document.querySelector('#movie-choice');
    let filterMovie = document.querySelector('#movie-cards');

// Page loading img/message
    pageLoaded();

    //DOM manip

    function pageLoaded() {
        $('#page-loading').toggleClass('hidden')
        let movies = document.getElementById('movie-cards');
        fetch('https://longing-flossy-bed.glitch.me/movies')
            .then(response => response.json())
            .then(movie => {
                let html = '';
                for (let i = 0; i < movie.length; i++) {
                    html += `<div>`
                    html += `<h2>${movie[i].title}</h2>`
                    html += `<h6>'Rating: ' + $[movie[i].rating}</h6>`
                    html += `<button name="Save" id="save-Movies" type="submit" value="${movie[i].id}">Save</button>`
                    html += `<button name="Edit" id="edit-Movies" type="submit" value="${movie[i].id}">Edit</button>`
                    html +=`<button name="Delete" id="delete-Movies" type="submit" value="${movie[i].id}">Delete</button>`
                    html += `</div>`
                }
                pageLoaded.innerHTML = html;

                $('#delete-Movies').click(function () {
                    deleteMovie($(this).val());
            })
                // May need extra toggle class line-43
                $('#edit-Movies').click(function () {
                    let editPic = ($(this).val());
                    let titlePic1 = $(this).parent().children('h2').first().html()
                    let ratingPic1 = $(this).parent().children('h6').first().html()
                    $(this).parent().children('#save-Movies').toggleClass('hidden')

                    $(this).parent().children('h2').first().html(`<input type='text' value='${title}' id="makeChange">`);
                    $(this).parent().children('h6').first().html(changeRating(rating));

                    $('#save-Movies').click(function () {
                      let titlePic2 = $('#makeChange').val();
                      let ratingPic2 = $("#selector").val();
                      changeMovie(editPic, titlePic2, ratingPic2);
                    });
                }



        // window.onload = function () {
        //     alert('Please be patient while page is loading');
        // }
        fetch('https://longing-flossy-bed.glitch.me/movies')
            .then(response => response.json()).then(movies => {
            movies.forEach(movie => {
                console.log(movie);
            })
        })



        let listmovies = document.getElementById('listmovies');
        fetch("https://longing-flossy-bed.glitch.me/movies").then(resp => resp.json())
            .then(data => {
                let html = '';
                for (var i = 0; i < data.length; i++) {

                }
            })

        // var loadingSign = document.getElementsByTagName('body')
        // alert('Please be patient while the page loads...');
        // console.log(loadingSign)
    }
 })();

