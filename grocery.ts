class Grocery {
    name: string;
    amount: number;
    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}

function grocery(grocery: Grocery){
    return "Name: " + grocery.name + " Amount:" + grocery.amount 
}

var grocery1 = new Grocery("Bannana", 10);


document.body.textContent = grocery(grocery1)
