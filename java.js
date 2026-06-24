var a= 23;
var a = 32;

// console.log(a);

let b = 21;
b=90;

// console.log(b);

const c = 89;

// console.log(c);


const arrow = () =>{
    console.log("Hello World");
    if(true){
        let a = "No";
        console.log(a); // "No" blocked scoped
    }

    console.log(a); // 32 global var
}



let des = [23,43,12];
let [t, w, s] = des;

// console.log(t, w, s);


// let desObj={
//     name: "Ahmed",
//     id: 778115,
//     inClass: false
// }
// let {name, id, inClass} = desObj;

// console.log(name, id ,inClass);


// spread opreator

let arr = ["Ahmed", "zain", "ibrahim"];
let arr2 = [...arr, "Bilal", "Ali", "Rehen"];

// console.log(arr2);



const loop1 = "Hello World";

for(u of loop1){
    // console.log("ahmed");
}


// foreach 



// opsop.forEach(() =>{
//     console.log(`${a} ${b} Hello World`);
// })



// map

// let opsop = [67, 69];
 
// opsop.map(() => {
    
//     let num = [...opsop, 23,32];
//     console.log(opsop);
//     console.log(num);
    

// });



const okay = [1,2,3,4,5,6,7,8,9];

const retu = okay.filter((n => n % 2 === 0));
// console.log(retu);


// setInterval(() => {
//     const now = new Date();
    // console.log(now.toLocaleTimeString());
// });

// setTimeout(() => {
//     const now = new Date();
//     console.log(now.toLocaleTimeString());
// }, 1000);

// clearInterval(() => {
//     console.log(toLocaleTimeString());
// }, 1000);

// const obj={
//     name: "jack",
//     id: 778115,
//     greet(){
//         console.log("hello world")
//     }
// }

// console.log(obj)



// const obj={
//     name: "jack",
//     id: 778115,
//     greet(){
//         console.log("hello world")
//     }
// }


// localStorage.setItem("id", JSON.stringify(obj));

// const stored = localStorage.getItem("id");
// const parsed = JSON.parse(stored);


