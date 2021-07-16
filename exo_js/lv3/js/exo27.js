function rand_010()
{
	n = Math.floor(Math.random() * 10);
	console.log(n);
	if (n >= 4 && n <= 6)
		return false;
	else
		return true;
}

console.log(rand_010());