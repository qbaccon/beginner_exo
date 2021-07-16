function testlength(string)
{
	if (string.length > 15)
		return true;
	else
		return false;
}

console.log(testlength("aaa"));
console.log(testlength("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));