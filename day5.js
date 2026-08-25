//Q.1
let todayDate = new Date();
console.log(todayDate.toDateString());

//Q.2
console.log(`Day : ${todayDate.getDay()}`);
console.log(`Month : ${todayDate.getMonth()}`);
console.log(`Year : ${todayDate.getFullYear()}`);

//Q.3
console.log(`Seconds : ${todayDate.getSeconds()}`);
console.log(`Minutes : ${todayDate.getMinutes()}`);
console.log(`Hours : ${todayDate.getHours()}`);

//Q.4
console.log(`Month as a normal Number : ${todayDate.getMonth()+1}`);

//Q.5
let myDate = new Date("08-15-2026");
console.log(myDate.toDateString());

//Q.6
console.log(Date.now());
console.log(`The number is milliseconds used to compare the time and date in real life explains`);

//Real World Challenge
let todaysDate = new Date();
console.log("Today's Date\n");
console.log(`Date : ${todayDate.getDate()}`);
console.log(`Month : ${todayDate.getMonth()+1}`);
console.log(`Year : ${todayDate.getFullYear()}`);
 
//Bonus Challenge 14/08/2026 since doing it on 14th august
let bonusdate = new Date()
console.log(`${bonusdate.getDate()}/${bonusdate.getMonth()+1}/${bonusdate.getFullYear()}`);

//Interviwer Counter
let date = new Date();
console.log(date.getMonth());
console.log(`It will print 7 Beacause month always start with the 0th index therefore if the month is january it will print 0`);


let date1 = new Date();

console.log(date1.getDay());
console.log(date1.getDate());
console.log(date1.getMonth());