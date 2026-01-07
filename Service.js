//Api calling with async/await
const getDetails = async() => {
    //request data gathering logic
    let userId = document.getElementbyId("userId").value;
    let para = document.getElementbyId("simple");
    let result = document.getElementbyId("sample");
     if (userId == ""){
        alert("please enter userid");
        return
    para.style.display = "block";
    //business logic
   
    }
    try{
        await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/$")])
    }
    catch(error){   
        result.innerHTML = "<h3>Something went wrong</h3>";  
    }
}