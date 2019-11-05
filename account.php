<?php 
	session_start(); 
	error_reporting(~E_NOTICE );
	if(isset($_POST['logout'])){
		
		echo $_SESSION['username']." has been logged out.";   
		
		unset($_SESSION['username']); // clear session
		unset($_SESSION['password']);
		session_destroy();
	

	}
?>
			
