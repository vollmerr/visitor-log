const faker = require('faker'); // eslint-disable-line

const { getArrayOf } = require('../utils');

const getRoom = () => ({
  id: faker.random.uuid(),
  name: faker.address.country(),
  isActive: faker.random.boolean(),
});

const getAccessArea = () => ({
  id: faker.random.uuid(),
  name: faker.address.city(),
  isActive: faker.random.boolean(),
});

const getCampus = () => ({
  id: faker.random.uuid(),
  name: faker.address.state(),
  isActive: faker.random.boolean(),
  rooms: getArrayOf(getRoom),
  accessAreas: getArrayOf(getAccessArea),
});

module.exports = getArrayOf(getCampus);
