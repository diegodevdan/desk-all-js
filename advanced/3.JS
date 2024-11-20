// 3. Implement a deep clone function in JavaScript that creates
// a copy of a nested object or array without any reference to the original.

function nestedCopy(obj){
    let newPerson = {...obj};
    newPerson.name = 'Brianda';
    console.log(obj)
    return newPerson;
}

let person = {
    name: 'diego',
    age: '29'
}

console.log(nestedCopy(person))