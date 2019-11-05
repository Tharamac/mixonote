<?php 
if(!isset($_SESSION)) 
    { 
        session_start(); 
    }  

?>
<!DOCTYPE html>
<html>
	<head>
		<link href='http://fonts.googleapis.com/css?family=Titillium+Web:600,700' rel='stylesheet' type='text/css'>
      	<link href="bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
		<meta charset="UTF-8">
        <script src="bower_components/jquery/dist/jquery.min.js"></script>
		<script src="lib/jquery.form.js"></script>
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script src="lib/bootstrap-modal-popover.js" ></script>
		<meta http-equiv="cache-control" content="max-age=0" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="expires" content="0" />
		<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
		<meta http-equiv="pragma" content="no-cache" />
		<script src="lib/buzz.min.js"></script>
		<script src="bower_components/blip/blip.min.js"></script>
		<script src="lib/dropzone.js"></script>
		
<!--
		<script>
			function foo(){
 				alert("bar");
			}
		</script>
-->

      
	</head>
	<body>
		<link rel="stylesheet" href="CSS/track_player-style.css">
		<link rel="stylesheet" href="CSS/pad_player-style.css">
		<link rel="stylesheet" href="css/grid.css">
	
		
		
		
		<div class="setting">

			
		<a  href="#" id="loop_deck_button" class="btn btn-default btn-lg deck" title="Loops Deck" data-toggle="modal" data-placement="bottom" data-target="#loop_deck"><span class="glyphicon glyphicon-th-list"></span> Loop Deck</a>
		
			<div id="loop_deck" class="modal fade" role="dialog">
				<div class="modal-content">
					<div class="modal-header">
					  <button type="button" class="close" data-dismiss="modal"><span class="
