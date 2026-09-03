function sum (...value){
    let total = 0;
    for (let n of value){
        total = total+n;
    }
    return total ;
}

console.log(sum (10,30,40));
console.log(sum (40,30,90));


function newsum(name,...value){
    let total = 0;
    for (let n of value){
        total = total+n;
    }
    console.log("name",name);
    console.log("total",total);
}
newsum("ABC",10,20,52)