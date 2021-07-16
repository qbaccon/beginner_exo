<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="main.css"/>
		<meta name="viewport" content="width=device-width, initialscale=1.0">
		<title>Check Password</title>
	</head>
	<body>
		<form action="">
		<fieldset>
			<legend>Register:</legend>
			<label for="login">Login: </label>
			<input type="text" name="login"><br>
			<label for="password">Password: </label>
			<input type="password" name="password" id="password">
			<span id="strong_mes"></span>
			<br>
			<label for="check-password">Re-enter your password:
			</label>
			<input type="password" name="check-password" id="checkpassword">
			<span id="message"></span>
			<br>
			<input type="button" value="Send">
		</fieldset>
		</form>
	<script type="text/javascript" src="main.js"></script>
	</body>
</html>