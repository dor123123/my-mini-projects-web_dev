 var ran = 0;
var num ="";
var i = Math.floor(Math.random() * 3);
 num1 = (Math.floor(Math.random() * 100)).toString();
 num2 = (Math.floor(Math.random() * 100)).toString();

  ran = Math.floor(Math.random() * 4);
 
 if(ran === 0)
 {
 num3 = Number(num1)+Number(num2);
document.getElementById("random").innerHTML= num1+ "+"+ num2+"= ?";
}
else if(ran === 1)
	 {
 num3 = Number(num1)/Number(num2);
document.getElementById("random").innerHTML= num1+ "/"+ num2+"= ?";
}
else if(ran === 2)
	 {
 num3 = Number(num1)*Number(num2);
document.getElementById("random").innerHTML= num1+ "*"+ num2+"= ?";
}
else
	 {
 num3 = Number(num1)-Number(num2);
document.getElementById("random").innerHTML= num1+ "-"+ num2+"= ?";
}

document.getElementById("num1").innerHTML= (Math.floor(Math.random() * 100)).toString();
document.getElementById("num2").innerHTML= (Math.floor(Math.random() * 100)).toString();
document.getElementById("num3").innerHTML= (Math.floor(Math.random() * 100)).toString();

if(i === 0)
document.getElementById("num1").innerHTML= num3.toString();
else if(i === 1)
document.getElementById("num2").innerHTML= num3.toString();
else
document.getElementById("num3").innerHTML= num3.toString();

document.getElementById("num1").onclick = function(){
if(num3.toString() === document.getElementById("num1").innerHTML)
{
document.getElementById("random").innerHTML= "WON!!!";
document.getElementById("num1").innerHTML= "WON!!!";
document.getElementById("num2").innerHTML= "WON!!!";
document.getElementById("num3").innerHTML= "WON!!!";
document.body.style.backgroundColor = "steelblue";
}
else
{
document.getElementById("num1").style.display="none";	
}	
}

document.getElementById("num2").onclick = function(){
if(num3.toString() === document.getElementById("num2").innerHTML)
{
document.getElementById("random").innerHTML= "WON!!!";
document.getElementById("num1").innerHTML= "WON!!!";
document.getElementById("num2").innerHTML= "WON!!!";
document.getElementById("num3").innerHTML= "WON!!!";
document.body.style.backgroundColor = "steelblue";	
}
else
{
document.getElementById("num2").style.display="none";	
}	
}

document.getElementById("num3").onclick = function(){
if(num3.toString() === document.getElementById("num3").innerHTML)
{
document.getElementById("random").innerHTML= "WON!!!";
document.getElementById("num1").innerHTML= "WON!!!";
document.getElementById("num2").innerHTML= "WON!!!";
document.getElementById("num3").innerHTML= "WON!!!";
document.body.style.backgroundColor = "steelblue";	
}
else
{
document.getElementById("num3").style.display="none";	
}	
}

document.getElementById("new").onclick = function(){

document.getElementById("num1").style.display="unset";		
document.getElementById("num2").style.display="unset";
document.getElementById("num3").style.display="unset";


document.body.style.backgroundColor = "white";
 num ="";
 i = Math.floor(Math.random() * 3);
 num1 = (Math.floor(Math.random() * 100)).toString();
 num2 = (Math.floor(Math.random() * 100)).toString();
  ran = Math.floor(Math.random() * 4);
 
 if(ran === 0)
 {
 num3 = Number(num1)+Number(num2);
document.getElementById("random").innerHTML= num1+ "+"+ num2+"= ?";
}
else if(ran === 1)
	 {
 num3 = Number(num1)/Number(num2);
document.getElementById("random").innerHTML= num1+ "/"+ num2+"= ?";
}
else if(ran === 2)
	 {
 num3 = Number(num1)*Number(num2);
document.getElementById("random").innerHTML= num1+ "*"+ num2+"= ?";
}
else
	 {
 num3 = Number(num1)-Number(num2);
document.getElementById("random").innerHTML= num1+ "-"+ num2+"= ?";
}
document.getElementById("num1").innerHTML= (Math.floor(Math.random() * 100)).toString();
document.getElementById("num2").innerHTML= (Math.floor(Math.random() * 100)).toString();
document.getElementById("num3").innerHTML= (Math.floor(Math.random() * 100)).toString();

if(i === 0)
document.getElementById("num1").innerHTML= num3.toString();
else if(i === 1)
document.getElementById("num2").innerHTML= num3.toString();
else
document.getElementById("num3").innerHTML= num3.toString();



	}