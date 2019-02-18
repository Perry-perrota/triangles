//function that executes when submit button is clicked
function tcheck(){
  //accessing values from html form
  var a=parseInt(document.getElementById("num1").value);
  var b=parseInt(document.getElementById("num2").value);
  var c=parseInt(document.getElementById("num3").value);
  var dimensions=[];
  dimensions.push(a,b,c);

  //check if the values input can form a triangle
if(dimensions[0] + dimensions[1] > dimensions[2] && dimensions[1] + dimensions[2] > dimensions[0] && dimensions[0] + dimensions[2] > dimensions[1]===true) {
//check for equilateral properties
  if (dimensions[0]==dimensions[1] && dimensions[1]==dimensions[2]){
    document.getElementById("output").innerHTML="This is an equilateral triangle";
  }
  //check for isosceles triangle
  else if (dimensions[0]==dimensions[1] && dimensions[1]!==dimensions[2]) {
    document.getElementById("output").innerHTML="This is an isosceles triangle";
  }
  //check for a scalene triangle
  else {
    document.getElementById("output").innerHTML="This is a scalene triangle";
  }
  }
  //output when the values given dont form a triangle
else {
      document.getElementById("output").innerHTML="not able to form a triangle.Try again with other values";

}
}