glyphicon glyphicon-chevron-up"></button>
					  <h3 class="modal-title">Loops Deck</h3>
					</div>
					
					<div class="modal-body">
						<div id=ld_tool class="form-inline">
						<a  href="#" id="play_pause" class="btn  btn-default btn-lg buttonp play" data-toggle="tooltip" data-placement="bottom" title="Play/Pause Loops"><span class="glyphicon glyphicon-play"></span></a>
						<a href="#" id="stop" class="btn btn-default btn-lg buttons stop"><span class="glyphicon glyphicon-stop"></span></a>
						
						<label style="margin-left:30px; height:50px; " class='font'> Tempo: </label>
						<input  type="number" id="Tempo" class="form-control" min=0 max=250 value=128>

						
						<a  href="#" id="Clear" class="btn btn-default btn-lg ">Clear <span class="glyphicon glyphicon-erase">  </span></a>
						</div>
						<div class= "timeline">
							<a href="#" class="btn btn-sm timeline_off" id="TL1"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL2"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL3"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL4"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL5"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL6"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL7"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL8"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL9"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL10"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL11"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL12"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL13"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL14"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL15"></a>
							<a href="#" class="btn btn-sm timeline_off" id="TL16"></a> 
						</div>

						<form class="form-inline">

								<select class="form-control" id="trackselect_a" >
									<option value="unselected">Choose Sample</option>
									<option value="can">Can</option>
									<option value="glass">Glass</option>
									<option value="plastic">Plastic</option>
									<option value="kick">Kick</option>
									<option value="snare">Snare</option>
								</select>



									<a href="#" class="btn btn-lg track_off" id="A1"></a>
									<a href="#" class="btn btn-lg track_off" id="A2"></a>
									<a href="#" class="btn btn-lg track_off" id="A3"></a>
									<a href="#" class="btn btn-lg track_off" id="A4"></a>
									<a href="#" class="btn btn-lg track_off" id="A5"></a>
									<a href="#" class="btn btn-lg track_off" id="A6"></a>
									<a href="#" class="btn btn-lg track_off" id="A7"></a>
									<a href="#" class="btn btn-lg track_off" id="A8"></a>
									<a href="#" class="btn btn-lg track_off" id="A9"></a>
									<a href="#" class="btn btn-lg track_off" id="A10"></a>
									<a href="#" class="btn btn-lg track_off" id="A11"></a>
									<a href="#" class="btn btn-lg track_off" id="A12"></a>
									<a href="#" class="btn btn-lg track_off" id="A13"></a>
									<a href="#" class="btn btn-lg track_off" id="A14"></a>
									<a href="#" class="btn btn-lg track_off" id="A15"></a>
									<a href="#" class="btn btn-lg track_off" id="A16"></a> 
						</form>  

						<form class="form-inline">

								<select class="form-control" id="trackselect_b">
									<option value="unselected">Choose Sample</option>
									<option value="can">Can</option>
									<option value="glass">Glass</option>
									<option value="plastic">Plastic</option>
									<option value="kick">Kick</option>
									<option value="snare">Snare</option>
								</select>

									<a href="#" class="btn btn-lg track_off" id="B1"></a>
									<a href="#" class="btn btn-lg track_off" id="B2"></a>
									<a href="#" class="btn btn-lg track_off" id="B3"></a>
									<a href="#" class="btn btn-lg track_off" id="B4"></a>
									<a href="#" class="btn btn-lg track_off" id="B5"></a>
									<a href="#" class="btn btn-lg track_off" id="B6"></a>
									<a href="#" class="btn btn-lg track_off" id="B7"></a>
									<a href="#" class="btn btn-lg track_off" id="B8"></a>
									<a href="#" class="btn btn-lg track_off" id="B9"></a>
									<a href="#" class="btn btn-lg track_off" id="B10"></a>
									<a href="#" class="btn btn-lg track_off" id="B11"></a>
									<a href="#" class="btn btn-lg track_off" id="B12"></a>
									<a href="#" class="btn btn-lg track_off" id="B13"></a>
									<a href="#" class="btn btn-lg track_off" id="B14"></a>
									<a href="#" class="btn btn-lg track_off" id="B15"></a>
									<a href="#" class="btn btn-lg track_off" id="B16"></a> 
						</form>

						<form class="form-inline">

									<select class="form-control" id="trackselect_c">
										<option value="unselected">Choose Sample</option>
										<option value="can">Can</option>
										<option value="glass">Glass</option>
										<option value="plastic">Plastic</option>
										<option value="kick">Kick</option>
										<option value="snare">Snare</option>
									</select>

									<a href="#" class="btn btn-lg track_off" id="C1"></a>
									<a href="#" class="btn btn-lg track_off" id="C2"></a>
									<a href="#" class="btn btn-lg track_off" id="C3"></a>
									<a href="#" class="btn btn-lg track_off" id="C4"></a>
									<a href="#" class="btn btn-lg track_off" id="C5"></a>
									<a href="#" class="btn btn-lg track_off" id="C6"></a>
									<a href="#" class="btn btn-lg track_off" id="C7"></a>
									<a href="#" class="btn btn-lg track_off" id="C8"></a>
									<a href="#" class="btn btn-lg track_off" id="C9"></a>
									<a href="#" class="btn btn-lg track_off" id="C10"></a>
									<a href="#" class="btn btn-lg track_off" id="C11"></a>
									<a href="#" class="btn btn-lg track_off" id="C12"></a>
									<a href="#" class="btn btn-lg track_off" id="C13"></a>
									<a href="#" class="btn btn-lg track_off" id="C14"></a>
									<a href="#" class="btn btn-lg track_off" id="C15"></a>
									<a href="#" class="btn btn-lg track_off" id="C16"></a> 
						</form>

						<form class="form-inline">
								<select class="form-control" id="trackselect_d">
									<option value="unselected">Choose Sample</option>
									<option value="can">Can</option>
									<option value="glass">Glass</option>
									<option value="plastic">Plastic</option>
									<option value="kick">Kick</option>
									<option value="snare">Snare</option>
								</select>

									<a href="#" class="btn btn-lg track_off" id="D1"></a>
									<a href="#" class="btn btn-lg track_off" id="D2"></a>
									<a href="#" class="btn btn-lg track_off" id="D3"></a>
									<a href="#" class="btn btn-lg track_off" id="D4"></a>
									<a href="#" class="btn btn-lg track_off" id="D5"></a>
									<a href="#" class="btn btn-lg track_off" id="D6"></a>
									<a href="#" class="btn btn-lg track_off" id="D7"></a>
									<a href="#" class="btn btn-lg track_off" id="D8"></a>
									<a href="#" class="btn btn-lg track_off" id="D9"></a>
									<a href="#" class="btn btn-lg track_off" id="D10"></a>
									<a href="#" class="btn btn-lg track_off" id="D11"></a>
									<a href="#" class="btn btn-lg track_off" id="D12"></a>
									<a href="#" class="btn btn-lg track_off" id="D13"></a>
									<a href="#" class="btn btn-lg track_off" id="D14"></a>
									<a href="#" class="btn btn-lg track_off" id="D15"></a>
									<a href="#" class="btn btn-lg track_off" id="D16"></a> 
						</form>

						<form class="form-inline">
								<select class="form-control" id="trackselect_e">
									<option value="unselected">Choose Sample</option>
									<option value="can">Can</option>
									<option value="glass">Glass</option>
									<option value="plastic">Plastic</option>
									<option value="kick">Kick</option>
									<option value="snare">Snare</option>
								</select>


									<a href="#" class="btn btn-lg track_off" id="E1"></a>
									<a href="#" class="btn btn-lg track_off" id="E2"></a>
									<a href="#" class="btn btn-lg track_off" id="E3"></a>
									<a href="#" class="btn btn-lg track_off" id="E4"></a>
									<a href="#" class="btn btn-lg track_off" id="E5"></a>
									<a href="#" class="btn btn-lg track_off" id="E6"></a>
									<a href="#" class="btn btn-lg track_off" id="E7"></a>
									<a href="#" class="btn btn-lg track_off" id="E8"></a>
									<a href="#" class="btn btn-lg track_off" id="E9"></a>
									<a href="#" class="btn btn-lg track_off" id="E10"></a>
									<a href="#" class="btn btn-lg track_off" id="E11"></a>
									<a href="#" class="btn btn-lg track_off" id="E12"></a>
									<a href="#" class="btn btn-lg track_off" id="E13"></a>
									<a href="#" class="btn btn-lg track_off" id="E14"></a>
									<a href="#" class="btn btn-lg track_off" id="E15"></a>
									<a href="#" class="btn btn-lg track_off" id="E16"></a> 

					</form>

					</div>

				</div>
			</div>
		<a  href="#" id="loader_panel" class="btn  btn-default btn-lg button loader" data-toggle="modal" data-placement="bottom" title="Samples Loader" data-target="#sample-loader"><span class="glyphicon glyphicon-import"></span> Samples Loader</a>
		<div id="sample-loader" class="modal fade" role="dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"><span class="glyphicon glyphicon-chevron-up"></span></button>
					  <h3 class="modal-title">Sample Loader</h3>
					</div>
					
					<div class="modal-body slp">
						<div id="row1" class="col-md-4">
				
						</div>
						<div id="row2" class="col-md-4">

						</div>
						<div id="row3" class="col-md-4">

						</div>	
					</div>
			</div>
		</div>	
								
		<a  href="#" id="save" class="btn  btn-default btn-lg button save-button" data-toggle="modal" data-placement="bottom" title="Save Pattern" data-target="#save-panel"><span class="
