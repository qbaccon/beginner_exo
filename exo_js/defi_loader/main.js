const loading = document.getElementById("loadingAnimation") ;
const content = document.getElementById("displayContent") ;
window.onload = showContent(loading, content);

function showContent(loading, content)
{
	window.setTimeout(function(){
		loading.style.display = "none";
		content.style.display = "inline";
	}, 3000);
}