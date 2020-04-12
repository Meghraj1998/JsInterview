

// Q5. How to call the function display()
//  in the following code such that it logs the given object on the screen
// const obj = {a: 100};
// function display() {
//     console.log(this);
// }
// calling display() should output {a: 100}

     //this is for global obj if no context is passed
     //value of (this) inside function depend on how function is called
     //if we call using . then this refer to obj called
     //call() fucntion is used to set the value of this  

    display.call(obj);
 
