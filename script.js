//let is block-scoped variable that means the value is active within the blocks
let x=10;
console.log(x);

let userName="shantanu";
console.log(userName);
console.log(typeof(userName));//string


let age=22;
console.log(age);
console.log(typeof(age));//Number


let userIntro="Hi, I am"+" "+userName+"."+" "+"Now I am "+age+"Years old.";
console.log(userIntro);

let isHappy=true;
console.log(typeof(isHappy));//boolean


let a;
console.log(typeof(a));//undefined
let xy=undefined;
console.log(xy);

let Name="shantanu kumar";
console.log(Name);
Name="Shantanu kumar mahanta";//value can be changed
console.log(Name);





//USING const KEYWORD
//It is also block-scoped variable ,Only accessible with in the block ,Almost same to the let
//When once we assign value on a constant variable,We can not change the value during the programme
const PI=3.14;
console.log(PI); 
//const a;//Const declaration must be initilized




//USING var Keyword
{
    var number1=10;
}
console.log(number1);

// {
//     let number2=100;
// }
// console.log(number2);


console.log(Name1);

console.log(typeof(Name1));

var Name1="shantanu";
console.log(typeof(name));
console.log(name);
let name="shantanu kumar";