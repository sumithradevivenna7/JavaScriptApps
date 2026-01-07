// Arrays in js
let p_names = ["realme","sam","vivo","oppo"]; //literal syntax
//ways to create a n array 
let prices = new Array(2000,3000,5000,4000);//object syntax
//to get array values
console.log(p_names[1]);
// to get all values
for (let names of p_names){
    console.log(names);
}

//using for each method
let names = p_names.forEach(
    (val) => {
    console.log(val);
    }
)

//to add elements
//push , unshift method, splice method
p_names.push("oneplus");
for (let names of p_names){
    console.log(names);
}
p_names.unshift("poco");
for (let names of p_names){
    console.log(names);
}
p_names.splice(2,0,"nokia","lg");
for (let names of p_names){
    console.log(names);
}
//to remove elements
//pop,shift method,splice method,delete operator
p_names.pop();
for (let names of p_names){
    console.log(names);
}
p_names.shift();
for (let names of p_names){
    console.log(names);
}
p_names.splice(2,1);
for (let names of p_names){
    console.log(names);
}

//delete p_names[3];
//for (let names of p_names){
  //  console.log(names);
// }

//portion of an array(slice method)
console.log(p_names.slice(2,4));
console.log(p_names.slice(-4,-2));

//to search
//index of,last index of,includes,find are the methods
console.log(p_names.indexOf("vivo"));

//sort
//sort methods
console.log(p_names.sort());
console.log(p_names.reverse());

//array advance methods(ES6)
//Reduce method
let sum = prices.reduce((total,value) => {
    return total + value;
});
console.log(sum);

//map 
let offerPrice = prices.map((value) =>{
    return value - 5000;
})
console.log(offerPrice);

//To concate
let p_names1 = ["lg","poco"];
console.log(p_names.concat (p_names1));

//spread operator
let brands = [...p_names,...p_names1];
console.log(brands);