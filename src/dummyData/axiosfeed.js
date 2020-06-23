const db = require("./config/DbConnect");
const City = require("./models/city");

const axios = require("axios");

function seed() {
  console.log("Entered");
  axios
    .get(
      "https://indian-cities-api-nocbegfhqg.now.sh/cities/?State=Tamil%20Nadu"
    )
    .then(function(response) {
      City.insertMany(response.data)
        .then(res => {
          console.log("succcess");
        })
        .catch(err => console.log(err));
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
}

seed();
