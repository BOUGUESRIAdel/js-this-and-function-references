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
        btn.addEventListener('click', addName()); 
        //using this syntax will make JS look for a variable or function on the constructor then the document (and not in the current class) so we'll get an error
        
    }
    
    addName() {
        const name = new NameField("Max");
    }
}

const gen = new NameGenerator();