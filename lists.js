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
        this.tail = this.current;
    }

    prepend(value){
        this.currentValue = new Node(value);
        this.current.next = this.head;
        this.head = this.current;
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

console.log(list);