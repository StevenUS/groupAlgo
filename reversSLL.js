/**
 * General notes
 * 1. Try adding a single line between functions. It adds separation making reading code easier
 * 2. Standard convention has a space before "{", so
 *     class Node{... => class Node {...
 *    This is strictly personal preference though
 * 3. JSHint (http://jshint.com/) is your friend
 * 4. IIFE?????????
 */
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

    // You "return this" three times. Try to avoid returning multiple times in a function, but this is not a solid rule
    add(val){
        if(!this.head){
            this.head = new Node(val);
            return this;
        }
        var current = this.head;

        // consider standard spacing practices for loop blocks
     // while (current) {...
        while(current){
         // if (!current.next) {...
            if(!current.next){
                current.next = new Node(val);
                return this;
         // } else {...
            }else{
                current = current.next;
            }
        }
        return this;
    }
    print(){
        var current = this.head;

        // why did you change if block spacing here? Consistency is key
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
        if(!this.head.next){ // what happens if (this.head) === null?
            return this;
        }

        // what are these variable names???
        // try to be more descriptive for exercises like this
        // this is really hard to follow because variable names are so basic lol
        var c = this.head.next;
        var b = this.head
        var a = null;

        // do you need this if block?
        ////////////////////
        if(!c.next){
            b.next = null;
            c.next = b;
            this.head = c;
            return this;
        }
        ////////////////////

        b.next = null;
        while(b){
            a = b;
            b = c;
            if(b == null){ // Consider using if (!b) {...
                break;     // Actually, could you change your while loop to check for this condition instead? What is 'b' being set to inside the while loop?
            }              // If you need the while loop to always run atleast once, consider a do-while loop
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
