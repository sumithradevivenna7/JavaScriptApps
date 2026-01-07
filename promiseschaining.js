//promises chaining
const ticketBooking = () =>{
    return new Promise((resolve,reject) =>{
        resolve("Ticket booked");
    });
}
const popcorn = (msg) =>{
    return new Promise((resolve,reject) => {
        resolve(msg + "popcorn");
    });
}
const coke = (msg) =>{
    return new Promise((resolve,reject) => {
        resolve(msg + "get coke");
    });
};
ticketBooking().then((result) =>{
    return popcorn(result);
}).then((result) => {
    return coke(result);
}).then((result) =>{
    console.log("wanna go to  movie" + result);
})
.catch((error) =>{
    console.log(error);
});


