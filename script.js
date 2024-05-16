// Get a Joke Project

// retrieve the HTML element with the id "joke" and store it in a variable named jokeContainer; ✅
// retrieve the HTML element with the id "btn" and store it in a variable named btn; ✅
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

// Define a variable named url and assign it the URL of the joke API endpoint; ✅
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Define a function named getJoke; ✅
let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => console.log(item.joke));
};
getJoke();
