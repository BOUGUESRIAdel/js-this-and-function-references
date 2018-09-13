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
        //btn.addEventListener('click', this.addName);
        //this syntax will add the reference of the function so that when a click event occures the listener will know to what address it goes, and it works fine but in some cases not
        this.names = ["Adel","Smail","Younes","Chemso"];
        this.currentName = 0;
        console.log(this);
        //This syntax allow names and currentName to be an attribut of the class event though it's defined in a function (constructor in this case) 
        //btn.addEventListener('click', this.addName.bind(this));
        //To fix the "this" refering to button in addName we use bind() that defines it's behavior; in this case we're telling it to behave as "this" in this function does
        //if we want to add another class it should be instantiated i.e bind() taes objects and not classes     
        const adel = () => {
            this.addName();
        }
        btn.addEventListener('click', adel);
        //Or we can use in arrow function that doesn't implement "this" so we'll use the current function "this"
        //This time we want to execute the function addName it is not an event so we must ad parentheses 
    }
    
    addName() {
        
        console.log(this);
        //This is defined in JS to refer to the caller of the function it is contained in so in this case the caller of addName is the eventListener So this refers to the button
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if(this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();
var myName = gen.names[0];
//in the case of this.names we can call gen.names and have the array