let desc = {
    clgName : 'Vignan',
    email:'vigan@gmail.com',
    phno:99999999999,
    place:'vadlamudi'
} ;console.log(desc);

//multi line strings
//backtick 
let desc1 = `vignans lara is a private engineering clg in vadlamudi,Guntur,A.P,estb in 2007`;
console.log(desc1);

//string interpolation
let firstName = "sumi";
let lastName = "venna";
console.log(`${firstName} ${lastName}`); 

//array destructing
let pNames = ['realme','lg','vivo'];
let [brand1,brand2,brand3] = pNames;
console.log(brand1);
console.log(brand2);
console.log(brand3);

//object destructing
const movieInfo = {
    movieName : "bahubali",
    director : "rajamouli",
    producer : "shobu"
};
let {
    movieName,director,producer
} = movieInfo;
console.log(movieName);
console.log(director);
console.log(producer);

