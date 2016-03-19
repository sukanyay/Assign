<html>
  <head>
	<title>Home Work </title>
	 </head>
	   <body>
		<script>
			var carDetails = {
				noOfTyres: 4,
				noOfGears: 5,
				comfort: function () {
					document.write("It has a high level of comfort");
				}
			}

			var benzCar = {
				color: "black",
				manufacturer: "Benz",
				drivingWay: function() {
					document.write("it drives very smooth.");
				}
			};

			var audiCar = {
				color: "White",
				manufacturer: "Audi",
				drivingWay: function() {
					document.write("it drives very Fast.");
				}
			}

			benzCar.__proto__ = carDetails;
			audiCar.__proto__ = carDetails;


			function showDetails(carObj) {
				document.write("model name is "+ carObj.manufacturer);
				document.write("noOfGears "+ carObj.noOfGears);
				document.write("color " + carObj.color);
				carObj.comfort();
				carObj.drivingWay();
			} 

			showDetails(benzCar);
			showDetails(audiCar);
/*CarDetails is an parent object which has the common properties in benzCar and audiCar	and inheriting
the properties from child objects(benzCar & audiCar) with the help of the keyword __proto__*/	

//Constructor
function watch(name,color,warranty,cost){
	this.branddName="name";
	this.color="color";
	this.warranty="warranty";
	this.cost="cost";
}
var watch1=new watch("fastTrack","black","oneYear",250);
var watch2=new watch("bulova","brown","twoYear",334);
var watch3=new watch("rolex","white","threeYear",500);

document.write("watch1" +"watch1.name is" + "watch2" + "watch2.name is" );
/* watch is a parent object where as watch1,watch2,watch3 are the child objects 
 which creates instances to the parent object */


//Prototype
function watch(name,color,warranty,cost){
	this.brandName="name";
	this.color="color";
	this.warranty="warranty";
	this.cost="cost";
}
watch.Prototype.showSpecs=function(){
	document.write("watch1" +"watch1.name is" + "watch2" + "watch2.name is" );
}
var watch1=new watch("fastTrack","black","oneYear",250);
var watch2=new watch("bulova","brown","twoYear",334);
var watch2=new watch("rolex","white","threeYear",500);

watch1.showSpecs();
watch2.showSpecs();
watch3.showSpecs();

/* In prototype we can create a new property outside the function with the keyword Prototype.
 so, here in the parent object(watch) I added a new property showSpecs */


//Event Handling
<div id="test"> </div>
 function output(){
 	document.write("Hello world")
 }

document.queryselector('#test').addEventListener("click",output);

/
/* Event'click' is an action that computer can react to and some specific action needs to 
take place we write the function which deals with current event this is event handling and by using the
keyword addEventListener(to display the output "Hello world") */

//Hoisting 

var name="sai";
var age=30;
document.write(name+":"+age);

/* The output is sai:30 */

var name="sai"
document.write(name+":"+age);
var age=30;

/* The output is sai:undefined. Hoisting means it only take the variable to the top not the value*/


      </script>
	</body>
</html>