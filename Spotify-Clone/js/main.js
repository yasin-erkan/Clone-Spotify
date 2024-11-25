// Import the API class
import { API } from "./api.js";
// Import the UI class
import { UI } from "./ui.js";
// Create an instance of the UI class
const ui = new UI();
// Create an instance of the API class
const api = new API();

document.addEventListener("DOMContentLoaded", () => {
  // Render the loader
  ui.renderLoader();

  // Make a request to the API and render cards on the screen with the returned data
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log("Error:", err);
      alert("Sorry, an error occurred :(");
    });
});

// Listen for the form submission event
ui.form.addEventListener("submit", (e) => {
  // Prevent the page from refreshing when the form is submitted
  e.preventDefault();
  // Access the search parameter from the input
  const query = e.target[0].value;

  // Stop the function if there is no search term. This avoids wasting API calls.
  if (query.trim() === "") return alert("Please enter a valid search query.");

  // Render the loader
  ui.renderLoader();

  // Update the title
  ui.updateTitle(`Results for ${query}`);

  // Make a request to the API with the search term
  api
    .searchMusics(query)
    // Render cards on the screen with the returned song data
    .then((data) => ui.renderCards(data))
    // Catch any errors and display a warning
    .catch((err) => {
      alert("The operation could not be completed.");
      console.log(err);
    });
});

// Listen for click events on the list area
ui.list.addEventListener("click", (e) => {
  // If an element with the class "play" is clicked, perform the song play function
  if (e.target.className == "play") {
    // Access the scope of the clicked element
    const card = e.target.closest(".card");

    const data = card.dataset;

    console.log(data);

    ui.renderPlayer(data);

    console.log(ui);
  }
});
