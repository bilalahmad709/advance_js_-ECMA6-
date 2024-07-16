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