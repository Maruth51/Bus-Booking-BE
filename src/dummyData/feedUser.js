const faker = require("faker");
const db = require("./config/DbConnect");
const User = require("./models/user");
const Cred = require("./models/credantial");
const Encrypt = require("./services/hash");
function seed_user() {
  let user = {
    first_name: faker.name.firstName(),
    DOB: faker.date.past(20, "01/01/2000"),
    last_name: faker.name.lastName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode()
    }
  };
  user.email = faker.internet.email(user.first_name);
  let newUser = new User(user);
  newUser
    .save()
    .then(doc => {
      let obj = {
        user_id: doc._id,
        password: faker.internet.password(8)
      };
      const credential = new Cred(obj);
      credential
        .save()
        .then(doc => {
          console.log(doc);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
}

let i = 0;
while (i < 5) {
  seed_user();
  i++;
}
