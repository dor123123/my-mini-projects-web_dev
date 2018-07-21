

<?php

if( $_POST["email"] && $_POST["subject"] && $_POST["ask"])
{
if(mail($_POST["email"], $_POST["subject"], $_POST["ask"])){

    $massage = "Your massage was sent!";

}else{

	$massage = "Error the massage did not send!";

}

}



?>


<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
</head>
<body>

<div class="container">
	
	<form method="post">

	  <div class="alert alert-success" role="alert">
       <?php echo $massage; ?>
      </div>

		<div class="form-group">
			<h1>Get in touch!</h1>
		</div>

		<div class="form-group">
			<label for="email">Email address</label>
			<input type="email" class="form-control" required name="email" placeholder="Enter email">
			<p class="class=form-text text-muted">Well never share your email with anyone else.</p>
		</div>

		<div class="form-group">
			<label for="subject">Subject</label>
			<input type="text" class="form-control" required name="subject">
		</div>

		<div class="form-group">
			<label for="ask">What would you like to ask us?</label>
			<textarea class="form-control" required rows="3" name="ask"></textarea>
		</div>

         <button type="submit" class="btn btn-primary">Submit</button>
      

	</form>



</div>


</body>
</html>



