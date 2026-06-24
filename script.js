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



