/* 
Course: COMP2004
Author: Ziad Ewais
Title: COMP2004-Week1-JS-Review-Answers
Synopsis: Welcome to week 1 of COMP2004 - Full Stack Dev.
To start on the right foot we need to review the JavaScript
required to develop in React. 
*/

/*
*1
JavaScript Objects are a collection data structure where data are defined by "Key" and "Value"
Keys are a string followed by a colon (:)
Values can be any JavaScript data type (String, number, boolean, collection, ...)
*/
let data = [
  {
    id: 1,
    studentName: "John Doe",
    dateOfBirth: "2002-05-11",
    tuitionPaid: 12600,
    program: "General Arts and Science",
    highSchool: "West Andrews HS",
    courses: ["MATH8", "CHEM12", "COMP205", "COMM110", "GENE200"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 95,
      GENE101: 66,
      CHEM11: 85,
      COMM20: 0,
    },
  },
  {
    id: 22,
    studentName: "Shrey Gupta",
    dateOfBirth: "2003-11-23",
    tuitionPaid: 10200,
    program: "Welding",
    highSchool: "Toronto Heights HS",
    courses: ["MATH8", "WELD12", "WELD205", "CARP55", "GENE101"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 78,
      WELD101: 86,
      PHYS20: 55,
      COMM20: 0,
    },
  },
  {
    id: 3,
    studentName: "Veronica Martinez",
    dateOfBirth: "2002-10-04",
    tuitionPaid: 11300,
    program: "Computer Systems Technician",
    highSchool: "St. James HS",
    courses: ["COMP905", "COMP1100", "CARE10", "GENE66", "GENE12"],
    hasAttendedOrientation: false,
    previousCoursesGrades: {
      COMP101: 95,
      COMP1000: 88,
      GENE102: 68,
      COMM110: 75,
    },
  },
  {
    id: 4,
    studentName: "Jana Mohammed",
    dateOfBirth: "2003-02-16",
    tuitionPaid: 15900,
    program: "Automotive",
    highSchool: "INTERNATIONAL",
    courses: ["AUTO102", "AUTO102", "MATH8", "GENE101", "COMM110"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {},
  },
];

/* 
*2
To access data inside an object, we use the dot notation, or the square brackets notation
*/
const student0 = data[0];
//console.log(student0);
console.log(student0.studentName) //access using dot notation
console.log(student0["studentName"]) //access using square bracket

const key0 = "tuitionPaid";
console.log(student0[key0]);

const keys = ["highSchool", "program", "dateOfBirth"];
//make a loop to show all keys
for(let i = 0; i < keys.length; i++) {
  console.log(student0[keys[i]]);
}
/*
*3
To add or change data in an object we call the key and assign a value to it
*/
console.log(student0.highSchool)
student0.highSchool = "Best HS Ever";
console.log(student0.highSchool)
/*
*4
Deconstruction of an object creating variables with same studentNames of keys with the assigned values 
 */

//let id = student0.id;
//let studentName = student0.studentName;
//let dateOfBirth = student0.dateOfBirth;
//deconstruction:
// let {id:id} : if value and key are the same, only need to write 1
//let {id, studentName, dateOfBirth} = student0;
//console.log(id)
//console.log(studentName)
//console.log(dateOfBirth)
//deconstructing the student0 object if keys exist within the deconstructed object
/*

 *5
Rest operator (...) is used to assign the rest of the data to a new object
 */
let {id, studentName, dateOfBirth, ...restOfStudent /*take the rest and put them in following var */} = student0
console.log(restOfStudent);

/**
 *6
 Spread operator (...) to spread keys of an object in a new object
 */
const copyOfStudent0 = student0;  //shadow copy (not good, only telling first var to refer to 1st var)
//create backups using deepcopy instead, copy is not affected if original is changed
//hard way (shallow copy)
//const copy = {id: student0.id /*etc */}
//easy way (deep copy)
const copy = {...student0};
//every key and value is copied to var copy from student0
console.log(copy);

//copying everything except 1 (using rest operator)
const {tuitionPaid, ...copyExceptTuitionPaid} = student0;
console.log(copyExceptTuitionPaid);
/**
 *7
 Template literals is creating strings with JS code embedded like variables or statements
 using back tick (`) operator
 */
console.log(`The first student on the list has the name ${student0.studentName}`)

/**
 *8
 * Arrow function is used to replace the old function declaration. Best used for one liner functions (lambda functions)
 */

//old function declaration method
function oldFuncton(){
  console.log("This is an old function")
}
//arrow function declaration method
const arrowFunction = (num1, num2) => {
  console.log("This is an arrow function")
  return num1 + num2;
} //substitute function with name of the var, then argument, then => {}
console.log(arrowFunction(1,2));
//Lambda function declaration method
//lambda function conditions: 1 line only, return is not needed
//usually used for something quick and simple
const lambdaFunction = () => console.log("This is a lambda function");
lambdaFunction();

/**
 *8
 Ternaries are short, one liners, if/else statements 
 */
//normal if statement
if(student0.tuitionPaid > 10000) {
  console.log("paying too much")
} else {
  console.log("paying right")
}
//ternary
let result = (student0.tuitionPaid > 10000) ? "paying too much" : "paying right"
console.log(result)
console.log(student0.courses)
//if they have comp205 in courses, say they have the correct courseload, 
//else add comp205 to their course list, and put a msg saying it's added
let courseLoadChecker = (student0.courses).includes("COMP205") ? "They have the correct courseload" : (
  (student0.courses).push("COMP205"),
  console.log("COMP205 has been added to the courseload"))
courseLoadChecker

//if more than 7000, and less than 10000 in ternary
//if() {else} else{}
//do not use ternaries this way, hard to read
//let tuitionRangeChecker = student0.tuitionPaid > 10000 ?(student0.tuitionPaid < 15000 ? "Tuition is within the normal range" : "Tuition is too high") : "Tuition is too low"
//better way:
let tuitionRangeChecker = student0.tuitionPaid > 10000 && student0.tuitionPaid < 15000 ? "Tuition is within the normal range" : "Tuition is out of range"
//ternaries are if/else statements shorthanded
//if the return is just a 1 liner
/**
 *9
 Short circuting with &&, ||, ?? operators
 NOTE: Falsy values are (false, 0 (the number zero), empty string, undefined, NaN, null)
 */
//short circuiting works with using && and || or or ?? operators
//if a is true, and b is true, then true and b will print out
//if a is false and b is true, then result is false
//if else happens(b), it's false, else it's true  
console.log(student0.tuitionPaid > 10000 && "They are paying too much");
console.log(student0.courses.includes("MATH12") || "MATH 12 is not required")
console.log(student0.previousCoursesGrades.COMM20 == 0 && "They scored a zero on their COMM course")

//and operator work that both values need to be true

//or operator work that one of the values need to be true

//using or operator with a zero value cause issues beacuse zero number is a falsy value

//to solve this issue we use the Nullish coalescing operator
//nullish operator ??
console.log(student0.previousCoursesGrades.COMM20 === 0 ?? "They got a zero") 

let thisIsANull = null;
console.log(thisIsANull ?? "This is null");
//this only works for checking if var is null
//nullish operator shows the first part if true, not the second part like && or || operators
/**
 *10
 Array map: To change all the values of an array at once using a statement
 stored in a new collection (array or object)
 */
const numArray = [2,3,5,7,9];
const numArrayMultipleBy5 = [];
//hard way 
for(let i = 0; i < numArray.length; i++) {
  numArrayMultipleBy5.push(numArray[i] * 5)
}
console.log(numArrayMultipleBy5);

//easy way using map method
//map method takes a callback function as a parameter
//the callback function takes 3 parameters, the first is the current value, the second is the index, and the third is the array itself
//only the first parameter is required
const numArrayWithmap = numArray.map((num) => num * 5); //uses lambda function
console.log(numArrayWithmap);
const dataWithGraduated = data.map((stud) => ({...stud, graduated:false})); //each student is now a new object, going to add a false graduated key to each object
//this is the only way to loop in react, is mapping through an array
//to get all students names in a new array

/**
 *11
 Array filter: to filter certian data in regarded to a statement stored in a new collection
 */

//Filter all students born in 2002 using filter and includes method
const dataWith2002 = data.filter((stud) => (stud.dateOfBirth).includes("2002"));
console.log(dataWith2002);

//filter is the same as map, but looking for certain data to filter with
/**
 *12
 Array reduce: To reduce an array to a single value 
 Ex: display the total of all students tuition paid
 */

//the reduce method takes two parameters, the first is a callback function and the second is the initial value.
//quick way to do sum of numbers together
const totalTuitionPaid = data.reduce((total, stud) => total + stud.tuitionPaid, 0); //starting value is 0
console.log(totalTuitionPaid);

//filter all students who have paid more than 12000
const dataWithTuitionMoreThan12000 = data.filter((stud) => stud.tuitionPaid > 12000);
console.log(dataWithTuitionMoreThan12000);
/**
 *13
 Array sort: to sort arrays ascendingly or descendingly.
 NOTE: This method changes the orginal array. If you want to avoid this, use .slice() method before sorting 
 
 */
const dataSortedByTuitionPaid = data.sort((studA, studB) => studA.tuitionPaid - studB.tuitionPaid); //sort students by paid tuition
//data.sort((studA, studB) => studB.tuitionPaid - studA.tuitionPaid); //this sorts descendingly
console.log(dataSortedByTuitionPaid);
//this sorts ascendingly
//sort students by paid tuition

/**
 *14
 Working with immutable arrays
 */

//adding a new student object to the data array using spread (...) operator

const newerStudent = {
  id: 5,
  studentName: "Jane James",
  dateOfBirth: "2003-03-18",
  tuitionPaid: 13600,
  program: "Compter Programming",
  highSchool: "Ottawa High HS",
  courses: ["COMP1011", "COMP1012", "COMP1013", "GENE101", "GENE102"],
  hasAttendedOrientation: false,
  previousCoursesGrades: {
    COMP201: 87,
    COMP205: 78,
    GENE20: 56,
    COMM110: 77,
  },
};

//adding new student
data = [...data, newerStudent]; //spread operator to spread all the data in the new array, then add the new student object to the end of the array
//this copies the whole data into a new array copy, then adds the new student object to the end of the array

//Remove a student object using filter method
data = data.filter((stud) => !stud.studentName.includes("John Doe"));
console.log(data);
//Update a student object using the map method
