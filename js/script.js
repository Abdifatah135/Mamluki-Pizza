function order(crust, topping, size, totalCost){
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.number = number;
    this.totalCost = totalCost;
}
Order.prototype.fullOrder = function(){
    return this.crust + " " + this.topping + " " + " " + this.size + " " + this.number + " " + this.totalCost;
}
document.getElementById("deli").addEventListener("click", function () {
  prompt("enter where you are located");
  alert("Your order will be delivered to your location for only 150ksh; Thank you!");
 });
$(document).ready(function() {
  $("form#ordering").submit(function(event) {
    event.preventDefault();

    });
$(".btn").click(function() {
var crusts = $("select#crust").val();
var toppings = $("select#topping").val();
var sizes = $("select#size").val();
var numbers =$("input#nbr").val();


var cost, totalCost;
     switch (sizes) {
       case sizes = "large" :
           cost = 1000;
       if (crusts === "crispy") {
           totalCost = cost + 150;
       }
      else if (crusts === "stuffed") {
         totalCost = cost + 200 ;
       }
       else if (crusts === "gluten-free") {
         totalCost = cost + 250;
       }
       break;
       case sizes ="medium" :
       cost = 800;
       if (crusts === "crispy"){
         totalCost = cost + 150;
       }