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
    //detects if there is a loop in the node
    hasLoop(){
        if(!this.head){
            console.log("empty list");
            return false;
        }

        var runner = this.head,
            walker = this.head,
            anchor = this.head,
            flag   = false;
        while(runner){
            if(!runner.next || runner.next.next == undefined){
                console.log("false");
                return false;
            }
            runner = runner.next.next;
            walker = walker.next;
            if(runner == walker){
                if(flag){
                    anchor = anchor.next;
                }
                flag = true;
            }
            if(anchor == walker){
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
        if(!this.head || !this.head.next){
            console.log("cannot create loop with empty list or list with one node");
            return;
        }
        var current = this.head,
            length = 1;
        while(current.next){
            current = current.next;
            length++;
        }
        if(nodesBehind > length - 1){
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
}

var mySLL = new SLL();
mySLL.add(1).add(2).add(3).add(4).add(5);
mySLL.print();
mySLL.createLoop(2);
mySLL.hasLoop();
