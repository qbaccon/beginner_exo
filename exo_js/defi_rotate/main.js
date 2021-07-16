function detectOrientation()
{
	const content = document.querySelector("#displayContent");
	const warning = document.querySelector("#rotateScreen");
	if (screen.orientation['angle'] != 0)
	{
		content.style.display = "block";
		warning.style.display = "none";
	}
	else
	{
		content.style.display = "none";
		warning.style.display = "block";
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	window.addEventListener("resize", detectOrientation) ;
	detectOrientation() ;
});