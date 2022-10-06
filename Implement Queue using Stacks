function Node(val,next){
        this.val = val;
        this.next = next;
}

class stack {
    constructor(head,size){
        this.head = head;
        this.size = size;
    }
    push(item){
        let node =new Node(item);
        node.next = this.head;
        this.head = node;
        this.size++;
    }
    pop(){
        if(this.head){
            let poppedItem = this.head.val;
            this.head = this.head.next;
            this.size--;
            return poppedItem;
        }
    }
    isEmpty(){
       return this.size===0? true: false;
    }
    
    peek(){
        return this.head.val;
    }
}
var MyQueue = function() {
        this.stack1= new stack(null,0);
        this.stack2= new stack(null,0);
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while(!this.stack2.isEmpty()){
        let ele = this.stack2.pop();
        this.stack1.push(ele);
    }
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stack1.size===0){
        return this.stack2.pop();
    }
     while(this.stack1.size>1){
        let ele = this.stack1.pop();
        this.stack2.push(ele);
    }
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
     while(!this.stack1.isEmpty()){
        let ele = this.stack1.pop();
        this.stack2.push(ele);
    }
    
    return this.stack2.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.isEmpty() && this.stack2.isEmpty() ? true:false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
