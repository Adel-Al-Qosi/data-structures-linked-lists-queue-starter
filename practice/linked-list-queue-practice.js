// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // O(n):
        if (!this.head) return 0;

        let curr = this.head
        let length = 0
        while (curr) {
            curr = curr.next
            length++
        }

        return length

        // O(1) Needs to add to the main code a (this.length)
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let curr = this.head
        let sum = 0
        while (curr) {
            sum += curr.value
            curr = curr.next
        }

        return sum
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let sum = this.sumOfNodes()
        let numOfNodes = this.listLength()
        return sum / numOfNodes
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head
        let index = 0
        while (curr && index < n) {
            curr = curr.next
            index++
        }

        return curr
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        if (this.listLength() % 2 === 1) {
            let index = parseInt(this.listLength() / 2) 
            return this.findNthNode(index)
        } else {
            let index = this.listLength() / 2 - 1 
            return this.findNthNode(index)
        }

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let newList = new SinglyLinkedList()
        let numOfNodes = this.listLength()
        let indexOfNewList = 0
        let index = this.listLength() - 1

        while (indexOfNewList < numOfNodes) {
            let tail = this.findNthNode(index)
            newList.addToTail(tail.value)

            index--
            indexOfNewList++
        }
        
        return newList
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let reversed = this.reverse()
        this.head = reversed.head
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?        

        if (this.length % 2 === 0) {
            let index = (this.length / 2) - 1
            let cur = this.head
            while (index > 0) {
                cur = cur.next

                index--;
            }

            return cur
        } else {
            let index = parseInt(this.length / 2)
            let cur = this.head
            while (index > 0) {
                cur = cur.next

                index--;
            }

            return cur
        }
        // Write your hypothesis on the time complexity of this method here
    }

    length = 0

    reverse() {
        // Returns a new reversed version of the linked list
        let newList = new DoublyLinkedList()
        let index = this.length
        let curr = this.tail

        while (curr) {
            newList.addToTail(curr.value)
            curr = curr.prev
            
            index--
        }

        return newList
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        this.head = this.reverse().head
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
