const db = require("./config/DbConnect");

const Bus = require("./models/busInfo");
let i = 0;
while (i < 10) {
  feed();
  i = i + 1;
}
function feed() {
  console.log("feed");
  let name = [
    "KPN Travels",
    "Happy Travels",
    "National Tours And Travels Chennai",
    "YBM Travels",
    "TNSTC",
    "Tranz king travels",
    "SRL Travels",
    "Parveen Travels",
    "Orange tours and travels"
  ];
  let busType = [
    "A/C Sleeper",
    "NON A/C Seater",
    "NON A/C Sleeper",
    "NON A/C Semi Sleeper",
    "Volvo Multi-Axle A/C Semi Sleeper",
    "NON A/C Seater",
    "NON A/C Seater Push Back",
    "NON A/C Seater"
  ];

  const bus = {
    name: name[Math.floor(Math.random() * name.length)],
    type: busType[Math.floor(Math.random() * busType.length)],
    time: randomDate(Date.now(), Date.now(), 1, 23),
    fare: Math.floor(400 + Math.random() * (1200 - 400)),
    rating: Math.floor(2 + Math.random() * (5 - 2))
  };
  Bus.create(bus)
    .then(data => {
      console.log(data);
    })
    .catch(e => console.log(e));
}

function randomDate(first, last, startHour, endHour) {
  var date = new Date(+first + Math.random() * (last - first));
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  let start = date;
  date.setHours(date.getHours() + 5);
  let end = date;
  return { start, end };
}
