document.write("<h2> What is object literals:</h2>");

document.write("<p> Object literals in JavaScript are a way to define objects using a simple and concise syntax. They are written as a comma-separated list of key-value pairs enclosed in curly braces {}. Each key-value pair is separated by a colon :.</p>");

let name= "Bilal Ahmad";
let education= "Bachelor's";
let age= 23;

var obj = {
    name: name,
    education: education,
    age: age

};

// for printing separately step by step

document.write("Name :" + name +"<br>");
document.write("Education :" + education + "<br>");
document.write(" Age :" + age + "<br>");

// printing at once

document.write( JSON.stringify(obj));

document.write("<br><br>");

// using advance method in ECMA6
document.write("Using the advance method in ECMA6 ( Object Literals)");
document.write("<h3>Note :</h3> <p> if the object propert  name and the assigning variable name s same then we will use only one of them . no need to use both of them. its bcz of ECMA</p>");

document.write("<br><br> For Example :");

let Name= " Bilal Ahmad";
let Class= "Bachelor's";
let University ="AUP";

var obj={
    Name,
    Class,
    University,
};
document.write("Name" + Name + "<br>");
document.write("Class : " + Class + "<br>");
document.write("University :" + University + "<br>");
console.log(obj);

// second way of using object literals

document.write(" <br> <h3>Use Variable as a property name </h3>");
let n= "student";

var obj= {
    [n + "name"] : "Bilal Ahmad",
    course : "Computer Science",
    detail : function(){
        return `${this.studentname} is the student of ${this.course}`
    }
};

console.log(obj);
console.log(obj.detail);
document.write(obj.detail());

// new function syntax

document.write("<br> New Function Syntax in Object Literals <br>");

// old method
let obj1={
    Name: "Zahid Khttak",
    show : function(){
        console.log(this.Name);
    }
}

// new method

let obj2={
    Name : "Hilal Azam Binori",
    show(){
        console.log(this.Name);
    }
}