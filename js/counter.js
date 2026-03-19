export class Counter {
    constructor(selector, initialValue=0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);
        
        // button elementfs
        this.display = document.createElement('div');
        this.incBtn = document.createElement('button');
        this.decBtn = document.createElement('button');
        this.resetBtn = document.createElement('button');


        // add buttons, decrement, reset
        // this.decrement
        // this.reset

        // set button text
        this.incBtn.textContent = "increment";
        this.decBtn.textContent = "decrement";
        this.resetBtn.textContent = "reset";


        // set new button text
        // this.decrement...
        // this.reset...

        //append display and button into container div
        container.appendChild(this.display);
        container.appendChild(this.incBtn);
        container.appendChild(this.decBtn);
        container.appendChild(this.resetBtn);


        // append new buttons
        // container.appeandchild(new buttons)

        //add event listener
        this.button.addEventListener("click", ()=> this.increment());

        // add new event listeners

        // when this first gets mounted update the display
        this.update();
    }

    // state methods
    increment() {
        this.count++;
        this.update();
    }

        // decrement() {
            // if statement to prevent lower than 0
            // this.count--;
            // this.update();
        // }
        
        // reset() {
            // this.count = 0;
        // }

    update() {
        // set initial display content
        this.display.textContent = `Count: ${this.count}`;
    
        //classList.toggle() this.count===0
    }
}

//Counter is Super Class
//StepCounter is subclass

class StepCounter extends Counter {
    constructor(selector, initialValue = 0) {
        super(selector, initialValue);
        //add step property
        //this.step = step;

    }
    //increment(){}
    //decrement(){}
}

//homework notes
//when counter goes to 0 add a class that will prevent user from dropping it to zero or resetting, as 0 is the base state
//design a full webpage that documents that component
//make website explain counter and how to use it
//create a new stepper class using inheritance
//takes a parameter called step which will dictate how much the counter will increment by
//minimum of 10 commits
//branch for each feature
//branch commits spaced out
//repo should show development

//repo should show:
//week 8 skeleton must be finished
//week 9 core logic must be finished
//week 10 must be finished
//PROGRESSION
//NO VIBE CODING

//someone should be able to go to site and learn how it is done so that they can add it to their project