var Grocery = /** @class */ (function () {
    function Grocery(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Grocery;
}());
function grocery(grocery) {
    return "Name: " + grocery.name + " Amount:" + grocery.amount;
}
var grocery1 = new Grocery("Bannana", 10);
document.body.textContent = grocery(grocery1);
