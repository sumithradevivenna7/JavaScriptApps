//Apply method
const sInfo ={
    rollNo : 61,
    name :"sumi",
    sDetails :function (qualification,mNo){
        return this.rollNo+""+this.name+""+qualification+""+mNo;
    },
};
const stu ={
    rollNo :61,
    name : "venna",
};
console.log(sInfo.sDetails.apply(stu,["bTech",1234567890]));