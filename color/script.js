var a= document.querySelector("h4");
var cl1= document.querySelector(".color0");
var cl2= document.querySelector(".color1");
var cl3= document.querySelector(".color2");
var body= document.getElementById("body");
function setcolor() {
	body.style.background = "linear-gradient(to left, "+cl1.value+" ,"+cl2.value+" ,"+cl3.value+")";
	a.textContent = body.style.background + ";";
}
cl1.addEventListener("input",setcolor)

cl3.addEventListener("input",setcolor)
cl2.addEventListener("input",setcolor)
