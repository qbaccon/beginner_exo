const check = document.getElementById("check");

check.addEventListener("click", function() {
	let year = document.getElementById("year").value ;
	let res = document.querySelector("#result");
	if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
		res.textContent = "L'année " + year + " est bissextile";
	else
		res.textContent = "L'année " + year + " n'est pas bissextile";
	console.log(year);
});