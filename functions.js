//functions in js
function showMessage(){
    console.log("hi");
}
showMessage();

//function with parameters
function sumOfNumbers(a,b){ // a,b are parameters
    console.log(a+b);
}
sumOfNumbers(10,20); // 10,20 are arguments

//return a value from function
function mulOfNumbers(a,b){
    return a*b;
}
let x = mulOfNumbers(10,20); 
console.log(x);

//ES6 new functions

//arrow function
const arrowDemo = () => { //Fat arrow notation
    console.log("arrowDemo");
}
arrowDemo();


//arrow function with parameters
const addNumbers = (num1,num2) => {
    console.log(num1+num2);
}
addNumbers(10,20);

//in a simple way
const addNumbs1 = (a,b) => a+b;
let ans = 
    console.log(a+b);
