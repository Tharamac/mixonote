<?php
	session_start();
	$username = $_SESSION['username'];

	error_reporting( ~E_WARNING & ~E_NOTICE );
		try{
	$dbc = new PDO("mysql:host=mysql9.000webhost.com;dbname=a5841001_mixo","a5841001_admin","");
}catch(PDOException $e){
	die($e->getMessage());
}

		$dbc->exec('SET names utf8');
// =================================> check file existed <====================================
	
		
	if(isset($_POST['file_name']) && !empty($_POST['file_name'])) {
		$filename = $_POST['file_name'];
		
		$name_query = $dbc->prepare('SELECT * FROM filelist WHERE filename = ? AND user = ?');
		$name_query_exe=$name_query->execute(array($filename,$username));
		$count=$name_query->rowCount();
		if($count==1){
			echo $filename;
		}else{
			echo "555";
		}
		
	}
// =========================> overwrite existed file .loopdeck <============================

		$temp_name_path = 'user/'.$username.'/temp/name/';
		$temp_pp_path = 'user/'.$username.'/temp/samples/';
		

		

	if(isset($_POST['overwrite']) && !empty($_POST['overwrite'])) {
		
		$getid = $name_query->fetch();
			$ldid = $getid['loopdeck_id'];
			$ppid = $getid['padplayer_id'];
			
		
		$path = 'user/'.$username.'/'.$_POST['file_name'].'/';
		
		$save_ld_data = array(
			$_POST['tempo'],
			$_POST['channel1_name'],
			$_POST['channel1_pattern'],
			$_POST['channel2_name'],
			$_POST['channel2_pattern'],
			$_POST['channel3_name'],
			$_POST['channel3_pattern'],
			$_POST['channel4_name'],
			$_POST['channel4_pattern'],
			$_POST['channel5_name'],
			$_POST['channel5_pattern'],$ldid
			
			
		
		);
 		$arrlength = count($save_ld_data);
		
		$ld_query = $dbc->prepare('UPDATE loopdeck SET tempo = ?,channel1_name = ?,channel1_pattern = ?,channel2_name = ?,channel2_pattern = ?,channel3_name = ?,channel3_pattern = ?,channel4_name = ?,channel4_pattern = ?,channel5_name = ?,channel5_pattern = ? WHERE loopdeck_id = ?');
		$ld_query_exe=$ld_query->execute($save_ld_data);
//		

//		$row = $ld_query->fetch();

// ===========================> overwrite existed file.padplayer <==========================
		
		$chstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$save_pp_txt_data = array();
		for($x=0;$x<strlen($chstr);$x++){
			
			
			$namefile = fopen($temp_name_path.$chstr[$x].".txt", "r") or die("Unable to open file!");
			$savename = fread($namefile,filesize($temp_name_path.$chstr[$x].".txt"));
			array_push($save_pp_txt_data,$savename);
			fclose($namefile);
			
		}
			print_r($save_pp_txt_data);
			array_push($save_pp_txt_data,$ppid);
		$pp_query = $dbc->prepare('UPDATE padplayer SET  A =?,B =?,C =?,D =?,E =?,F =?,G =?,H =?,I =?,J =?,K =?,L =?,M =?,N =?,O =?,P =?,Q =?,R =?,S =?,T =?,U =?,V =?,W =?,X =?,Y =?,Z =? WHERE padplayer_id = ?' );
		$pp_query_exe=$pp_query->execute($save_pp_txt_data);
		
		for($x=0;$x<strlen($chstr);$x++){					
			if(file_exists($temp_pp_path.$chstr[$x].'.mp3')){
				unlink($temp_pp_path.$chstr[$x].'.mp3');
			}
			copy($temp_pp_path.$chstr[$x].'.mp3',$path.$chstr[$x].'.mp3');
		}

		
	}

	
