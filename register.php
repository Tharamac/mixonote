<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="CSS/account_style.css" type="text/css"/>
		<link href='http://fonts.googleapis.com/css?family=Titillium+Web:600,700' rel='stylesheet' type='text/css'>
      	<link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<meta charset="utf-8"/>
	</head>
	
	<body>
		
		<div id="regisform">
		<h1 class="font"><center>Create Account</center></h1><br>
		
		<form class="form-horizontal" method="post">
  			<div class="form-group cell">
				<label for="input_username"  class="col-md-4 control-label font font-24">Username </label>
				<div class="col-md-6">
					<input type="text" class="form-control input-lg font font-24" id="input_username" name="username" placeholder="Username">
				</div>
  			</div>
			
  			<div class="form-group cell">
    			<label for="input_password" class="col-md-4 control-label font font-24 ">Password</label>
				<div class="col-md-6">
				 <input type="password" class="form-control input-lg font font-24" id="input_password" name="password" placeholder="Password">
    			</div>
  			</div>
			
			<div class="form-group cell">
    			<label for="input_confirm_password" class="col-md-4 control-label font font-24 ">Confirm Password</label>
				<div class="col-md-6">
				 <input type="password" class="form-control input-lg font font-24" id="input_confirm_password" name="confirm_password" placeholder="Confirm Password">
    			</div>
  			</div>

  <div class="form-group cell">
    <div class="col-md-offset-4 col-md-10">
      <input type="submit" name="submit" class="btn btn-default btn-lg font" value="Create Account">
		
    </div>
  </div>
			
			
</form>
		
		</div>
		
		
	</body>
	<script>
	
	</script>
	<?php
		
		 $chk = 0;

		error_reporting(~E_NOTICE );
	try{
	$dbc = new PDO("mysql:host=mysql9.000webhost.com;dbname=a5841001_mixo","a5841001_admin","");
}catch(PDOException $e){
	die($e->getMessage());
}


		
		$username = $_POST['username'];
		$password = $_POST['password'];
		$confirmpass = $_POST['confirm_password'];
		$chstr = "QWERTYUIOPASDFGHJKLZXCVBNM"; 
		
	if(isset($_POST['submit']) && !empty($_POST['submit'])){
		
		if(!empty($username)&&!empty($password)&&!empty($confirmpass)){
			
			if($password == $confirmpass){
				$query = $dbc->prepare('SELECT * FROM users WHERE Username = ?');
				$query_exe=$query->execute(array($username));
				$row = $query->fetch();
			
				if($username != $row['Username']){
					
					$query = $dbc->prepare("INSERT INTO users SET Username = ?, Password=? " );
					$query_exe = $query->execute(array($username,$password));	
					if($query_exe){
						
						//echo "Your account has been registered";
						
						echo '<script language="javascript">alert("Your account has been registered");</script>';
						mkdir('user/'.$username);
						mkdir('user/'.$username.'/temp');
						mkdir('user/'.$username.'/temp/samples');
						mkdir('user/'.$username.'/temp/name');
						
						for($x=0;$x<26;$x++){
							
							copy('demo/'.$chstr[$x].'.mp3','user/'.$username.'/temp/samples/'.$chstr[$x].'.mp3');
							copy('demo/'.$chstr[$x].'.txt','user/'.$username.'/temp/name/'.$chstr[$x].'.txt');
						}
						
						echo '<script language="javascript">location.href="index.php"</script>';
						
						
					}
				}else echo '<script language="javascript">alert("Username has already existed.")</script>';
			}else echo '<script language="javascript">alert("Your password does not match");</script>';
		}else echo '<script language="javascript">alert("Invalid information");</script>';
		}

		$dbc = null;

	?>
</html>
