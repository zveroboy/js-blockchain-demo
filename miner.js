import { DIFFICULTY, REWARD } from "./const.js"

export class Miner {
  /** @public */
  reward = 0
  /** 
   * @param { Block } block 
   * @param { BlockChain } blockChain 
   */
  mine(block, blockChain){
    while(!this.isGoldenHash(block)){
      block.incrementNonce();
      block.generateHash();
    }
    console.log('block is mined', block);
    blockChain.addBlock(block);
    this.reward += REWARD; 
  }

  /** @param { Block } block */
  isGoldenHash(block){
    const leadingZeros = '0'.repeat(DIFFICULTY);
    return block.hash.slice(0, 2) === leadingZeros;
  }
}