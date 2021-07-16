const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function(event)
{
	let text = document.querySelector("input[name='text']");
	if (text.value)
		console.log("Texte non vide");
	else
		console.log("Texte vide");
	event.preventDefault();
});