let toggle = document.querySelector("#toggle");

toggle.addEventListener("click",  function()
{
	console.log(toggle.className)
	if (toggle.className == "toggle")
		toggle.className = "";
	else
		toggle.className = "toggle";
});