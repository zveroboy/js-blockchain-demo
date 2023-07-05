import { hash } from "./hash.js";

export class Block {
  nonce = 0;
  /**
   * 
   * @param {number} id 
   * @param {string} transaction
   * @param {string} previousHash
   */
  constructor(id, transaction, previousHash){
    /** @public number */
    this.id = id;
    /** @public string */
    this.transaction = transaction;
    /** @public string */
    this.previousHash = previousHash;
    /** @public number */
    this.timeStamp = Date.now();
    this.generateHash();
  }

  incrementNonce(){
    this.nonce++;
  }

  generateHash(){
    const data = this.id.toString() + this.previousHash + this.timeStamp.toString() + this.nonce.toString() + this.transaction;
    /** @public string */
    this.hash = hash(data);
  }
}