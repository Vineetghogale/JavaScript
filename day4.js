//Q.1
let price = 499;
let quantity = 3;
console.log(`Total Price : ${price*quantity}`);

//Q.2
let price1 = 99.999;
console.log(price1.toFixed(2));

//Q.3
console.log(Math.round(4.6));
console.log(`Answer will be 5`);
console.log(Math.round(4.3));
console.log(`Answer will be 4`);

//Q.4
console.log(Math.floor(4.9));
console.log(`Answer will be 4 because the Floor function always takes the lowest round - Goes down`);
console.log(Math.ceil(4.1));
console.log(`Answer will be 5 because the Ceil function always takes the highest round - Goes up`);

//Q.5
let a = 25;
let b = 10;
let c = 50;

console.log(Math.min(a,b,c));
console.log(Math.max(a,b,c));

//Real-World Challenge
let itemPrice = 499;
let quantity1 = 3;
let discount = 10;
let subTotal = itemPrice*quantity1;
let discountAmount = (subTotal*discount)/100;
let finalPrice = subTotal-discountAmount;

console.log(`Item Price : Rs.${itemPrice}`);
console.log(`Quantity : ${quantity1}`);
console.log(`SubTotal : Rs.${subTotal}`);
console.log(`Discount : ${discount}%`);
console.log(`Discount Amount : ${discountAmount.toFixed(2)}`);
console.log(`Final Price : ${finalPrice.toFixed(2)}`);


//Bonus Challenge
let min = 1;
let max = 100;
console.log(Math.floor(Math.random() * (max-min+1) + min));
 




