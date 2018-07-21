var flag =0;
var arr = [];
var mark = "";
arr[0] = "";
arr[1] = "";

$(".a").click(function(){
	arr[flag]+="1";
	if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".b").click(function(){
	arr[flag]+="2";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".c").click(function(){
	arr[flag]+="3";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".d").click(function(){
	arr[flag]+="4";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".e").click(function(){
	arr[flag]+="5";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".f").click(function(){
	arr[flag]+="6";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".g").click(function(){
	arr[flag]+="7";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".h").click(function(){
	arr[flag]+="8";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".i").click(function(){
	arr[flag]+="9";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});
$(".j").click(function(){
	arr[flag]+="0";
    if(flag === 0)
    $("input").val(arr[flag]);
    else
    $("input").val(arr[0]+mark+arr[1]);	
});

$(".clear").click(function(){
	flag=0;
	arr[0]="";
	arr[1]="";
	mark ="";
    $("input").val("");
});

$(".veod").click(function(){
	if(flag !== 1)	
	{
	mark = "+";	
	flag++;
    $("input").val(arr[0]+"+");
    }
});

$(".pahot").click(function(){
	if(flag !== 1)	
	{
	mark = "-";	
	flag++;
    $("input").val(arr[0]+"-");
    }
});

$(".kaful").click(function(){
	if(flag !== 1)	
	{
	mark = "*";	
	flag++;
    $("input").val(arr[0]+"*");
    }
});

$(".hiluk").click(function(){
	if(flag !== 1)	
	{
	mark = "/";	
	flag++;
    $("input").val(arr[0]+"/");
    }
});

$(".shave").click(function(){
	if(flag === 1)	
	{
	parseInt(arr[0]);	
	parseInt(arr[1]);
	if(mark === "+")
	{
	$("input").val(parseInt(arr[0])+parseInt(arr[1]));
	var tmp =parseInt(arr[0])+parseInt(arr[1]);
	flag=0;
	arr[0]=String(tmp);
	arr[1]="";
	mark ="";	
	}
	else if(mark === "-")
	{
	$("input").val(arr[0]-arr[1]);
	var tmp =parseInt(arr[0])-parseInt(arr[1]);
	flag=0;
	arr[0]=String(tmp);
	arr[1]="";
	mark ="";	
	}
	else if(mark === "*")
	{
	$("input").val(arr[0]*arr[1]);
	var tmp =parseInt(arr[0])*parseInt(arr[1]);
	flag=0;
	arr[0]=String(tmp);
	arr[1]="";
	mark ="";	
	}
	else if(mark === "/")
	{
	$("input").val(arr[0]/arr[1]);
	var tmp =parseInt(arr[0])/parseInt(arr[1]);
	flag=0;
	arr[0]=String(tmp);
	arr[1]="";
	mark ="";	
	}
    
    }
});