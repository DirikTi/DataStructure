class Set {

    constructor(){
        this.ARRAY_SET = [];
    }

    add(object){
        if(this.ARRAY_SET.length === 0){
            
            this.ARRAY_SET.push(object);
        }else{
            
            let FILTER = this.ARRAY_SET;
            this.ARRAY_SET = FILTER.filter(x => x != object);
            this.ARRAY_SET.push(object);
            
        }
    }

    clear(){
        if(this.ARRAY_SET.length != 0){
            this.ARRAY_SET = [];
        }
    }

    remove(object){
        if(this.ARRAY_SET.length != 0)
            this.ARRAY_SET = this.ARRAY_SET.filter(x => x == object);
    }

    contains(object){
        if(this.ARRAY_SET.length != 0){
            return this.ARRAY_SET.find(x => x == object) != undefined ? true : false 
        }
    }

    size(){
        return this.ARRAY_SET.length;
    }
}