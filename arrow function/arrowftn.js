// used Arrow function
var arrowFtn=()=>{
   var arrow= document.getElementById("arrowftn");
   arrow.classList.add("arrowcss");
   arrow.innerHTML="<h3>You have used the arrow function and applied the css class when you click the button.</h3> <br>";
   document.write("<br>");

}
var firstArrow=document.getElementById("arrowftn").addEventListener("click", arrowFtn);

// second example of arrow function

let secondArrowftn=()=>{
   let secondFtn= document.getElementById("secondftn");
   document.getElementById("secondftn").innerHTML="<p>this was the the second arrow function.</p>"
   secondFtn.setAttribute("style","color=red; ")
}
var secondArrow= document.getElementById("secondftn").addEventListener("click", secondArrowftn);

// third example of arrow finction

const thirdArrowftn=()=>{
   const thirdFtn= document.getElementById("")
}
