// function validateSubmit() {
//   var YourName=document.getElementById("YourName").value;
//   var CrushName=document.getElementById("CrushName")value;
//
//   alert("fjdlsfj");
// }
function validateSubmit() {
  var YourName=document.getElementById("YourName").value;
  var CrushName=document.getElementById("CrushName").value;

  if(YourName==="") {
    alert("Enter YourName");
  }
  else if(CrushName==="") {
    alert("Enter Your CrushName")
  }
  else {
    calcYourLove();
  }
}

function calcYourLove() {

  var n=Math.floor(Math.random()*100)+1;
  document.getElementById("demo").innerHTML = "Your Love percentage is " + n +"%";
}
