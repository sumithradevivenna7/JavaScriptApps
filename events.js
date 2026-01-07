//events in js
//even
function sample(){
    alert("hi");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click",sample);
function sample(){
    alert("hello");
}
let btnvalue1 = document.getElementById("demo1");
btnvalue.addEventListener("click",sample);

let headervalue = document.getElementById("demo1");
const mousehover = () =>{
    headervalue.style.color = "blue";

};
let mouseout = () =>{
    headervalue.style.color = "";
};

headervalue.addEventListener("mousehover",mousehover);
headervalue.addEventListener("mouseout",mouseout);

let inputvalue = document.getElementById("ip");
let pvalue = document.getElementById("p1");
const inputlogic = () => {
    let userVAlue = inputvalue.value;
    pvalue.textContent =userVAlue;
};

inputvalue.addEventListener("input",inputlogic); 
