const pclick = document.querySelector("#clickOnMe");

pclick.addEventListener("mouseover",  function()
{
	pclick.style.cursor = grad;
});

pclick.addEventListener("click", function()
{
	console.log("clique reçu");
});