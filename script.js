var music = document.getElementById("show");
var elements = document.querySelectorAll(".platformbuttons");
let opened = false;

music.addEventListener("click", thisfunc)

function thisfunc () {
	console.log(opened)
		
		if(opened){
			
			for (let i = 0; i < elements.length; i++) {
				music.innerText = "Show Links";
				elements.item(i).classList.add("displaynone")
			}
			opened = false;}
		else if(!opened){
			music.innerText = "Hide Links";
			for (let i = 0; i < elements.length; i++) {
				elements.item(i).classList.remove("displaynone")
			}
			opened = true;}
}
console.log(elements)