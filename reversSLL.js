"use strict";

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    add(val){
        //var newNode = new Node(val) -- since new Node is returned in both cases might look a bit better to initialize it outside of if block
        if(!this.head){
            this.head = new Node(val);
            return this;
        }
        var current = this.head;
        while(current){ // maybe add current.next condition right here so that while loop breaks once you're at a node without a .next. at that point you can set next to new Node
            if(!current.next){
                current.next = new Node(val);
                return this;
            }else{
                current = current.next;
            }
        }
        /*
         * rewritten (allows you to evaluate a single boolean instead of 2): 
         * while (current.next) {
         *  current = current.next;
         * }
         * current.next = new Node(val);
         */
        return this; //nice touch!
    }
    print(){
        var current = this.head;
        if (!current)
        {
            return this;
        }

        var values = [];
        while(current){
            values.push(current.val);
            current = current.next;
        }
        console.log(values.join(' ==> ')); //was wondering how you generated such beautiful single-line output
    }
    //first attempt
    reverseList(){
        var current = this.head;
        var prev = null;
        var pointer = null;
        var flag = true;
        while(current){
            if(!current.next){
                current.next = prev;
                prev.next = null;
                if(flag){
                    pointer = current;
                    flag = false;
                }
                current = this.head;
                prev = null;
            }
            prev = current;
            current = current.next;
        }
        this.head = pointer;
        return this;
    }
    //revised second attempt
    newReverse(){
        if(!this.head.next){ //don't forget to tackle the this.head = null case ie when linkedlist is empty;
            return this;
        }
        var c = this.head.next;
        var b = this.head
        var a = null;
        if(!c.next){ 
            b.next = null;
            c.next = b;
            this.head = c;
            return this;
        }
        b.next = null;
        while(b){
            a = b;
            b = c;
            if(b == null){
                break;
            }
            c = c.next;
            b.next = a;
        }
        this.head = a;
        return this;
    }
}

var mySLL = new SLL();
mySLL.add(1).add(2).add(3).add(4);
mySLL.print();
//mySLL.reverseList();
mySLL.newReverse();
mySLL.print();
