/** 
 * Basic function declaration 
 **/

/** normal function */
function sayHello(name){
    console.log("Hello.. "+name)
}

/** using the arrow function */
let sayHi = (name) => {
    console.log("Hi.. "+name)
}

// sayHello("shri")
// sayHi("shri")


/** 
 * Function as a parameter
 **/
let elements = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

/** normal */  
elements.map(function(element) {
    return element.length;
});

/** using the arrow function */
elements.map(element => {
    return element.length;
});

/** 
 * When the only statement in an arrow function is `return`, we can remove `return` 
 * and remove the surrounding curly brackets 
 **/

elements.map(element => element.length); 