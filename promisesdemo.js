//promises logic
const movieRating = new Promise((resolve,reject) => {
    let rating = 4.5;
    if(rating > 4){
        resolve("Good movie");
    }else{
        reject("waste of time");
    }
});

//call promises
movieRating.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
});