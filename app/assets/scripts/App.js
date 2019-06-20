/*==============================
        # TABLE OF CONTENTS
            ## Libraries
                ### jqeury.js

            ## Modules Files
                ### Person.js
==============================*/

const $ = require('jquery')
import Person from './modules/Person'

class Adult extends Person {
    payTaxes() {
        console.log('Now ' + this.name + ' owes $0 in taxes')
    }
}

let john = new Person('John Doe', 'red')
john.greet()

let jane = new Adult('Jane Smith', 'orange')
jane.greet()
jane.payTaxes()