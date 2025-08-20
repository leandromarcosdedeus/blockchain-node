const Block = require('./block.js');

const block = new Block('2023-10-01', '0000', '1234567890abcdef', 'Test Data');
console.log(block.toString());