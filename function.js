//Rest parameter
const print_numbers = (a,b,...c) => {
    console.log(a);
    console.log(b);
    console.log(...c);
}
print_numbers(10,20,30,40,50);

//Defaukt parameters
let addNumbers = (a,b = 20) => {
    console.log(a+b);
}
addNumbers(40);

