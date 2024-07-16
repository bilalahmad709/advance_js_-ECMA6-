function sum(){
    console.log(arguments);
    let sum=0;
    for(let i in arguments){
        sum += arguments[i];
    }
    document.write("the total sum of the values is =" + " " + sum + "<br>");
}
sum(20,30,40);
sum( 30, 40, 50,40)

function summ(name,...args){

document.write("<br>" +`Hello ${name} :`);
let summ =0;
for (let i in args){
    summ += args[i];

}
document.write(summ + "<br> <br>");

}
summ("<br>" + "Bilal Ahmad the addtion of these values is  :", 20, 30, 40);

summ("<br>" + "Waqar the addition of these values is :",30, 40,50,20);