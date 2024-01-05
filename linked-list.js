/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)

    if (this.head === null) this.head = newNode
    if (this.tail !== null) this.tail.next = newNode

    this.tail = newNode
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)

    if (this.head === null) {
      this.head = newNode
    }else {
      newNode.next = this.head
    }
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    let currNode = this.head.val
    let prevNode = null

    while( currNode.next) {
      prevNode = currNode
      currNode = currNode.next
    }

    if (prevNode === null) {
      this.head = null
    } else {
      prevNode.next = null
    }
    return currNode
  }

  /** shift(): return & remove first item. */

  shift() {
    let headVal = this.head.val

    this.head = this.head.next
    this.length -= 1

    if(this.length < 2) this.tail = this.head

    return headVal
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this.getIdx(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.getIdx(idx)
    currNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === 0) return this.unshift(val)
    if (idx === this.length) return this.push(val)

    let prev = this.getIdx(idx - 1)
    let newNode = new Node(val)

    newNode.next = prev.next
    prev.next = newNode

    this.length += 1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let prev = this.getIdx(idx - 1)
    let val = prev.next.val

    if(idx === 0) {
      return this.shift()
    }

    if(idx === this.length - 1) {
      return this.pop()
    }

    prev.next = prev.next.next
    this.length -= 1
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0

    let total = 0;
    let currNode = this.head

    while(currNode) {
      total += currNode.val
      currNode = currNode.next
    }
    return total/this.length
  }

  getIdx(idx) {
    let currNode = this.head
    let count = 0 

    while (currNode !== null && count != idx) {
      count += 1
      currNode = currNode.next
    }
    return currNode.val
  }
}

module.exports = LinkedList;
