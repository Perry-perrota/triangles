function tcheck(a,b,c){
//var nameValue =document.getElementById("num1");
var a = parseInt(document.getElementById("num1"));
var b = parseInt(document.getElementById("num2"));
var c = parseInt(document.getElementById("num3"));
//alert(nameValue.value);
//check if its a Triangle
if (a+b>c || b+c>a || a+c>b){
//check for equilateral Triangle
if (a===b===c){
  alert("This is an equilateral triangle");
 }
 // check for an isosceles triangle
  else if(a===b || b===c || a===c){
    alert("this is an isosceles triangle");
  }
//check for a scalene triangle
  else
{
  alert("is a scalene Triangle")
}
}
else {
  alert("Its not a triangle");
}
}
