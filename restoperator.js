function sum (...value){
    let total = 0;
    for (let n of value){
        total = total+n;
    }
    return total ;
}

console.log(sum (10,30,40));
console.log(sum (40,30,90));


function sum(name,...value){
    let total = 0;
    for (let n of value){
        total = total+n;
    }
    console.log(name);
     return total ;
}

console.log(sum("ABC"));
console.log(sum(30,23,45));