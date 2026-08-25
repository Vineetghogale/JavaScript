//Q.1 
let a = 20;
let b = 10;

//Addition
console.log(`Addition is : ${a+b}`);

//Subraction
console.log(`Subtraction is : ${a-b}`);

//Multiplication
console.log(`Multiplication is : ${a*b}`);

//Division
console.log(`Division is : ${a/b}`);

//Modulus
console.log(`Modulus is : ${a%b}`);

//Q.2 
//Square of a Number
let num = 5;
console.log(`Square of ${num} is ${num**2}`);

//Q.3
let num1 = 50;
let num2 = 7;
console.log(`Modulus is ${num1%num2}`);

//Q.4
//Using assignment operators
let marks1 = 80;
marks1 += 10
console.log(marks1);

let marks2 = 80;
marks2 -= 10
console.log(marks2);

let marks3 = 80;
marks3 *= 10
console.log(marks3);

let marks4 = 80;
marks4 /= 10
console.log(marks4);

//Q.5
console.log(10 == "10");
console.log(`The Answer will be True because it only checks equality of the values`);

console.log(10 === "10");
console.log(`The Answer will be false because it also checks the data type`);

//Q.6
console.log(10 > 5);
console.log(`true`);
console.log(10 < 5);
console.log(`false`);
console.log(10 >= 10);
console.log(`true`);
console.log(5 <= 4);
console.log(`false`);

//Q.7
let age1 = 22;
console.log(age1 > 18 && age1 < 60);
console.log(`true`);

let age2 = 12;
console.log(age2 > 18 && age2 < 60);
console.log(`false`);

//Q.8
let isStudent1 = true;
console.log(!isStudent1);
console.log(`Answer will be false`);

let isStudent2 = false;
console.log(!isStudent2);
console.log(`Answer will be true`);

//Q.9
let num3 = "25";
console.log(Number(num3));
console.log(typeof Number(num3));
console.log(`Answer will be Number`);

//Q.10
console.log(String(100));
console.log(typeof String(100)); 
console.log(`Answer Will be String`);



console.log("5" + 2);
//answer
console.log("52");


console.log("5" - 2);
//answer
console.log("5 - 2");

//Mentor Challenge
let Name = "Vineet";
let Age = 21;

let Maths = 80; 
let Science = 90;
let English = 75;

console.log("Student Report");
console.log(`Name : ${Name}`);
console.log(`Age : ${Age}`);
console.log(`Math : ${Maths}`);
console.log(`Science : ${Science}`);
console.log(`English : ${English}`);
let avg = (Maths+Science+English)/3;
console.log(`Average is : ${avg}`);

