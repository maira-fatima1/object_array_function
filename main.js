#! /usr/bin/env node
("Object,Array and Function");
Assignment1: ("\n\tBuilding Your Friend List\n");
let friend1 = {
    firstName: "Maira",
    lastName: "Fatima",
    id: 92241,
};
let friend2 = {
    firstName: "Maham",
    lastName: "Fatima",
    id: 92242,
};
let friend3 = {
    firstName: "Mirha",
    lastName: "Fatima",
    id: 92243,
};
let people = {
    friends: [friend1, friend2, friend3]
};
console.log(people);
Assignment2: ("\n\tManipulating an Array: Rearranging Words\n");
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
const scrambledArray = [
    "student", "of", true, 123, "am", "a", "GIAIC", "I"
];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray[1] = "am";
scrambledArray[2] = "a";
scrambledArray[3] = "student";
scrambledArray[4] = "of";
scrambledArray[5] = "GIAIC";
console.log(scrambledArray.join(""));
Assignment3: ("\n\tCompany Product Catalog\n");
let product = {
    name: "saeeed ghani",
    model: 2012,
    cost: 1888,
    quantity: 6,
};
let product1 = {
    name: "vince",
    model: 2024,
    cost: 1999,
    quantity: 10,
};
let product2 = {
    name: "Neutrogena",
    model: 1999,
    cost: 3000,
    quantity: 5,
};
let inventory = {
    product: [product, product1, product2]
};
console.log("Quantity of the third product:", inventory.product[2].quantity);
let product3 = {
    name: "cerave",
    model: 2015,
    cost: 5000,
    quantity: 3,
};
inventory.product.push(product3);
console.log("Name of the fourth product:", inventory.product[3].name);
console.log("Cost of the first product:", inventory.product[0].cost);
Assignment4: ("\n\tStudent List Organizer\n");
;
const students = [
    {
        name: "Maira",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Jaweria",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Iqra",
        isSenior: true,
        hasCompletedAssignment: false,
    },
    {
        name: "Ghazal",
        isSenior: false,
        hasCompletedAssignment: true,
    },
    {
        name: "Maira",
        isSenior: true,
        hasCompletedAssignment: false,
    },
];
console.log(students);
const findSenior = (student) => {
    return students.filter(student => student.isSenior && student.hasCompletedAssignment
        === true);
};
console.log(findSenior(students));
const removeStudent = (students) => {
    return students.filter(student => student.hasCompletedAssignment === false);
};
console.log(removeStudent(students));
export {};
