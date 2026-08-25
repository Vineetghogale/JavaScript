console.log("Q.1"); 
let myfavLanguage = new Array("JavaScript","Python","React","C","C++");
console.log(myfavLanguage);
console.log(myfavLanguage[0]);
console.log(myfavLanguage[4]);

console.log("Q.2"); 
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);
fruits[1]="Grapes"
console.log(fruits);

console.log("Q.3"); 
console.log(fruits.length);

console.log("Q.4");
let numbers = [10, 20, 30];
numbers.push(40,50);
numbers.pop();
console.log(numbers);

console.log("Q.5");
let students = ["Rahul", "Amit", "Sneha"];
students.shift();
students.unshift("Vineet")
console.log(students);

console.log("Q.6");
let languages = ["JavaScript", "Python", "Java", "C++"];
console.log(languages.includes("Python"));
console.log(languages.indexOf("Java"));

console.log("Q.7");
let newNumbers = [10, 20, 30, 40, 50];
console.log(newNumbers.slice(1,4));

console.log("Q.8");
let newFruits = ["Apple", "Banana", "Orange"];
newFruits.splice(1,1,"Mango");
console.log(newFruits);

console.log("Real World Example");
let subjects = ["JavaScript", "HTML", "CSS", "MongoDB"];
//1
console.log(subjects);
//2 and 3
subjects.push("React","Node.js")
console.log(subjects);
//4
subjects.splice(1,1)
console.log(subjects);
//5
console.log(subjects.includes("React"));
//6
console.log(subjects.length);

console.log("Interview Question");
let arr = [10, 20, 30];
arr.push(40);
//console.log("Add the element 40 at the end of the array");
console.log(arr.length);
//console.log("Returns the length of the array i.e 4");
arr.pop();
//console.log("Returns the last element in the array");
console.log(arr);
//console.log("10, 20, 30");

console.log("Bonus Challenge");
let numbers1 = [5, 10, 15, 20, 25];
console.log(numbers1.slice(1,4));
