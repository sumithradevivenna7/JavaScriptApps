//datatypes in javascript (single line comments)
var empid = 1001;
console.log(typeof(empid));//number
var emobilenumber = 9555356564;
console.log(typeof(emobilenumber));//number
var esalary = 45000.99;
console.log(typeof(esalary));//number
var e_name = "mahesh";
console.log(typeof(e_name));//string
var c_emp = true;
console.log(typeof(c_emp));//boolean
var pf;
console.log(typeof(pf));//undefined
var esi = null;
console.log(typeof(esi));//object
var des = ["developer","hr","manager",];
console.log(typeof(des));//object
var cinfo = {
    cid:2002,
    cname:"Sumi",
    cadd:"guntur"
}
console.log(typeof(cinfo));//object

//advanced datatypes(E6)
var tcsturnover=BigInt(1234567890987654321);
console.log(typeof(tcsturnover)); //bigint
var p_name = Symbol("Samsung");
var p_name1 =Symbol("samsung");
console.log(typeof(p_name));//symbol
console.log(p_name==p_name1);//false