glyphicon glyphicon-floppy-disk"></span> Save Pattern</a>
		<div id="save-panel" class="modal fade" role="dialog">	
			<div class="modal-content small">
				<div class="modal-header">
				  <button type="button" class="close" data-dismiss="modal"><span class="glyphicon glyphicon-chevron-up"></button>
				  <h3 class="modal-title">Save Pattern</h3>
				</div>

					<div class="modal-body spp">
					
					<div class="form-inline">
						
					  <div class="form-group" id="savebox">
						<label for="file" class="font">File Name:</label>
						<input id="filename" type="text" class="font form-control" name="file_name" ><button  id="save_button" class="btn btn-default font">Save</button>		
						</div> 
					</div>
						
						<div class="inline">
							<div class="alert alert-warning font" id="alert_overwrite" style="font-size:20px;">
							
								Are you sure to overwrite existed file?
								  <a href="#" type="button" id="edited" class="" aria-label="close">No</a>
								<a href="#" type="button" id="overwrite" class="" aria-label="close">Yes</a>
							 
							</div>
							
							<div class="alert alert-success font" id="alert_savesuccess" style="font-size:20px;">	
							    <a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
								Saving..
							</div>
							
							<div class="alert alert-info font inline" id="alert_saving" style="font-size:20px;">	
							   Saving...
								
							</div>
			

					</div>

			</div>
		</div>
			</div>
		<a  href="#" id="load" class="btn  btn-default btn-lg button save-button" data-toggle="modal" data-placement="bottom" title="Load Pattern" data-target="#load-panel"><span class="
