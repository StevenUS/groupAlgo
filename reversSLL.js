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
        if(!this.head){
            this.head = new Node(val);
            return this;
        }
        var current = this.head;
        while(current){
            if(!current.next){
                current.next = new Node(val);
                return this;
            }else{
                current = current.next;
            }
        }
        return this;
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
        console.log(values.join(' ==> '));
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
        if(!this.head.next){
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
