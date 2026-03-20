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
        this.incBtn.addEventListener("click", ()=> this.increment());
        this.decBtn.addEventListener("click", ()=> this.decrement());
        this.resetBtn.addEventListener("click", ()=> this.reset());



        // add new event listeners

        // when this first gets mounted update the display
        this.update();
    }

    // state methods
    increment() {
        this.count++;
        this.update();
    }

    decrement() {
            if (this.count >0) {
               this.count--;
            }
            this.update(); 
            //if statement to prevent lower than 0
         }
        
    reset() {
            this.count = 0;
            this.update();
        }

    update() {
        // set initial display content
        this.display.textContent = `Count: ${this.count}`;
        const isZero = this.count === 0;
        //classList.toggle() this.count===0
        //if count isat ZERO
        this.decBtn.classList.toggle('inactive'), this.count === 0;
        this.resetBtn.classList.toggle('inactive'), this.count === 0;

    }
}

//Counter is Super Class
//StepCounter is subclass

export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        //add step property
        this.step = step;

    }
    increment(){
        this.count += this.step;
