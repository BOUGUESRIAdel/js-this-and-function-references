class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        //btn.addEventListener('click', addName()); 
        //This syntax will make JS look for a variable or function on the constructor then the document (and not in the current class) so we'll get an error
        //btn.addEventListener('click', this.addName()); 
        //This syntax will use the function in the class but it'll execute it immediately 
        btn.addEventListener('click', this.addName);
        //this syntax will add the reference of the function so that when a click event occures the listener will know to what address it goes, and it works fine but in some cases not
    }
    
    addName() {
        const name = new NameField("Max");
    }
}

const gen = new NameGenerator();