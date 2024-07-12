// used Arrow function
var arrowFtn=()=>{
   var arrow= document.getElementById("arrowftn");
   arrow.classList.add("arrowcss");
   arrow.innerHTML="<h3>You have used the arrow function and applied the css class when you click the button.</h3>";

}
var arrow=document.getElementById("arrowftn").addEventListener("click", arrowFtn);

