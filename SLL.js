"use strict";

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SLL {

    constructor(){
        this.head = null;
    }

    add(val){
        if (!this.head) {
            this.head = new Node(val);
        }else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(val);
        }
        return this;
    }

    print(){
        var current = this.head;
        if (!current) {
            return this;
        }
        var values = [];
        while (current) {
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
        while (current) {
            if (!current.next) {
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
        if (!this.head.next) {
            return this;
        }
        var c = this.head.next;
        var b = this.head
        var a = null;
        // if (!c.next) {
        //     b.next = null;
        //     c.next = b;
        //     this.head = c;
        //     return this;
        // }
        b.next = null;
        while (b) {
            a = b;
            b = c;
            if (b == null) {
                break;
            }
            c = c.next;
            b.next = a;
        }
        this.head = a;
        return this;
    }

    //detects if there is a loop in the node
    hasLoop(){
        if (!this.head) {
            console.log("empty list");
            return false;
        }

        var runner = this.head,
            walker = this.head,
            anchor = this.head,
            flag   = false;
        while (runner) {
            if (!runner.next || runner.next.next == undefined) {
                console.log("false");
                return false;
            }
            runner = runner.next.next;
            walker = walker.next;
            if (runner == walker) {
                if(flag){
                    anchor = anchor.next;
                }
                flag = true;
            }
            if (anchor == walker) {
                console.log("loopBegins = ", anchor.val);
                return true;
            }
            // console.log("walker: ", walker.val);
            // console.log("runner: ", runner.val);
            // console.log("anchor: ", anchor.val);
            // console.log("********************");
        }
        console.log("false");
        return false;
    }

    //create a circular SLL where nodesBehind is the number of nodes from the end
    //where the next from the last node will be assigned.
    createLoop(nodesBehind){
        if (!this.head || !this.head.next) {
            console.log("cannot create loop with empty list or list with one node");
            return;
        }
        var current = this.head,
            length = 1;
        while (current.next) {
            current = current.next;
            length++;
        }
        if (nodesBehind > length - 1) {
            console.log("please choose a number less than", length - 1);
            return;
        }else{
            var loopedNode = this.head;
            for(var i = 1; i < length - nodesBehind; i++){
                loopedNode = loopedNode.next;

            }
            console.log("**************************************************");
            console.log("loopBegins: ", loopedNode.val);
            console.log("Last Node:  ", current.val);
            console.log("**************************************************");
            current.next = loopedNode;
            return this;
        }
    }

    brokenMerge(SLL) {
        var lowest,
            p1 = this.head,
            p2 = SLL.head;

        //p2 < p1 ? this.head = p2 : this.head = p1;

        while (p1 != null || p2 != null) { //can't figure out how to make this work
            if (p1.val < p2.val) {
                console.log(p1.val);
                lowest = p1;
                p1 = p1.next;
                if (p1 != null) {
                    if (p2.val > lowest.val && p2.val < p1.val) {
                        lowest.next = p2;
                    }
                }
            } else if (p2.val < p1.val) {
                lowest = p2;
                p2 = p2.next;
                if (p1.val > lowest.val && p1.val < p2.val){
                    lowest.next = p1;
                }
            } else {
                lowest = p1;
                p1 = p1.next;
                lowest.next = p2;
                lowest = p2;
                p2 = p2.next;
            }
            if ( p1 == null || p2 == null) { //so i have this...
                break;
            }
        }
        this.print();
    }

    merge(SLL){
        var jumper,
            pointer1,
            pointer2;

        if (this.head.val < SLL.head.val) {
            pointer1 = this.head;
            pointer2 = SLL.head;
        } else {
            pointer1 = SLL.head;
            pointer2 = this.head;
        }

        while (pointer1.next != null && pointer2 != null) {
            if (pointer1.next.val <= pointer2.val) {
                pointer1 = pointer1.next;
            } else {
                jumper = pointer1.next;
                pointer1.next = pointer2;
                pointer2 = jumper;
            }
        }
        if (pointer1.next == null) {
            pointer1.next = pointer2
        }
        this.print();
    }
}

var mySLL = new SLL();
var newSLL = new SLL();

mySLL.add(1).add(3).add(12);

newSLL.add(2).add(4).add(9);

mySLL.newMerge(newSLL)
