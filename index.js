const {
  convertToAnotherPosSystem,
} = require('./src');

console.log('first', convertToAnotherPosSystem('ff', 16, 10));

module.exports = {
  convertToAnotherPosSystem,
}