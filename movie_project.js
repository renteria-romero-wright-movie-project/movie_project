$(function () {
    "use strict";
    let loadMessage = $('#page-load').toggleClass('hidden')
    let addRating = document.getElementById("rate-movie")
    let addTitle = document.getElementById('submit-title');
    let submitButton = document.querySelector('#movie-choice');
    let filterMovie = document.querySelector("#movielist");
// Call Function getList to display movie list
    getList();

    fetch('https://longing-flossy-bed.glitch.me/movies')
        .then( response => response.json() ).then(movies => {
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