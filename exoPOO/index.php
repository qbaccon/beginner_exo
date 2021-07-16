<?php include "film.php" ?>
<?php include "calculatrice.php" ?>
<?php include "animal.php" ?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title> Exo POO </title>
	</head>
	<body>
		<?php
			$exfilm = new Film(0, "La POO", "Jean-Pierre", 2000);
			echo "ID: " . $exfilm->getid() . "</br>";
			echo "Titre: " . $exfilm->getnom() . "</br>";
			echo "Real: " . $exfilm->getreal() . "</br>";
			echo "Année: " . $exfilm->getannee() . "</br>";
		?>
		</br>
		</br>
		</br>
		<?php
			echo "2 + 5 = " . Calculatrice::addition(2, 5) . "</br>";
			echo "5 - 2 = " . (New Calculatrice)->soustraction(5, 2) . "</br>";
			echo "2 * 5 = " . (New Calculatrice)->multiplication(2, 5) . "</br>";
			echo "10 / 5 = " . (New Calculatrice)->division(10, 5) . "</br>";
			echo "10 / 0 = " . (New Calculatrice)->division(10, 0) . "</br>";
			echo "5 % 5 = " . (New Calculatrice)->modulo(5, 5) . "</br>";
		?>
		</br>
		</br>
		</br>
		<?php
			$exAigle = new Aigle("Ikarus", 4);
			$exFaucon = new Faucon("Shenu", 2);
			$exTortue = new Tortue("Franklin", 10);
			$exCroco = new Crocodile("Rex", 14);
			echo $exAigle->name;
			echo " est un " . get_class($exAigle) . ", il";
			$exAigle->vole();
			echo "</br>";
			echo $exFaucon->name;
			echo " est un " . get_class($exFaucon) . ", il";
			$exFaucon->vole();
			echo "</br>";
			echo $exTortue->name;
			echo " est une " . get_class($exTortue) . ", il";
			$exTortue->ecaille();
			echo "</br>";
			echo $exCroco->name;
			echo " est un " . get_class($exCroco) . ", il";
			$exCroco->ecaille();
			echo "</br>";
			echo $exCroco->name;
			$exCroco->respire();
			echo "</br>";		
		?>
	</body>
</html>