import { Block } from "./block.js";
import { BlockChain } from "./block-chain.js";
import { GENESIS_HASH } from "./const.js";
import { Miner } from "./miner.js";

function main(){
  const blockChain = new BlockChain();
  const miner = new Miner();
  const block1 = new Block(0, '', GENESIS_HASH);

  blockChain.list.addAtTail(block1)
  miner.mine(block1, blockChain);
  
  const block2 = new Block(1, 'tx1', blockChain.list.tail.value.hash);
  miner.mine(block2, blockChain);

  console.dir(blockChain, { depth: null });
}

main();