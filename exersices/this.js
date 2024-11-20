console.log(this)

function Thiscontext(){
    console.log(this)
}

function PersonaCabezona(name, tamanoCabeza, esJoto){
    this.name = name;
    this.tamanoCabeza = tamanoCabeza;
    this.esJoto = esJoto;
}

class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name + ' ' + this.age;
    }
}

///////
let persona = new Persona('Diego', 29);
console.log(persona.getName())

// console.log(Thiscontext())
// const veto = new PersonaCabezona('Veto', '100m', true)
// console.log(veto)
