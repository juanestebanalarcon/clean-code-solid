class product{
    constructor(public name:string=""){

    }
    toString(){
        if(this.name.length<=0) throw Error("Name is empty");
        
        return `${this.name}`;
    }
}
(
    ()=>{
        const bluePants = new product("blue-larg");
    }
)();