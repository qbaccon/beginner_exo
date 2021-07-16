<?php
class Animal
{
	public function respire()
	{
		echo " respire";
	}
}

class Oiseau extends Animal
{
	public $name;
	public $age;

	public function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;
	}

	public function vole()
	{
		echo " peut voler";
	}
}

class Aigle extends Oiseau
{
	public function __construct($name, $age)
	{
		parent::__construct($name, $age);
	}
}

class Faucon extends Oiseau
{
	public function __construct($name, $age)
	{
		parent::__construct($name, $age);
	}
}

class Reptile extends Animal
{
	public $name;
	public $age;

	public function __construct($name, $age)
	{
		$this->name = $name;
		$this->age = $age;
	}

	public function ecaille()
	{
		echo " a des écailles";
	}
}

class Tortue extends Reptile
{
	public function __construct($name, $age)
	{
		parent::__construct($name, $age);
	}
}

class Crocodile extends Reptile
{
	public function __construct($name, $age)
	{
		parent::__construct($name, $age);
	}
}
?>