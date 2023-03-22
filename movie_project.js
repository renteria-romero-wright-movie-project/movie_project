$(function () {
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
            .then( response => response.json() )
            .then(data => {
                let html = '';
                for(i = 0; i < data.length, i++){
                    html += `<div>`
                    html += `<h2>${data[i].title}</h2>`
                    html += `<h6>'Rating: ' + $[data[i].rating}</h6>`
                }
            }
        movies.forEach(movie => {
            console.log(movie);
        })})



})

 /* review was created successfully */

//Notes --

// $.get('https://longing-flossy-bed.glitch.me/');
// const reviewObj = {
//     restaurant_id: 1,
//     name: 'Codey',
//     rating: 5,
//     comments: "This is a really good place for coding and eating"
// };
// const url = 'https://longing-flossy-bed.glitch.me/';
// const options = {
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reviewObj),
// };