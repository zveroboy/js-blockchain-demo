class Node {
  /** @public Node | null */
  next = null;
  /** 
   * @param {Block} value
   */
  constructor(value){
    /** @public Block */
    this.value = value; 
  }

  // /** @param { Node } newNext */
  // addNext(newNext) {
  //   const currentNext = this.next;
  //   newNext.next = currentNext
  //   this.next = newNext;
  // }
}

class LinkedList {
  head = null;
  tail = null;

  addAtHead(block) {
    const newHead = new Node(block);
    newHead.next = this.head;
    this.head = newHead
    if(!this.tail){
      this.tail = newHead
    }
  }

  addAtTail(block){
    const newTail = new Node(block);
    if (this.tail) {
      this.tail.next = newTail;
    } else {
      this.head = newTail;
    }
    this.tail = newTail;
  }
}

export class BlockChain {
  /** @public LinkedNode */
  list = new LinkedList();

  /**
   * @param { Block } block
   */
  addBlock(block){
    this.list.addAtTail(block);
  }
}