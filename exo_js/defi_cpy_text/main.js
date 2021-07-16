const buttonCopy = document.getElementById("button-copy");
const buttonPaste = document.getElementById("button-paste");

buttonCopy.addEventListener("click", function() {
	let txt_c = document.getElementById("copytext");
	txt_c.select();
	document.execCommand("copy");
});

buttonPaste.addEventListener("click", function() {
	let txt_p = document.getElementById("paste-text");
	txt_p.select();
	txt_p.focus();
	document.execCommand("paste");
});