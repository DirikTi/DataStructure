class Stack{
    constructor(){
        this.items = [];
    }
    
    push(x){
        this.items.push(x);
    }

    clear(){
        this.items = [];
    }

    pop(){

        if(this.items.length == 0){
            return - 1;
        }
        return this.items.pop();
        
    }

    peek(){
        if(this.items.length == 0){
            return -1;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    }

    printStack() 
    { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 
}