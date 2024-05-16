// Get a Joke Project

// retrieve the HTML element with the id "joke" and store it in a variable named jokeContainer; ✅
// retrieve the HTML element with the id "btn" and store it in a variable named btn; ✅
const jokeContainer = document.getElementById("joke");
const btn = document.querySelector(".btn");

// Define a variable named url and assign it the URL of the joke API endpoint; ✅
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Define a function named getJoke; ✅
let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
};

btn.addEventListener("click", getJoke);

// Use the fetch function to make a GET request to the specified URL; ✅
// Chain a .then() method to the fetch request to handle the response data; ✅
// Inside the first .then() block, parse the response data as JSON; ✅
// Chain another .then() block to handle the parsed JSON data; ✅
// Inside the second .then() block, update the jokeContainer element with the joke retrieved from the JSON data; ✅
// Add a .catch() block to handle any errors that may occur during the fetch request and log the error to the console; ✅

// Add an event listener to the button (btn) that triggers the getJoke function when clicked; ✅
