sessionStorage.setItem('key', 'value');

// Retrieving data from sessionStorage

const storedValue = sessionStorage.getItem('key');
console.log(storedValue); // Outputs: 'value'
sessionStorage.removeItem('key')
const removedItem = sessionStorage.getItem('key');
sessionStorage.clear()
console.log(removedItem); // Outputs: 'value'


//setItem(key, value): Adds a key/value pair to sessionStorage.
//getItem(key): Retrieves the value associated with the specified key from sessionStorage.
//The data stored in sessionStorage is limited to the current session. If the user closes the browser tab or window, the data is lost.



//JOSN
/*
JSON is a text-based data format that uses a simple and human-readable syntax.
It represents data in key-value pairs, similar to JavaScript objects.
*/
//JSON data is written as key-value pairs enclosed in curly braces {}.
//Many web APIs return data in JSON format.



//JSON.stringify(obj): Converts a JavaScript object into a JSON string.
//JSON.parse(json): Parses a JSON string and returns a JavaScript object.

/* In the example above, JSON.stringify() converts a JavaScript object to a JSON string ,
 and JSON.parse() converts a JSON string back to a JavaScript object.

*/


//Asynchronous


/*

promises :
like i promise you i will give you a some of data
hf exicute 


*/

//local and sission 
/* Data Scope:

    LocalStorage: application show me the local storage
    Data stored in LocalStorage is accessible across browser sessions and tabs/windows with the same origin (protocol, host, and port).
    It persists even after the browser is closed and reopened.
    SessionStorage:
    Data stored in SessionStorage is specific to the current browser tab or window.
    It is accessible only within the same tab or window and is not shared across different tabs/windows or browser sessions.*/

/* setTimeout()
callback: A function or an expression to be executed after the delay.
delay: The time (in milliseconds) to wait before executing the function.
param1, param2, ...: Optional parameters that will be passed to the callback function when it is invoked.*/


function delayedFunction() {
    console.log("Function executed after a delay");
    var x =2 ;
    var z =4 ;
    var sum =x+z
    
    console.log(sum)
}

// Execute delayedFunction after 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);

function delayedMessage(message) {
    console.log(message);
}

// Execute delayedMessage with the parameter after 1000 milliseconds (1 second)
setTimeout(delayedMessage, 1000, "Hello, after 1 second");



/*
The setInterval function in JavaScript is used to repeatedly execute a function or code snippet at specified intervals. It continues to call the specified function with a fixed time delay between each call. The syntax for setInterval is similar to setTimeout:


*/
function repeatMessage() {
    console.log("Message repeated every 3 seconds");
}

// Repeat the function repeatMessage every 3000 milliseconds (3 seconds)
const intervalId = setInterval(repeatMessage, 3000);
clearInterval(intervalId);