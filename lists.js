class LinkedList{
    constuctor(){
        this.head = null;
        this.tail = null;
        this.currentValue = null;
    }

    append(value){
        this.currentValue = new Node(value);

        if(this.head == null){
            this.head = this.currentValue;
            this.tail = this.currentValue;
        } 
        this.tail.next = this.currentValue;
        this.tail = this.currentValue;
    }

    prepend(value){
        this.currentValue = new Node(value);
        this.currentValue.next = this.head;
        this.head = this.currentValue;
    }

    size(){
        let currentValue = this.head;
        let size = 0;
        while(currentValue){
            size++;
            currentValue = currentValue.next;
        }
    return size;
    }

    firstNode(){
        return this.head;
    }

    lastNode(){
        return this.tail;
    }

    at(index){
        let currentValue = this.head;
        let count = index;
        let value = null;
        while(currentValue){
            if(count == 0){
                value = currentValue;
                currentValue = null;
                break;
            }
            count--;
            currentValue = currentValue.next;
        }
        return value;
    }

    pop() {
        let currentValue = this.head;
        let prev = null;
        while (currentValue) {
          if (currentValue.next == null) {
            this.tail = prev;
            this.tail.next = null;
            break;
          }
          prev = currentValue;
          currentValue = currentValue.next;
        }
      }
    
    contains(value) {
        let currentValue = this.head;
        let found = false;
        while (currentValue) {
            if (value == currentValue.value) {
            found = true;
            break;
            }
            currentValue = currentValue.next;
        }
        return found;
    }

    find(value) {
        let currentValue = this.head;
        let found = false;
        let index = 0;
        while (currentValue) {
            if (value == currentValue.value) {
            found = true;
            break;
            }
            currentValue = currentValue.next;
            index++;
        }
        return index;
    }

    toString() {
        let currentValue = this.head;
        if (currentValue == null) return null;
        let end = false;
        let response = "(" + currentValue.value + ") -> ";
        while (!end) {
            currentValue = currentValue.next;
            if (currentValue) {
            response += "(" + currentValue.value;
            response += ") -> ";
            } else response += "null";

            if (currentValue == null) {
            end = true;
            }
        }
        return response;
    }

    insertAt(value, index) {
        let currentValue = this.head;
        let prev = null;
        let valid = true;
        for (let i = 0; i <= index; i++) {
          prev = currentValue;
          currentValue = currentValue.next;
          if (currentValue == null) {
            console.log("Invalid Index");
            valid = false;
            break;
          }
        }
        if (valid) {
          let newNode = new node(value);
          prev.next = newNode;
          newNode.next = currentValue;
        }
    }
    
    removeAt(index) {
        let currentValue = this.head;
        let prev = this.head;
        let valid = true;
        for (let i = 0; i <= index; i++) {
          prev = currentValue;
          currentValue = currentValue.next;
          if (currentValue == null) {
            console.log("Invalid Index");
            valid = false;
            break;
          }
        }
        if (valid) {
          prev.next = currentValue.next;
        }
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());