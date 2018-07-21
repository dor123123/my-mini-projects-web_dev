
//connect var box to div by id box
var box = document.getElementById("box");

//connect var reat to span by id reat
var reat = document.getElementById("reat");

//random colors
var c1 = 0;
var c2 = 0;
var c3 = 0;

//random position(margin)
var p1 = 0;
var p2 = 0;
var p3 = 0;
var p4 = 0;

//set var for time
start1 = "";

//start game with start function
start();

//random function that random numbers for colors and position(margin)
function random(){
 c1 = Math.floor(Math.random() * 256).toString();
 c2 = Math.floor(Math.random() * 256).toString();
 c3 = Math.floor(Math.random() * 256).toString();

 p1 = Math.floor(Math.random() * 350).toString();
 p2 = Math.floor(Math.random() * 350).toString();
 p3 = Math.floor(Math.random() * 350).toString();
 p4 = Math.floor(Math.random() * 350).toString();
}

//start function that use random function and set colors , radius and count time
function start(){
	box.style.display = "block";
	random();
	var start = new Date().getTime();
	start1=start;
	box.style.background = "rgb("+c1+","+c2+","+c3+")";
	box.style.borderRadius =(Math.floor(Math.random() * 150) + 2).toString()+"px";
	box.style.margin = p1+"px"+" "+p2+"px"+" "+ p3+"px"+" "+ p4+"px";
    
}

//onclick function when click set the time from the start function and set it to span, then start again
	box.onclick= function(){
     var end = new Date().getTime(); 
     reat.innerHTML=(end - start1)+"s";
     box.style.display="none";
     setTimeout(function(){	
      start();
  }, Math.floor(Math.random() * 3000));
     
}