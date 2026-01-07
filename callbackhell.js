const student_details = ()=>{
    console.log("student_info");
    setTimeout(() =>{
        let roll_no = [1,2,3,4];
        console.log(roll_no);
        setTimeout(() =>{
        const data = {"sname":"sumi",
            "quali":"btech"
        };
        console.log(`name is ${data.sname}
            quali is ${data.quali}
            roll no ${roll_no}`);

    },2000);    },2000);
}
student_details();