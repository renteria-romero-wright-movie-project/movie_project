// $.get('https://longing-flossy-bed?path=README.md%3A1%3A0.glitch.me/movies');
// onDOMContentLoaded
=======
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
    window.onload= function(){
    alert('Please be patient while page is loading');
    }
fetch('https://longing-flossy-bed.glitch.me/movies')
    .then( response => response.json() ).then(movies => {
        movies.forEach(movie => {
            console.log(movie);
        })})

let addRating = document.getElementById('movie')
let addtitle = document.getElementById('submit-title');
let submit = document.querySelector('#submit-button');
let movieFilter = document.querySelector("#listmovies");
getList();

function getList() {

}

let listmovies = document.getElementById('listmovies');
fetch("https://longing-flossy-bed.glitch.me/movies").then(resp => resp.json())
    .then(data => {
        let html = '';
        for (i = 0; i < data.length; i++) {

        }
    })

var loadingSign = document.getElementsByTagName('body')
alert('Please be patient while the page loads...');
console.log(loadingSign)
