<?php 
if(!isset($_SESSION)) 
    { 
        session_start(); 
    }  
?>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="CSS/account_style.css" type="text/css"/>
		<link href='http://fonts.googleapis.com/css?family=Titillium+Web:600,700' rel='stylesheet' type='text/css'>
      	<link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
		<script src="bower_components/jquery/dist/jquery.min.js"></script>
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<meta charset="utf-8"/>
	</head>
	
	<body>
		<div id="loginform">
		
		<h3 class="font"><center><img src="images/mixonote.png" height="auto" width="500" align="middle"/><br>MixoNote Login</center></h3><br>
		
		<form class="form-horizontal" method="post">
  			<div class="form-group cell">
				<label for="input_username" class="col-md-3 control-label font font-24">Username </label>
				<div class="col-md-7">
					<input type="text" class="form-control input-lg font font-24" id="input_username" name="username" placeholder="Username">
				</div>
  			</div>
			
  			<div class="form-group cell">
    			<label for="input_password" class="col-md-3 control-label font font-24 ">Password</label>
				<div class="col-md-7">
				 <input type="password" name="password" class="form-control input-lg font font-24" id="input_password" placeholder="Password">
    			</div>
  			</div>

  <div class="form-group cell">
    <div class="col-md-offset-2 col-md-10">
      <input type="submit" name="submit" class="btn btn-default btn-lg font " value="Log in">
		<a href="register.php" class="btn btn-default btn-lg font ">Create Account</a>
		<a href="forgotpassword.php" class="font font-18" style="margin-left:10px">forgot password?</a>
    </div>
  </div>
			
			
</form>
		
		</div>
			

	</body>
	
	
	<?php
	
		error_reporting(~E_NOTICE );
		
		try{
	$dbc = new PDO("mysql:host=mysql9.000webhost.com;dbname=a5841001_mixo","a5841001_admin","MixoYep3x");
}catch(PDOException $e){
	die($e->getMessage());
}

		

	 	$username = $_POST['username'];
		$password = $_POST['password'];
	
		
		if(!($username=="" && $password=="")){
//		echo $username." and ".$password;
		$query = $dbc->prepare('SELECT * FROM users WHERE Username = ?');
		$query_exe=$query->execute(array($username));
		$row = $query->fetch();
		
		if( ($row['Username']==$username) && ($row['Password']==$password) ){
			if($query_exe){

				echo '<script language="javascript">location.href="mixonote.php";</script>';
				$_SESSION['username']=$username;
				$_SESSION['password']=$password;
			}
		}else echo '<script language="javascript">alert("Invalid Login");</script>';
		}else if($_POST['submit']) echo '<script language="javascript">alert("Invalid Login");</script>';
		
		
	?>
</html>