glyphicon glyphicon-save"></span> Load Pattern</a>
		<div id="load-panel" class="modal fade" role="dialog">	
			<div class="modal-content big">
				<div class="modal-header">
				  <button type="button" class="close" data-dismiss="modal"><span class="glyphicon glyphicon-chevron-up"></button>
				  <h3 class="modal-title">Load Pattern</h3>
				</div>

					<div class="modal-body">
						<div class="alert alert-info font inline" id="alert_loading" style="font-size:20px; width:100%">	
							   Loading...
								
							</div>
						<div id="load-box" style="height:450px;">
						<div class="list-group-item active" style="background-color:#b38300; border:solid #b38300;">
							<table class="cell" border="0px">
									<tr>
										<td class="file col-sm-7">Filename</td>
										<td class="date col-sm-4"><center>Date Modified</center></td>
									</tr>
							</table>		
							</div>
					<div id="box" class="well lpp">
						
						<div id="loadlistbox" class="list-group ">
  							
						</div>
						
						</div>
						</div>
						<button id="del" class="btn btn-danger font" style="color:black">Delete Pattern</button>
					
					</div>

			</div>
		</div>
			
		
		<div id="user" class="dropdown inline">
  			<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-default user-button"><span class="glyphicon glyphicon-user"></span>
    	<?php echo $_SESSION['username'] ?>
    	<span class="caret"></span>
  		</button>
  		<ul class="dropdown-menu font" aria-labelledby="dLabel">
			<li><a href="#" id="logout_button">Logout</a></li>
  		</ul>
		</div>
		
		
			
		
			
			
		<div class="track">
			<div class="controller">
				<div id="kb_top_line">
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="81">Q</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="87">W</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="69">E</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="82">R</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="84">T</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="89">Y</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="85">U</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="73">I</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="79">O</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="80">P</a>

				</div>
				<div id="kb_mid_line">
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="65">A</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="83">S</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="68">D</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="70">F</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="71">G</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="72">H</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="74">J</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="75">K</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="76">L</a>
				</div>
				<div id="kb_down_line">
					<a href="#" class="btn btn-lg shift_off" id="shift">Shift<span class="glyphicon glyphicon-arrow-up"></span></a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="90">Z</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="88">X</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="67">C</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="86">V</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="66">B</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="78">N</a>
					<a href="#" class="btn btn-lg pad_off" data-toggle="tooltip" data-placement="top" title="Tooltip on top" id="77">M</a>
				</div>
			</div>
		</div>
<!--
			<div id="properties">
			
			</div>
-->
			<div id="demobox" class="">
				
				
				<div id="demo-box" class="dropup dropdown-menu-left ">
					<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-warning user-button" style="color:black;">
					Padplayer Demo
					<span class="caret"></span> 
					</button>
							<ul class="dropdown-menu font" aria-labelledby="dLabel">
								<li><a href="#" id="demo1"><span class="glyphicon glyphicon-play" style="padding-right:10px;"></span>Demo #1</a></li>
							
							</ul>
					</div>
				<button id="tutor" class="btn btn-info font" data-toggle="modal" data-placement="bottom" style="color:black; height:50px;" title="Load Pattern" data-target="#tutorial_panel">Getting Started</button>
				<div class="alert alert-info font inline" id="alert_demo" style="font-size:20px; height:50px;   ">	
							 Playing Demo Pattern...
								
							</div>
				</div>
			
			
			<div id="tutorial_panel" class="modal fade" role="dialog">	
			<div class="modal-content bigr">
				

				<div class="modal-body">
  <button type="button" class="close" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></button>
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
	<li data-target="#myCarousel" data-slide-to="4"></li>
	<li data-target="#myCarousel" data-slide-to="5"></li>
	<li data-target="#myCarousel" data-slide-to="6"></li>
	<li data-target="#myCarousel" data-slide-to="7"></li>
