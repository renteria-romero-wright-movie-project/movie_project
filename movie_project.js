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
fetch('https://longing-flossy-bed.glitch.me/movies')
    .then( response => response.json() ).then(movies => {
        movies.forEach(movie => {
            console.log(movie);
        })})

 /* review was created successfully */
