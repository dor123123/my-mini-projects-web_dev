// oop - opject orient programing:

 function Dog(dname , dage){
this.dname = dname;
this.dage = dage;
 this.bark =function()
{
  console.log(this.dname + "just barked!");
}

}



var rusty = new Dog("rusty",3);
var fido = new Dog("fido",1);

console.log(rusty);
console.log(fido);

rusty.bark()
fido.bark()

//create opjects , useing prototype for methods and..
// ..and..functions for all objects
//very strong thing!
function Vehicle(make , model ,year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
	}

	Vehicle.prototype.turnOn = function  (){
		this.isRunning = true;

	}
	 Vehicle.prototype.turnOff = function (){
		this.isRunning = false;
		
	}

	Vehicle.prototype.honk = function (){
		if(this.isRunning)
			return "beep!";
	}



var car = new Vehicle("hand","moto" ,1950);
console.log(car);
console.log(car.turnOn());
console.log(car.honk());

//closures a function that return fuction:

function counter(){
	var count = 0
	return function(){
		return ++count
	}
}
counter1 = counter()
counter2 = counter()
console.log("counter1 = " + counter1())
console.log("counter1 = " + counter1())
console.log("counter2 = " + counter2())
console.log("counter1 = " + counter1())