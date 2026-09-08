function sum(...values){
    let sum=0;
    for(let i in values){
        sum = sum +values[i];
    }
    console.log(sum);
}

let arr=[10,20,30,40,50];
sum(...arr);