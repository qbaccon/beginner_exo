const content = document.querySelector("#res_js");
let i = 0;
content.innerHTML = content.innerHTML + i + "</br>";
i++;
while (i < 101)
{
	if (i % 15 == 0)	
		content.innerHTML = content.innerHTML + "FizzBuzz </br>";
	else if (i % 3 == 0)
		content.innerHTML = content.innerHTML + "Fizz </br>";
	else if (i % 5 == 0)
		content.innerHTML = content.innerHTML + "Buzz </br>";
	else
		content.innerHTML = content.innerHTML + i + "</br>";
	i++;
}