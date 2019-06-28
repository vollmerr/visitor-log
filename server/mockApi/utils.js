const faker = require('faker'); // eslint-disable-line

const getArrayOf = func => (
  Array.from({ length: faker.random.number(15) })
    .map(() => func())
);

module.exports = {
  getArrayOf,
};
