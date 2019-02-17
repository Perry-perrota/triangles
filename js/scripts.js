//function that executes when submit button is clicked
function tcheck(){
  //accessing values from html form
  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c=parseInt(document.getElementById("num3").value);
  var dimensions=[];
  dimensions.push(a,b,c);
if (dimensions[0] + dimensions[1] > dimensions[2] && dimensions[1] + dimensions[2] > dimensions[0] && dimensions[0] + dimensions[2] > dimensions[1]===true ) {
  //check for equilateral triangle
  if (dimensions[0]===dimensions[1] && dimensions[1]===dimensions[2]===true) {
    alert("this is an equilateral");
  }
  //check for isosceles triangle
  else if (dimensions[0]===dimensions[1]) && dimensions[1]!==dimensions[2]===true {
    alert("this is an isosceles");
  }
  else (dimensions[0]!==dimensions[1]) && dimensions[1]!==dimensions[2]===true {
    alert("this is an scalene");
  }
}
else {
    alert("not able to form a triangle.Try again with other values");
}



}
