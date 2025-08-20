const BlockChain = require('./blockchain.js');

describe('BlockChain', () => {
    let bc;

    beforeEach(() => {
        bc = new BlockChain();
    })  

    it('starts with the genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });
    
})