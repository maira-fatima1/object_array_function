#! /usr/bin/env node
import inquirer from "inquirer";

("Object,Array and Function");

Assignment1:("\n\tBuilding Your Friend List\n");

//Learning Objective: Practice working with objects and arrays 
//in TypeScript to create a data structure.
//Task: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend, with properties like firstName, 
//lastName, and optionally id.
//3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your 
//  friend list.
type Friend = {           
  firstName : string;
  lastName : string;
  id?: number;
}
let friend1:Friend = {
  firstName: "Maira",
  lastName: "Fatima",
  id: 92241,
}
let friend2 : Friend = {
   firstName:"Maham" ,
   lastName:"Fatima" ,
   id :92242,  
}
let friend3: Friend = {
  firstName:"Mirha",
  lastName:"Fatima",
  id:92243,
}
let people = {
  friends: [friend1,friend2,friend3]
}
console.log(people);

Assignment2:("\n\tManipulating an Array: Rearranging Words\n");

// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or 
// create temporary arrays).
// • Output the Result:
//• Use join() to combine elements back into a single string: "I am a student of GIAIC".

const scrambledArray =[
  "student", "of",true,123,"am","a","GIAIC","I"
]
scrambledArray.splice(2,2)
scrambledArray.pop()
scrambledArray.unshift("I")
scrambledArray[1]= "am";
scrambledArray[2]= "a";
scrambledArray[3]= "student";
scrambledArray[4]="of";
scrambledArray[5]="GIAIC";

console.log(scrambledArray.join(""));

Assignment3:("\n\tCompany Product Catalog\n")

// LearningObjective: Implement data structures in TypeScript to represent  and manage product information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, 
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the 
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand 
// how to manage product data.

type products={
  name:string;
  model:number;
  cost:number;
  quantity:number;
}

let product:products={
  name:"saeeed ghani",
  model:2012,
  cost:1888,
  quantity:6,
}

let product1:products={
  name:"vince",
  model:2024,
  cost:1999,
  quantity:10,
}

let product2:products={
  name:"Neutrogena",
  model:1999,
  cost:3000,
  quantity:5,
}

let inventory = {
  product : [product,product1,product2]
}
console.log("Quantity of the third product:",inventory.product[2].quantity);

let product3: products= {
  name:"cerave",
  model:2015,
  cost:5000,
  quantity:3,
}
inventory.product.push(product3)
console.log("Name of the fourth product:",inventory.product[3].name);
console.log("Cost of the first product:",inventory.product[0].cost);

Assignment4: ("\n\tStudent List Organizer\n");

// LearningObjective: Get comfortable with data structures (objects and arrays) and basic 
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes 
// student information like name, senior status (true/false), and whether they've completed 
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the 
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors 
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have 
// a function that removes students who haven't completed their assignments 
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

interface Student{
 name:string;
 isSenior:boolean;
 hasCompletedAssignment:boolean;
};

const students: Student[] = [
  {
  name:"Maira",
 isSenior:false,
 hasCompletedAssignment:true,
  },
  {
    name:"Jaweria",
    isSenior:false,
    hasCompletedAssignment:true,
  },
  {
    name:"Iqra",
 isSenior:true,
 hasCompletedAssignment:false,
  },
  {
    name:"Ghazal",
 isSenior:false,
 hasCompletedAssignment:true,
  },
  {
    name:"Maira",
 isSenior:true,
 hasCompletedAssignment:false,
  },
]
console.log(students);

const findSenior = (student: Student[] ) => {
  return students.filter(student => student.isSenior && student.hasCompletedAssignment
    ===true)
}
console.log(findSenior(students));

const removeStudent= (students:Student[]) => {
  return students.filter(student => student.hasCompletedAssignment===false)
}
console.log(removeStudent(students));
