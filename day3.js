//Q.1
let firstName = "Vineet ";
let lastName = "Ghogale";
let fullName = firstName + lastName;
console.log(`Full Name : ${fullName}`);

//Q.2
console.log(fullName.length);

//Q.3 
//first charachter
console.log(fullName.charAt(0));
//Last character
//Wrong, Because if the name changes 13 won't necessarily be the last position
console.log(fullName.charAt(13)); 
//Right 
console.log(fullName.charAt(fullName.length - 1));


//Q.4
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//Q.5
let name = "   Vineet Ghogale   ";
console.log(name);
console.log(name.trim());

//Q.6
let sentence1 = "I am learning JavaScript";
console.log(sentence1.includes("JavaScript"));

//Q.7
let sentence2 = "I am learning Java";
console.log(sentence2);
console.log(sentence2.replace("Java","JavaScript"));

//Q.8
let text = "JavaScript";
console.log(text.slice(0,4));
console.log(text.slice(4,10));

//Final Challenge
let eName = "   vineet ghogale   ";
let companyName = "google";

console.log(`Name : ${eName.trim()}`);
console.log(`Company : ${companyName.toUpperCase()}`);
let username = `${eName.trim().slice(0,6)}_${eName.trim().slice(7,15)}`;
console.log(`Username : ${username}`);
console.log(`Name Length : ${eName.trim().length}`);

//Bonus 
console.log(username.includes("_"));
