//call method 
const pInfo ={
    pDetails : function(rating,price){
        return this.pId+""+this.pName+""+rating+""+price;
    },
};
const product ={
    pId : 100,
    pName :"vivo",
};
console.log(pInfo.pDetails.call(product,4,30000));