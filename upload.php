<?php
session_start();
$username = $_SESSION['username'];
error_reporting( ~E_WARNING & ~E_NOTICE );
$temp_name_path = 'user/'.$username.'/temp/name/';
$temp_pp_path = 'user/'.$username.'/temp/samples/';

if(isset($_POST['stread']) && !empty($_POST['stread'])){
	$chload = $_POST['stread'];
	if(file_exists($temp_pp_path.$chload.".mp3")){
		$myfile = fopen($temp_name_path.$chload.".txt", "r") or die("Unable to open file!");
		echo fread($myfile,filesize($temp_name_path.$chload.".txt"));
		fclose($myfile);
	}
	else{
		echo 'Click here to choose a file'; 
	}
}



if(isset($_POST['action']) && !empty($_POST['action'])) {
    $ch = $_POST['action'];
			
		//ของจริง
			$file_formats = array(".mp3"); // Set File format
			
			
			//I hear echoes of a thousand screams...
		/*
			I type 'echo' for the thousand times.
			That's why code doesn't finish.
			I got error which inside php
			reminded me
			that i lost my power
			to writing all that code
			i lost my power
			somewhere in my code.
			
		*/
			$audioupload_name = $_FILES['audioupload']['name'];
		   	$audioupload_tmp = $_FILES['audioupload']['tmp_name'];
			$error=$_FILES['audioupload']['error'];
			$myfile = fopen($temp_name_path.$ch.".txt", "w") or die("Unable to open file!");
			if($error==0){
				if($audioupload_tmp){
					$type = substr($_FILES['audioupload']['name'],-4);
					
//					$arraypic = explode(".",$audioupload_name);//แบ่งชื่อไฟล์กับนามสกุลออกจากกัน
//					$lastname = strtolower($arraypic);
//					$filename = $arraypic[0];//ชื่อไฟล์
//					$filetype = $arraypic[1];//นามสกุลไฟล์
				
					  if (in_array($type, $file_formats)) { 

							//รวมชื่อไฟล์กับนามสกุลเข้าด้วยกัน
			//			  	$newaudio = md5(uniqid().time()).".".$filetype;
						  if(file_exists($temp_pp_path.$ch.".mp3")){
							unlink($temp_pp_path.$ch.".mp3");
						  }
							copy($audioupload_tmp,$temp_pp_path.$audioupload_name); //โฟลเดอร์สำหรับเก็บรูป/ไฟล์รูป 
//							$type = substr($_FILES['audioupload']['name'],-4);
					
					$txt = $_FILES['audioupload']['name'];
					fwrite($myfile, $txt);
				
						  
						  
							rename($temp_pp_path.$_FILES['audioupload']['name'],$temp_pp_path.$ch.$type);
							echo $audioupload_name;
					  }
					  else{
							echo "This file is not supported";
						  fwrite($myfile, "Click here to choose a file");
					  }	
				}
				else{ echo "Click here to choose a file";
				fwrite($myfile, "Click here to choose a file");
				}
			}
			else if($error==1 || $error==2){
				echo "File exceeds max upload size (20MB)";
				fwrite($myfile, "Click here to choose a file");
			}
			else if($error==3){
				echo "Upload unsuccessful. Try again.";
				fwrite($myfile, "Click here to choose a file");
			}
 			else if($error==4){
				echo "Click here to choose a file";
				fwrite($myfile, "Click here to choose a file");
			}
			else {echo "Error uploading files";
				 fwrite($myfile, "Click here to choose a file");
			}
			fclose($myfile);
}

if(isset($_POST['trash']) && !empty($_POST['trash'])) {
    $ch_del = $_POST['trash'];
	unlink($temp_pp_path.$ch_del.".mp3");
	$myfile = fopen($temp_name_path.$ch_del.".txt", "w") or die("Unable to open file!");
	fwrite($myfile, "Click here to choose a file");
	fclose($myfile);
}
?>
