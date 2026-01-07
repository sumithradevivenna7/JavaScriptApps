//Bind Method 
const mInfo ={
    mDetails : function(){
        return this.heroName+""+this.villanName;
    },
};
const pushpa ={
    heroName : "bhAAi",
    villanName : "shikavath",
};
let res = mInfo.mDetails.bind(pushpa);
console.log(mInfo.mDetails.bind(pushpa));