// normal function
function Hello()
{
    console.log("hellow world");
}
Hello();

// arrow function

Hello = () => console.log("hellow world");
Hello();

// pattern using arrow fucnction 

// pattern = (n)=>{
//     for (let i=0 ;i<n ; i++){
//         for (let j=0; j<=i;j++){
//             row +="*";
//         }
//         console.log("*");
//     }
// }
// pattern(3);

const pattern = (n) => {
    for (let i = 0; i < n; i++) {
        let row = "";
        
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        
        console.log(row);
    }
};

pattern(3);