// ===============================> save new file.loopdeck <==============================


		


	if(isset($_POST['save']) && !empty($_POST['save'])) {
		
		$path = 'user/'.$username.'/'.$_POST['file_name'].'/';
		
		$save_ld_data = array(
			$_POST['tempo'],
			$_POST['channel1_name'],
			$_POST['channel1_pattern'],
			$_POST['channel2_name'],
			$_POST['channel2_pattern'],
			$_POST['channel3_name'],
			$_POST['channel3_pattern'],
			$_POST['channel4_name'],
			$_POST['channel4_pattern'],
			$_POST['channel5_name'],
			$_POST['channel5_pattern']
		
		);
 		$arrlength = count($save_ld_data);
		
		$ld_query = $dbc->prepare('INSERT INTO loopdeck (tempo,channel1_name,channel1_pattern,channel2_name,channel2_pattern,channel3_name,channel3_pattern,channel4_name,channel4_pattern,channel5_name,channel5_pattern) VALUE (?,?,?,?,?,?,?,?,?,?,?)');
		$pp_query_exe=$ld_query->execute($save_ld_data);
		$ld_id = $dbc->lastInsertId();

//		$row = $ld_query->fetch();
// =============================> save new file.padplayer <=============================
		
		$chstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$save_pp_txt_data = array();
		for($x=0;$x<strlen($chstr);$x++){
			
			
			$namefile = fopen($temp_name_path.$chstr[$x].'.txt', "r") or die("Unable to open file!");
			$savename = fread($namefile,filesize($temp_name_path.$chstr[$x].'.txt'));
			array_push($save_pp_txt_data,$savename);
			fclose($namefile);
			
		}
			
		$pp_query = $dbc->prepare('INSERT INTO padplayer (A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z) VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');
		$pp_query_exe=$pp_query->execute($save_pp_txt_data);
		$pptxt_id = $dbc->lastInsertId();
		
		
		mkdir($path);
		for($x=0;$x<strlen($chstr);$x++){					
			copy($temp_pp_path.$chstr[$x].'.mp3' , $path.$chstr[$x].'.mp3');
		}
		
		$savedata = array(
			$filename,
			$username,
			$ld_id,
			$pptxt_id,
			$path
		);
		
		
		$save_query= $dbc->prepare('INSERT INTO filelist (filename,user,loopdeck_id,padplayer_id,padplayer_path) VALUE (?,?,?,?,?)');
		$save_query_exe = $save_query->execute($savedata);
		
		
	}
		
// =============================> load.show all load <=================================

	if(isset($_POST['load']) && !empty($_POST['load'])) {
		
		$load_query= $dbc->prepare('SELECT filename,date FROM filelist WHERE user= ? ORDER BY date DESC');

		$load_query_exe = $load_query->execute(array($username));
		$result = $load_query -> fetchAll(PDO::FETCH_ASSOC);
			echo json_encode($result);	
	}
// =============================> load.load pattern <=================================	
	if(isset($_POST['loadpattern']) && !empty($_POST['loadpattern'])) {
		$loadfile = $_POST['loadfile'];
		
		$lfld_query = $dbc->prepare('SELECT filelist.padplayer_path, loopdeck.*  FROM filelist INNER JOIN loopdeck ON filelist.loopdeck_id = loopdeck.loopdeck_id  WHERE filelist.filename=? AND filelist.user=?');
		$lfld_query_exe = $lfld_query->execute(array($loadfile,$username));
		$loadlddata = $lfld_query->fetch(PDO::FETCH_ASSOC);
		echo json_encode($loadlddata);
//		$pdata = $lf_query->fetch(PDO::FETCH_NUM);
//		print_r($pdata);
		
		$loadpath = $loadlddata['padplayer_path'];
		
		$chstr = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		
		
		$lfpp_query = $dbc->prepare('SELECT padplayer.*  FROM filelist INNER JOIN padplayer ON filelist.padplayer_id=padplayer.padplayer_id WHERE filelist.filename=? AND filelist.user=?');
		$lfpp_query_exe = $lfpp_query->execute(array($loadfile,$username));
		$loadppdata = $lfpp_query->fetch();
		for($x=1;$x<strlen($chstr);$x++){
	
			$loadnamef = fopen($temp_name_path.$chstr[$x].'.txt', "w") or die("Unable to open file!");
			$loadname = fwrite($loadnamef,$loadppdata[$x]);
			fclose($loadnamef);
			
			if(file_exists($temp_pp_path.$chstr[$x].'.mp3')){
				unlink($temp_pp_path.$chstr[$x].'.mp3');
			}
			copy($loadpath.$chstr[$x].'.mp3',$temp_pp_path.$chstr[$x].'.mp3' );
			
		}
		
			
		
		
	
		
	}
//==============================> delete pattern <===========================
	if(isset($_POST['delpattern']) && !empty($_POST['delpattern'])) {
		$delfile = $_POST['delfile'];
		$delpath = 'user/'.$username.'/'.$delfile.'/';
		$del_query = $dbc->prepare('DELETE FROM filelist WHERE filename=? AND user=?');
		$del_query_exe = $del_query->execute(array($delfile,$username));
		
//	public static function deleteDir($dirPath) {
			if (! is_dir($delpath)) {
				throw new InvalidArgumentException("$dirPath must be a directory");
			}
			if (substr($delpath, strlen($delpath) - 1, 1) != '/') {
				$dirPath .= '/';
			}
			$files = glob($delpath . '*', GLOB_MARK);
			foreach ($files as $file) {
				if (is_dir($file)) {
					self::deleteDir($file);
				} else {
					unlink($file);
				}
			}
			rmdir($delpath);
		

		if($del_query_exe){
			echo "Pattern Deleted";
		}else{
			echo "Error";
		}
	}

		
	$dbc = null;
?>