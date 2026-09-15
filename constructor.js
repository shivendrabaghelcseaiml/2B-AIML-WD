class student {
    constructor(roll, name, Year)
    {
        this.RollNumber=roll;
        this.Name=name;
        this.Year=Year;


        console.log(this.RollNumber);
        console.log(this.Name);
        console.log(this.Year);
    }
}

let s1 = new student ();
let s2 = new student (101,"shivendra","2nd");
let s3 = new student (202,"singh","4th");