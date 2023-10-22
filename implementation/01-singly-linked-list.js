// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let node = new SinglyLinkedNode(val)

        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }

        this.length++

        return this

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n)

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length++

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined
        let removedNode = this.head
        this.head = this.head.next
        this.length--
        return removedNode
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined
        
        if (!this.head.next) {
            const removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        }

        let tail = this.head
        let prev = null
        
        while (tail.next) {
            prev = tail
            tail = tail.next
        }

        let removedNode = tail

        prev.next = null

        this.length--

        return removedNode
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined
        return this.head.value
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list
        if (!this.head) return
        let newNode = this.head
        while (newNode) {
            console.log(newNode.value)
            newNode = newNode.next
        }
        console.log('NULL')
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
