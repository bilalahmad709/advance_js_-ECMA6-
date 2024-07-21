document.write("<h2> What is spread Operator</h2>");

// definition
document.write("<p>The spread operator in JavaScript, represented by three dots (...), allows you to expand elements of an iterable (like an array or object) in places where zero or more arguments or elements are expected.</p>");


// for example 

//  function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // 6

function sum(name, ...args){
    console.log(arguments);

    document.write(`Hello ${name} :`);

    let sum =0;
    for(let i in args){
    sum += args[1];
}

document.write(sum);
}
var arr=[10, 20, 30, 40];
sum("Bilal Ahmad", ...arr);

document.write("<br><br>");

// uses of spread Operator in arrays

var arr1= [10,20,30];
var arr2=[40,50,60];
var arr3=[...arr1,...arr2];
document.write("After the use of spread operator the value of the third array is :" + arr3);

// uses of spread operator in objects

var obj1={
    name: "Bilal",
};

var obj2={
    age: 23,
};

var  obj3={...obj1, ...obj2};
console.log(obj3);