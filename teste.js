const Block = require('./block.js');

const block = new Block('2023-10-01', '0000', '1234567890abcdef', 'Test Data');
console.log(block.toString());
console.log(Block.genesis().toString());

const firstBlock = Block.mineBlock(Block.genesis(), 'First Block Data');
console.log(firstBlock.toString());