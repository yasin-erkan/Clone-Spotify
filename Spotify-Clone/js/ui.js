export class UI {
  // Constructor method
  constructor() {
    this.list = document.querySelector(".list");
    this.form = document.querySelector("form");
    this.title = document.getElementById("title");
    this.player = document.querySelector(".player");
  }

  // Function to render music cards on the screen
  renderCards(songs) {
    // Clear the HTML in the list section before rendering
    this.list.innerHTML = "";

    // Create HTML for each music data
    songs.forEach((song) => {
      // Create a card
      const card = document.createElement("div");
      // Set the card's class
      card.className = "card";

      // Assign song data to the card element
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Set the content of the card
      card.innerHTML = `
             <figure>
                <img
                  src="${song.images.coverarthq} "
                  alt=""
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure> 
              <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${song.subtitle}</h4>
              </div>
      `;
      // Add the card to the HTML
      this.list.appendChild(card);
    });
  }

  // Function to render the loader on the screen
  renderLoader() {
    this.list.innerHTML = `
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
</div>
              `;
  }

  // Function to update the title section after a search operation
  updateTitle(text) {
    this.title.textContent = text;
  }

  // Function to truncate text if it exceeds a certain length
  sliceText(text) {
    if (text.length > 16) {
      return text.slice(0, 16) + "...";
    }
    return text;
  }

  // Function to update the player area
  renderPlayer(song) {
    console.log(song);

    this.player.innerHTML = `
      <div class="info">
        <img
          src="${song.img}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>
 
      <audio autoplay
        src="${song.mp3}"
        controls
      ></audio>
      <!-- Icons -->
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox-fill"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    `;
    const audio = this.player.querySelector("audio");
    // Check the play-pause state of the audio element
    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }

  // Function to dynamically add/remove image animation
  toggleAnimation() {
    const image = document.querySelector(".info img");
    image.classList.toggle("animate");
  }
}
