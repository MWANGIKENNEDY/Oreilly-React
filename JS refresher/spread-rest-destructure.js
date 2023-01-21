//spread operator
const numbers = [1,2,3];
//adding new numbers to an array
const newNumbers = [...numbers,4,5,6];

const obj = {name:'kennedy'}
//add new prop to an object
const nObj = {...obj,age:28}
//modify and existing property
const nObj2 = {...obj,name:'mwangi'}


//rest operator - used in functions - convert input parameters to an array


const myFunction = (...args) =>{
    //return args.anyArray function
}

//destructuring
//arrays

[a,b] = ['kennedy','mwangi']


const {name,age} = {name:'kennedy mwangi',age:100}


console.log('age is',age)