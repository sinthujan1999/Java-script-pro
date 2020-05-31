function square() {
  var Num = prompt("ENTER THE NUMBER");
  var Result = Num*Num;
  alert(Result);
}

  var Num1 = 4;
  var Num2 = 2;

function addNum() {
var addNumResult = Num1 + Num2;
  document.write("The addition of the two numbers is "+ " "+addNumResult );
}

function multiNum() {
var multiNumResult = Num1 * Num2;
document.write("The subtraction of the two numbers is"+" " + multiNumResult);
}

function subtractNum() {
var subtractNumResult = Num1-Num2;
document.write("The subtraction of the two numbers is" +" "+ subtractNumResult);
}

function divideNum() {
var divideNumResult = Num1 / Num2;
document.write("The division of the two numbers is" +" "+ divideNumResult);
}

function Print() {
alert("Hello" + " " + "world");
}

function Cube() {
  var Num = prompt("ENTER THE NUMBER");
  var Result = Num*Num*Num;
  alert(Result);
}

function object() {
  var Person={firstName:"Nimal" , lastName:"Raj", age:"15", city:"Kandy"};
alert("My"+" "+"name"+" "+"is"+" " +Person.firstName +" "+ Person.lastName+"."+"I'm"+" "+Person.age+" "+"year's"+" "+"old"+"  "+"ago"+"."+" " +"I"+" "+"Live"+" "+" "+"in"+" "+Person.city+".");
}

function object1() {
 var Course={courseName:"BIT", courseFee:"Rs 150 000", startDate:" 12.06.2018", center:"Our Office"};
  document.write("Course"+" "+"Name"+":"+Course.courseName+"<br>"+"Course"+" "+"fee"+":"+Course.courseFee+"<br>"+"start"+" "+"Date"+":"+Course.startDate+"<br>"+"Course"+" "+"center"+":"+Course.center);
}