<!--	  เพิ่มจุดตรงนี้-->
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
	<div class="item active">
		  <img src="images/mixonote.png" width="300">
	  		<h1><center>Welcome to MixoNote</center></h1>
	  		<p style="font-size:20px;">Mixonote is the online sampler web application that lets users who are interested in music, unleash their creativity through audio samples. Users can make their own new remix and mashup just by using internet and their personal computers.</p>
		  	<p style="font-size:20px;">Let's getting started, click next button to continue.</p>
	  </div>
	  
    <div class="item">
		<!-- ใส่รูปตรงนี้-->
      <div class="col-lg-7"><img src="images/Picture1.png"></div>
		<div class="col-lg-5" >
			
			<h3 style="color:black; text-align:left;">
				Padplayer	</h3>
			<p  style="color:black; font-size:20px;">
			Try using your keyboard!
				
			or try Padplayer Demo!
			</p>
			<h3 style="color:black; text-align:left;">
				MixoNote Function	</h3>
			<p style="color:black; font-size:20px;">1. Loop Deck : Create Loop of samples
			<br>2. Samples Loader : Upload Samples
			<br>3. Save Pattern : Save Loop Deck and Padplayer Pattern
			<br>4. Load Pattern : Load Loop Deck and Padplayer Pattern</p>
			<p  style="color:black; font-size:20px;">You can log out by click user button.(the button that show your username) Then, click logout menu.</p>
			
			
	  	</div>
    </div>
		<div class="item">
		<div class="col-lg-7"><!-- ใส่รูปตรงนี้-->  <img src="images/UpPage.jpg"></div>
			<div class="col-lg-5" >
				<h3 style="color:black; text-align:left;">
				Samples Loader 	</h3>
				<p style="color:black; font-size:20px;">
					You can choose your sound to upload in each character key (which is shown in button 1) by click button (2) of that character.</p>
					<p>When your sound is chosen, you can click upload button (3) then that character key's background become pink.</p>
					<p style="color:black; font-size:20px;">
					You can delete your sound by select button (4) and that character change background become gray.
				</p> 
			</div>
		</div>
    <div class="item">
		<div class="col-lg-7"><!-- ใส่รูปตรงนี้-->  <img src="images/LoopPage.jpg"></div>
		<div class="col-lg-5" >
			<h3 style="color:black; text-align:left;">
				Loop Deck 	</h3>
				<p style="color:black; font-size:20px;">
					This section is used to create loop sequence by choose the sound in channels (5), Set tempo (3), and create your own pattern (6)</p>
			<p>		If you are ready, press play/pause(1) button to play loop pattern.</p>
					<p>	You can clear your pattern with button (4).
				</p>
			

				</p>
	  	</div>
    
    </div>

   

    <div class="item">
		<div class="col-lg-7"><!-- ใส่รูปตรงนี้-->  <img src="images/SavePage.jpg"></div>
		
		<div class="col-lg-5" >
			<h3 style="color:black; text-align:left;">
				Save Pattern 	</h3>
				<p style="color:black; font-size:20px;">
					You can save Loop Deck pattern and Padplayer samples to store data to play MixoNote later.  </p>
					<p>Put your pattern name and save!</p>

				
		</div>
    </div>
	
	<div class="item">
		<div class="col-lg-7"><!-- ใส่รูปตรงนี้-->  <img src="images/LoadSample.jpg"></div>
		
		<div class="col-lg-5" >
			<h3 style="color:black; text-align:left;">
				Load Pattern 	</h3>
				<p style="color:black; font-size:20px;">
					You can load Loop Deck pattern and Padplayer samples by double click the pattern that you want to load in.
			</p><p>
					You can delete Loop Deck and Padplayer pattern by click "Delete Pattern" button.
				</p>
		</div>
    </div>

	<div class="item">
		<div class="col-lg-7"><!-- ใส่รูปตรงนี้-->  <img src="images/LoopComplete.jpg"></div>
		
		<div class="col-lg-5" >
			<h3 style="text-align:left">Let's try MixoNote </h3>
			<p>First start at Loop Deck, set the channel and loop pattern like this.  Then, Try playing that loop!</p>
			<p>Next to the Padplayer, upload your samples like effect, drum, vocal or instrument into Padplayer. Make all character key pink. Then, unleash your idea! Try to press some button to see how it's cool. Shift button make you play that sample as long as the sample is long.
			</p>
		</div>
    </div>

	<div class="item">
		<div class="col-lg-7"><!-- ใส่รูปตรงนี้-->  <img src="images/Screenshot%20(24)_cr.png"></div>
		
		<div class="col-lg-5" >
			<h3 style="text-align:left">Congratulations!</h3>
			<p>You have just complete the short lesson of MixoNote. Now, you can  unleash your creativity by create your own remix and mashup by yourself. You are an artist.</p>
			<button id="understand" type="button" class="btn btn-default inline font" data-dismiss="modal" style="color:black;">Finished</button>	</div>
		</div>
    </div>	
		
	
  
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
				
				

			</div>
		</div>
				
				<div id="loading" class="modal fade" role="dialog">	
<!--					<div class="modal-content bigr">-->
					<div style="height:80px;">
<!--						<div class="modal-body" style="width:420px;">-->
							<div class="progress" style="height:30px; width:400px; margin:auto;  overflow:hidden;">
							  <div class="progress-bar progress-bar-info progress-bar-striped active font" role="progressbar"
			  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%;   margin:auto; text-align:center">
								  	
								</div>
							</div>
							<center class="font" style="font-size:20px; color:white;">Loading...</center>
<!--							</div>-->
						</div>
					</div>
</div>
		<script src="src/ctrl-padplayer.js"></script>
		
	

		
    
	</body>
		
</html>