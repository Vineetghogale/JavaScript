console.log("Q.1");
let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express"];
let full_stack = frontend.concat(backend);
console.log(full_stack);

console.log("Q.2");
full_stack = [...frontend,...backend];
console.log(full_stack);

console.log("Q.3");
let fruits = ["Apple", "Banana", "Mango"];
let new_fruits = ["Orange","Grapes"];
all_fruits = [...fruits,...new_fruits];
console.log(all_fruits);


console.log("Q.4");
let numbers = [1, 2, [3, 4], [5, 6]];
console.log(numbers.flat(Infinity));

console.log("Q.5");
let a = [1, 2, 3];
let b = "JavaScript";
let c = 100;
console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));

console.log("Q.6");
let language = "JavaScript";
console.log(Array.from(language));

console.log("Q.7");
let numarr = Array.of(10,20,30,40);
console.log(numarr);

console.log("Real World Challenge");
let technicalSkills = ["JavaScript", "React", "Node.js"];
let databaseSkills = ["MongoDB", "MySQL"];
console.log(...technicalSkills,...databaseSkills);

let gits = ["GitHub","Git"]
let all_skills = [...technicalSkills,...databaseSkills,...gits];
console.log(all_skills);
console.log(all_skills.length);
console.log(all_skills.includes("React"));

console.log("Interview Question");
//let r = arr1.concat(arr2);
//let r1 = [...arr1, ...arr2];
console.log("Both Does the work same but no eaxctly the same the spread function will spread all the elements in the mention spread function induvidually but not return a new array wheras concate returns a new array and also adds two array but spread can have multiple arrays");

console.log("Bonus Challenege");
let data = [1, [2, 3], [4, [5, 6]]];
console.log(data.flat(Infinity));
