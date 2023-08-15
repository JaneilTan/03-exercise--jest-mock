const faker = require("faker");

/**
 * Make a car go vroom, randomly.
 * The `car` param is a car object { make: "Car make", model: "Car model" }
 * The function returns a string
 */
const goVroom = (car) => {
  let o = "o";
  const count = faker.datatype.number({ min: 2, max: 10 });
  for (let i = 0; i < count; i++) {
    o += "o";
  }

  const { make, model } = car;
  const vroom = `The ${make} ${model} goes vr${o}m!!`;

  return vroom;
};

module.exports = {
  goVroom,
};
