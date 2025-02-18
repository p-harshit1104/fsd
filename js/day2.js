//******************************function declaration********************************************

// print("riya")

// function print(a){
//     console.log("hello ",a);
// }

// print("harshit");

//1)can be defined several times with same name
//2)we can call it before declaration


//******************************function assignment********************************************


// const view=function printtext(a) {
//     console.log("hi ",a)

// }

// view("hero")
// printtext("hero")

//******************************anoymous function assignment********************************************

// const view=function (a) {
//     console.log("hi ",a)

// }

// view("hero")
// printtext("hero")

//******************************arrow function assignment (ES6 syntax)********************************************


// const view=(a)=> {
//     console.log("hi ",a)

// }

// view("hero")
// printtext("hero")


//******************************wap for calculating sum and return its mod by all types********************************************



// function sum(a,b) {
//     return (a+b)%10;                    //type 1
// }

// const fun=function sum(a,b) {
//     return (a+b)%10;                    //TYPE2
// }


// const fun=function(a,b){
//     return (a+b)%10;                //type 3
// }

// const fun= (a,b)=>{                  
//     return (a+b)%10;                 //type 4
// }


// console.log(fun(10,5));








//var let const

//var=function scope
//let=block scope
//const=block scope


// const temp=(a) => {
//     var user=a;
//     console.log("hi ",a)
// }

// temp("Harshit")
// console.log(user);          //undefined as user is in var type i.e function scope



//progrm

const n = parseInt(prompt("Enter the number of subjects:"));
let total = 0;
let maxi=0;
let sub="";
for (let i = 0; i < n; i++) {
    let subi= prompt(`Enter the name of subject no. ${i + 1}:`);
    let temp = parseInt(prompt(`Enter the marks of subject no. ${i + 1}:`));
    total+=temp;
  if(maxi<temp){
    maxi=temp;
    sub=subi;
    
  }
}

let percent = (total / (n * 100)) * 100;

console.log(`Marks of ${n} subjects is ${total}`);

if (percent >= 90) {
    console.log("Grade A");
} else if (percent >= 80) {
    console.log("Grade A-");
} else if (percent >= 70) {
    console.log("Grade B");
} else if (percent >= 60) {
    console.log("Grade C");
} else if (percent >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade E");
}


console.log(`Highest Marks is ${maxi} and subject is ${sub}`);












