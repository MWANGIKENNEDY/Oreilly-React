//primitive types - numbers/strings/booleans
const number = 100;
//num2 copies the value of number
const num2 = number;


//referenced types -- objects and arrays

const person = {
    name:'max'
}


//this copies a pointer in memory that points to the exact original object (person);
//both changes occur even in the copied elements
const secondPerson = person;


person.name='ken'; //second person will change to ken

//this is solved using the spread operator:

const newObj = {...person};