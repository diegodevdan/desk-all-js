console.log(this);

function sayHello(){
    console.log(this)
}


const person = {
    name: 'Diego',
    greet: function () {
        console.log(this.name)
    }
}

//constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}

sayHello();
person.greet();
const diego = new Person('Diego', 29);
console.log(diego)