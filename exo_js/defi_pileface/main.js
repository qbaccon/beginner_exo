function headsOrTails ()
{
	let n;
	n = Math.floor(Math.random() * 2);
	if (n)
		result.textContent = "Heads";
	else
		result.textContent = "Tails";
}

const btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", headsOrTails);