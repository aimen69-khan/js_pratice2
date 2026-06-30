// var a = 6;
// var a = 5;

// What do u think the output in console.log

// console.log(a);

// if u said 5 you are correct if U said 6 u are wrong
// because var can be redeclard and reassigned



// but in let the story is different

// let b = 3;

// let b = 4;

// b = 5;

// console.log(b);

// in let u can reassign it u can't redeclared and the answer is 5



// in const is very different story

// const c = 23;
// c = 89;

// console.log(c);

// in const u can't reassign or redeclared it the value is fixed


// array destructuring


// var names = ["jack", "jake", "vik"];

// var [o,p,p] = names;

// console.log(o, p, p);



// Object destructuring


// var obj ={
//   name: "Ahmed",
//   id: 778115
// };

// const {name, id} = obj

// console.log(name, id);



// spread opreator


// let jo1 = [23, 23, 23];
// let jo2 = [...jo1, 23, 42, 21];

// console.log(jo2)


// for/of loop

// var hello = "Hello World";

// for(let i of hello){
//   console.log("NOT Hello World!");
// }



// Maps And Sets


// let map = new Map;

// map.set("a", "Hello World");
// map.set("b", 2);

// console.log(map.get("a"));


// const set = new Set("qweqweqwe");

// console.log(set);


// Classes

// class Animal {
//   speak() {
//     console.log("The Animal is a dog"); }
// }

// const dog = new Animal();

// console.log(dog.speak);



// class mobile {
//     constructor(name){
//         this.name = name;

//     }

//     methid(){
//         return this.name;
//     }
// }

// class price extends mobile{
//     constructor(name, price1){
//         super(name);
//         this.price = price1;
//     }

//     priceOfPro(){
//         return this.methid + " it is " +this.price
//     }
// }

// const myMobile = new price("Itel s24", 24000);
// myMobile.priceOfPro();
// console.log(myMobile);


// class Student{
//     constructor(name, id, age, alive){
//         this.name = name;
//         this.id = id;
//         this.age = age;
//         this.alive = alive;
//     }

//    static eat(){
//         let e = "HE Eats too Much!!";
//         console.log(e);
//     }
// }

// const r = new Student("Bilal", 778115, 16, true);
// Student.eat();
// r.eat();
// console.log(r);



// class Infor{
//    static setValue(name, id){
//        let obj2 = {age: 16, alive: true};

//        localStorage.setItem("obj", JSON.stringify(obj2));
//        localStorage.setItem("id", id);
//     }

//    static getValue(){
//     const w = localStorage.getItem("obj");
//     const jon = JSON.parse(w);
//     console.log(jon);
//     return jon;
//    }
// }

// Infor.setValue("Ahmed", 778);
// Infor.getValue();


// class Teacher{
//     constructor(name, id, causes, ed){
//         this.name = name;
//         this.id = id;
//         this.causes = causes;
//         this.education = ed;
//     }
//     reselt(){
//         return this.name +" Present Today  *-*";
//     }
// }


// class Headmister extends Teacher{
//     constructor(name, id, causes, ed, check){
//         super(name, id, causes, ed);
//         this.checking = check;
//     }
//     checked(){
//         return this.name +" Has been Checked!";
//     }
// }

// const r = new Headmister("Ahmed", 778115, "WNA", "inter Pass", "Checked")

// console.log(r);




// const add = (a,b) => a+b;
// const subt = (a,b) => a-b;
// const mult = (a,b) => a*b;
// const div = (a,b) => a/b;

// let opreators = ["+", "-", "*", "/"];
// let userOutput1 = +prompt("Enter An Number!");
// let userOutput2 = +prompt("Enter Another Number!");
// let userOutput3 = prompt("Enter An Opreator");

// while(!opreators.includes(userOutput3)){
//     userOutput1 = +prompt("Try Again1");
//     userOutput2 = +prompt("Try Again2");
//     userOutput3 = prompt("Try Again3");
// }

// console.log(userOutput1, userOutput3, userOutput2);

// if(userOutput3 === opreators[0]){
//     console.log(add(userOutput1, userOutput2));

// }else if(userOutput3 === opreators[1]){
//     console.log(subt(userOutput1, userOutput2));

// }else if(userOutput3 === opreators[2]){
//     console.log(mult(userOutput1, userOutput2));

// }else if(userOutput3 === opreators[3]){
//     console.log(div(userOutput1, userOutput2));

// }



// let time = setInterval(()=>{
//     console.log("Hello World");
// },[1000]);

// setTimeout(()=> {
//     clearInterval(time);
//     console.log("Time Stop")
// },[3000]);