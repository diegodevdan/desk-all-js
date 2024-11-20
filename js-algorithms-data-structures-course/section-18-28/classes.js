
class Student {
    constructor(firstName, lastName, year){
        this.firstName  = firstName
        this.lastName  = lastName
        this.year  = year
        this.nickname = undefined
    }

    set studentNickname(nickname){
        this.nickname = nickname
    }

    studentDescription(){
        return `This student is ${this.firstName}, cursing the ${this.year} grade`
    }

    //Statics methods can't be invoked by the class' instances
    //Also known as utilities functions
    static EnrollStudents(...students){
        return 'Enrolling students'
    }
}

const student1 = new Student('Diego', 'Herrera', 8)
const student2 = new Student('Mijo', 'Herrera', 2)

console.log(student1)
console.log(student2)
student1.studentNickname = 'dieguito'
console.log(student1)

Student.prototype.getName = function (){
    return this.firstName + ' ' + this.lastName
}

console.log(student1.getName())
console.log(student1.studentDescription())
console.log(student1)