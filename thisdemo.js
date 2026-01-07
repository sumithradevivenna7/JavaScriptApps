//this keyword
const empInfo = {
    empfirstname : "venna",
    emplastName :"sumi",
    fullName : function() {
        return this.empfirstname+""+this.emplastName;
    },
};console.log(empInfo.fullName());