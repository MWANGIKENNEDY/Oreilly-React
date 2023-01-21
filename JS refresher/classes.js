class Human{
    gender = 'male';
    printGender = () =>{
        console.log(this.gender)
    }
}

//super() keyword is used to invoke the constructor of the parent class::

class Person extends Human{
    name = 'max';
    gender = 'female';

    printName=()=>{
        console.log(this.name)
    }
}


const person = new Person();

person.printName();
person.printGender();
