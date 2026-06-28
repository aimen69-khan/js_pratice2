let oi = () =>{
    console.log("Hello World");
}

const markesOfStud = () => {
let students = ["ahmed", "bilal", "ali", "zain", "rahen"];
let checkPass = prompt("Enter Your Name to see if you passed or not");
let lowerCase = checkPass.toLowerCase();

for(let i=0; i<students.length; i++){
    if(students[0] === lowerCase){
        console.log(checkPass+" Passed: 93% :)");

    }else if(lowerCase === students[1]){
        console.log(checkPass+" Passed 100% :)");

    }else if(students[2] === lowerCase){
        console.log(checkPass+" Passed: 75% :)");

    }else if(students[3] === lowerCase){
        console.log(checkPass+" Failed: 37% :|");

    }else if(students[4] === lowerCase){
        console.log(checkPass+" Passed: 70% :)");

    }else{
        console.log(checkPass+" Student Not Found :(");
    }
}
}



// () => {
//   console.log("Hello World!")
// }



// var m = 051;
// console.log(m);



// class infor {
//     constructor(name,id,alive) {
//         this.name = name;
//         this.id = id;
//         this.alive = alive;
//     }

//     drive(){
//         let op = "Hello World!";
//     }
// }

// class infor2 extends infor {
//     constructor(name, id, alive, address){
//         super(name, id, alive);
//         this.address = address;
//     }

//     hisName(){
//         return "hello"
//     }
// }


// let class1 = new infor("Ahmed", 778115, true);
// let class2 = new infor2("PECHS Block 6");
// class1.drive();
// class2.hisName();

// class1 = class2;

// console.log(class1);
// console.log(class2);



// class Car {
//   constructor(name) {
//     this.brand = name;
//   }

//   present() {
//     return 'I have a ' + this.brand;
//   }
// }

// class Model extends Car {
//   constructor(name, mod) {
//     super(name);
//     this.model = mod;
//   }  
//   show() {
//       return this.present() + ', it is a ' + this.model
//   }
// }
// const mycar = new Model("Ford", "Mustang");
// mycar.show();

// console.log(mycar);



// const fruiteName = new Map();

// fruiteName.set("apple", 300);
// fruiteName.set("mango", 100);
// fruiteName.set("banana", 150);
// fruiteName.set("grape", 350);

// let found = fruiteName.get("mango");
// let check = fruiteName instanceof Map;
// let checkSize = fruiteName.size;
// console.log(fruiteName);
// console.log(typeof(fruiteName));
// console.log(found);
// console.log(check);
// console.log(checkSize);


