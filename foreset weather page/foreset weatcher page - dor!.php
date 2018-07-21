<?php


$error = "";
$display= "";
$display1= "";
// function checkCityOrCountry($name)
// {
//     $countries = file_get_contents('https://api.vk.com/method/database.getCountries?need_all=1&count=1000&lang=en');
//     $arr = json_decode($countries, true);
//     foreach ($arr['response'] as $country) {
//         if (mb_strtolower($country['title']) === mb_strtolower($name)) {
//             return true;
//         }
//     }

//     return false;
// }

if($_GET["city"] != "")
{

	$error ="";
    // include("includedfile.php");
    
    // echo file_get_contents("https://www.weather-forecast.com");



$url = 'https://www.weather-forecast.com/locations/'.$_GET["city"].'/forecasts/latest';


$file_headers = @get_headers($url);
if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
    $exists = false;
}
else {
    $exists = true;
}

if($exists){
$content = file_get_contents($url);
$first_step = explode( '<p class="b-forecast__table-description-content">' , $content );
$second_step = explode("</p>" , $first_step[1] );



    $display = $second_step[0];

    $content = file_get_contents($url);
$first_step = explode( '<div class="static-location-map small-12 large-4 columns">' , $content );
$second_step = explode("</div>" , $first_step[1] );



    $display1 = $second_step[0];
}
else{
 $display = "";
 $display1= "";
 $error = '<div <br> <p style="color: darkred"><strong>Error!! could not find the city!</p><p style="color: darkred">please enter a vaild name</p></strong></div>';
}
}else{

 $display = "";
 $display1= "";
 $error = '<div<p><strong>you must enter a city name!!!</p></strong></div>';

}


?>

<!DOCTYPE html>
<html>
<head>
</head>
<body>

<style type="text/css">
	
	body{
		font-family: serif;
		text-align: center;
		background: #00416A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #E4E5E6, #00416A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #E4E5E6, #00416A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
	.countainer{
		    width: 400px;
           margin: 0 auto;
	}

    .form-group{
    	

    }

    .in{
    	font-size: 20px;
        margin: 5px;
       padding: 5px;
    	
    }

    button{
       
       margin: 5px;
       padding: 5px;
    	background: steelblue;
    	color: white;

    }

    .display{
    	width: 400px;
        margin: 20px auto;
    }

</style>


<div class="container">
	
	<h1>What's The Weather?</h1>

	  

	  <form method="get">

	  <div class="form-group">
	  <input type="text"  class="in" required name="city" placeholder="  Enter a city name">
	  </div>

	  <button type="submit">Search</button>
	  	
	  </form>

	  <div><? echo $error; ?></div>

	  <div class="display"><? echo $display; ?></div>
	  <div class="display"><? echo $display1; ?></div>


</div>

</body>
</html>