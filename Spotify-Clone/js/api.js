// API URL
const url = "https://shazam.p.rapidapi.com/search?term=adele&locale=en-US";
// Headers ==> Necessary object for the API to recognize us and deliver the data
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

// API Class
export class API {
  // Function to fetch popular music from the API
  async getPopular() {
    // Fetch data from the API
    // const res = await fetch(url, options);
    // Convert the data into a JavaScript object
    // const data = await res.json();
    // Organize the nested structure and access the song data
    // const formatted = data.tracks.hits.map((item) => item.track);

    // return formatted;

    const data = await this.searchMusics("neffex");
    const data1 = await this.searchMusics("eminem");

    return [...data, ...data1];
  }

  // Function to fetch song data based on the searched keyword
  async searchMusics(query) {
    // Make the URL dynamic
    const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=en-US`;
    // Make a request to the API
    const res = await fetch(url, options);
    // Convert the response into a JavaScript object
    const data = await res.json();
    // Organize the nested structure and access the song data
    const formatted = data.tracks.hits.map((item) => item.track);

    return formatted;
  }
}
