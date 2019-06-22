class Person {
    constructor(fullName, favColor) {
        this.name = fullName
        this.favoriteColor = favColor
    }

    greet() {
        console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".")
    }
}

export default Person

// Writting in App.js
/* import Person from './modules/Person'

class Adult extends Person {
    payTaxes() {
        console.log('Now ' + this.name + ' owes $0 in taxes')
    }
}

let john = new Person('John Doe', 'red')
john.greet()

let jane = new Adult('Jane Smith', 'orange')
jane.greet()
jane.payTaxes() */