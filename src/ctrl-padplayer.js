//This flie is very important 
//this is a script that works in padplayer.html
$('#loading').modal('show');
//do not lose or delete
blip.sampleLoader()
  .samples({
    'can': 'https://cdn.rawgit.com/jshanley/blip/b2d1594c94a63af9bebab2730ec262301d17b360/sounds/cokecan.wav',
    'glass': 'https://cdn.rawgit.com/jshanley/blip/b2d1594c94a63af9bebab2730ec262301d17b360/sounds/glass.wav',
    'plastic': 'https://cdn.rawgit.com/jshanley/blip/b2d1594c94a63af9bebab2730ec262301d17b360/sounds/plastic.wav',
    'kick':'/WebProjectRectonote/demo/kick.mp3', 
	'snare':'/WebProjectRectonote/demo/snare.mp3'
})
    .done(function(){





var demo = 0,abc = 0;
var Tempo = 512;
var A = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var B = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var C = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var D = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var E = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var TL= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var toggle=1;


var chk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var playchk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var keyorder="QWERTYUIOPASDFGHJKLZXCVBNM";


var channelA_name = "unselected";
var channelB_name = "unselected";
var channelC_name = "unselected";
var channelD_name = "unselected";
var channelE_name = "unselected";





$(document).ready(function(){
	$('#loading').modal('hide');
	$('[data-toggle="tooltip"]').tooltip()
	  var i,j;	
	  $.post('username.php',function(output){
		  var username =  output;
		 
		  	$('#load-panel').on('show.bs.modal', function() {
				
				$("#alert_loading").hide();
				$("#load-box").show();
				document.getElementById('loadlistbox').innerHTML = "";
					$.post('save-loadpattern.php', {load: 'load'} , function(e){
					var result = JSON.parse(e);
					for(var t=0;t<result.length;t++){
						document.getElementById('loadlistbox').innerHTML+='<a href="#" class="list-group-item" value="'+t+'"><table class="cell" border="0px"><tr><td id="file'+t+'" class="file col-sm-8">'+result[t]['filename']+'</td><td id="date'+t+'" class="date col-sm-4"><center>'+result[t]['date']+'</center></td></tr></table></a>';
					}
			$('#loadlistbox .list-group-item').click(function(){
				var event = $(this);
					
				$('#del').click(function(){
					var delfile = event.find('.file').text();
					console.log(delfile);
					if(delfile != ''){
					$("#alert_loading").show();
					$('#load-box').hide();
					$.ajax({
						url:'save-loadpattern.php',
						data: {delpattern: 'load',
							   delfile:delfile },
						type:'post',
						success:function(output){
							console.log(output);
							
							$.post('save-loadpattern.php', {load: 'load'} , function(e){
								document.getElementById('loadlistbox').innerHTML = "";
								var result = JSON.parse(e);
								console.log(e);
								for(var t=0;t<result.length;t++){
									document.getElementById('loadlistbox').innerHTML+='<a href="#" class="list-group-item" value="'+t+'"><table class="cell" border="0px"><tr><td id="file'+t+'" class="file col-sm-8">'+result[t]['filename']+'</td><td id="date'+t+'" class="date col-sm-4"><center>'+result[t]['date']+'</center></td></tr></table></a>';
								}
								$("#alert_loading").hide();
								$('#load-box').show();
									});
								}
					});
				}
				});
				
			});
			$('#loadlistbox .list-group-item').dblclick(function(){
				
				$("#alert_loading").show();
				$('#load-box').hide();
				var loadname = $(this).find('.file').text();
				console.log(loadname);
				$.ajax({
					url:'save-loadpattern.php',
					data: {loadpattern: 'load',
						   loadfile:loadname },
					type:'post',
					success:function(output){
//						alert(output);
//					}
//					complete:function(output){
						
						
						var loadld = JSON.parse(output);
						console.log(loadld.channel1_pattern.split(""));
						console.log(loadld.channel2_pattern.split(""));		console.log(loadld.channel3_pattern.split(""));
						console.log(loadld.channel4_pattern.split(""));
						console.log(loadld.channel5_pattern.split(""));
						$('#Tempo').val(loadld.tempo/4);
						$('#trackselect_a').val(loadld.channel1_name);
						$('#trackselect_b').val(loadld.channel2_name);
						$('#trackselect_c').val(loadld.channel3_name);
						$('#trackselect_d').val(loadld.channel4_name);
						$('#trackselect_e').val(loadld.channel5_name);
						var samples_a = track_select_a.options[track_select_a.selectedIndex].value;
						if(samples_a=="unselected"){  channelA_name="unselected";
							monotonous_a.tick(function(t,d){ 

							});
						}
						else if(samples_a=="can"){  channelA_name="can";
						monotonous_a.tick(function(t,d){
									if(d){clip_can.play(t)}	  
						});
						} 
						else if(samples_a=="glass"){  channelA_name="glass";
						monotonous_a.tick(function(t,d){
									if(d){clip_glass.play(t)}	  
						});
						}
						else if(samples_a=="plastic"){  channelA_name="plastic";
						monotonous_a.tick(function(t,d){
									if(d){clip_plastic.play(t)}	  
						});
						}
						else if(samples_a=="kick"){  channelA_name="kick";
						monotonous_a.tick(function(t,d){
									if(d){clip_kick.play(t)}	  
						});
						}
						else if(samples_a=="snare"){  channelA_name="snare";
						monotonous_a.tick(function(t,d){
									if(d){clip_snare.play(t)}	  
						});
						}
						var samples_b= track_select_b.options[track_select_b.selectedIndex].value;
		if(samples_b=="unselected"){
		monotonous_b.tick(function(t,d){ channelB_name="unselected";
					
		});
		}
		else if(samples_b=="can"){   channelB_name="can";
		monotonous_b.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_b=="glass"){  channelB_name="glass";
		monotonous_b.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_b=="plastic"){   channelB_name="plastic";
		monotonous_b.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_b=="kick"){   channelB_name="kick";
		monotonous_b.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_b=="snare"){   channelB_name="snare";
		monotonous_b.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
var samples_c = track_select_c.options[track_select_c.selectedIndex].value;
		if(samples_c=="unselected"){
		monotonous_c.tick(function(t,d){  channelC_name="unselected";
					
		});
		}
		else if(samples_c=="can"){  channelC_name="can";
		monotonous_c.tick(function(t,d){ 
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_c=="glass"){   channelC_name="glass";
		monotonous_c.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_c=="plastic"){  channelC_name="plastic";
		monotonous_c.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_c=="kick"){   channelC_name="kick";
		monotonous_c.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_c=="snare"){  channelC_name="snare";
		monotonous_c.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
var samples_d = track_select_d.options[track_select_d.selectedIndex].value;
		if(samples_d=="unselected"){
		monotonous_d.tick(function(t,d){ channelD_name="unselected";
					
		});
		}
		else if(samples_d=="can"){  channelD_name="can";
		monotonous_d.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_d=="glass"){  channelD_name="glass";
		monotonous_d.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_d=="plastic"){  channelD_name="plastic";
		monotonous_d.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_d=="kick"){ channelD_name="kick";
		monotonous_d.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_d=="snare"){ channelD_name="snare";
		monotonous_d.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
var samples_e = track_select_e.options[track_select_e.selectedIndex].value;
		if(samples_e=="unselected"){
		monotonous_e.tick(function(t,d){ channelE_name="unselected";
					
		});
		}
		else if(samples_e=="can"){ channelE_name="snare";
		monotonous_e.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_e=="glass"){ channelE_name="snare";
		monotonous_e.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_e=="plastic"){ channelE_name="plastic";
		monotonous_e.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_e=="kick"){ channelE_name="kick";
		monotonous_e.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_e=="snare"){ channelE_name="snare";
		monotonous_e.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
						A=loadld.channel1_pattern.split("").map(function(item) {
    						return parseInt(item, 10);
						});
						B=loadld.channel2_pattern.split("").map(function(item) {
    						return parseInt(item, 10);
						});
						C=loadld.channel3_pattern.split("").map(function(item) {
    						return parseInt(item, 10);
						});
						D=loadld.channel4_pattern.split("").map(function(item) {
    						return parseInt(item, 10);
						});
						E=loadld.channel5_pattern.split("").map(function(item) {
    						return parseInt(item, 10);
						});
						console.log(A);
						console.log(B);		
						console.log(C);
						console.log(D);
						console.log(E);
						for(var i=0;i<16;i++){
							 var e=i+1;
							if(A[i]==1){   
								$("#A"+e).removeClass("track_off").addClass("track_on");
							}
							else{
								$("#A"+e).removeClass("track_on").addClass("track_off");
							}

							if(B[i]==1){   
								$("#B"+e).removeClass("track_off").addClass("track_on");
							}
							else{
								$("#B"+e).removeClass("track_on").addClass("track_off");
							}

							if(C[i]==1){   
								$("#C"+e).removeClass("track_off").addClass("track_on");
							}
							else{
								$("#C"+e).removeClass("track_on").addClass("track_off");
							}

							if(D[i]==1){   
								$("#D"+e).removeClass("track_off").addClass("track_on");
							}
							else{
							$("#D"+e).removeClass("track_on").addClass("track_off");
							}

							if(E[i]==1){   
							$("#E"+e).removeClass("track_off").addClass("track_on");
							}
							else{
							$("#E"+i+1).removeClass("track_on").addClass("track_off");
							}
						}
						
						monotonous_a.data(A);
						monotonous_b.data(B);
						monotonous_c.data(C);
						monotonous_d.data(D);
						monotonous_e.data(E);
			
						$('#filename').val(loadname);
						importSounds(username);
						for(var i=0;i<26;i++){
							
							readit(keyorder.charAt(i));
						}
						$("#load-panel").modal('hide');
					}
				});
			});
			});			
		});
			
	  for(j=1;j<=3;j++){
		if(j==1){
			for(i=0;i<10;i++){
				uploadinput(keyorder.charAt(i),j);
			}
		}
		if(j==2){
			for(i=10;i<19;i++){
				uploadinput(keyorder.charAt(i),j);
			}
		}
		if(j==3){
			for(i=19;i<26;i++){
				uploadinput(keyorder.charAt(i),j);
			}
		}
	}
	function uploadinput(keych,j){
		 document.getElementById("row"+j).innerHTML += '<form method="post" id="upload_'+keych+'" class="upload_f" name="uploader" enctype="multipart/form-data" action="upload.php">  <div class="btn-group" role="group"> <button type="button" class="btn btn-default panel-left">'+keych+'</button> <div class="fileUpload btn btn-default panel-middle"><span id="preview_'+keych+'">&nbsp;</span><input id="audioinput'+keych+'" class="upload" name="audioupload" type="file"/></div>	<div class="fileUpload btn btn-default panel-right"><span class="glyphicon glyphicon-open"></span><input  id="submit_'+keych+'" type="submit" class="upload" name="submit"/> </div> <div class="fileUpload btn btn-default panel-right"><span class="glyphicon glyphicon-remove"></span><input id="clear_'+keych+'"  type="reset" class="upload" name="clear" /> </div></div></form>\n';
	
	}
	for(var i=0;i<26;i++){
		
		readit(keyorder.charAt(i));
	}
		  
		function readit(keych){
		
		 	$.ajax({
				url: "upload.php",
				data: {stread: keych},
				type: 'post',
//				target:'#preview_'+keych,
				success:function(output){
					$("#preview_"+keych).html(output);
					$("#"+keych.charCodeAt(0)).tooltip('hide')
						.attr('title', output)
          				.tooltip('fixTitle');
         
					if(output!='Click here to choose a file'){
						console.log(keych.charCodeAt(0));
						$("#"+keych.charCodeAt(0)).css('background','#ffcce0');
					}else{
						$("#"+keych.charCodeAt(0)).removeAttr('style');
						$("#"+keych.charCodeAt(0)).tooltip('hide')
						.attr('title', 'No sound')
          				.tooltip('fixTitle');
					}
					
				}
	 		});
	
		}
	
	
	//test buzz
//		var allowed = true;
		var sound_demo = new buzz.sound("/WebProjectRectonote/demo/Avicii - Waiting For Love (Extended Mix).mp3");
		//DemoSound
		
		var demo_A = new buzz.sound("/WebProjectRectonote/demo/A.mp3");
		var demo_B = new buzz.sound("/WebProjectRectonote/demo/B.mp3");
		var demo_C = new buzz.sound("/WebProjectRectonote/demo/C.mp3");
		var demo_D = new buzz.sound("/WebProjectRectonote/demo/D.mp3");
		var demo_E = new buzz.sound("/WebProjectRectonote/demo/E.mp3");
		var demo_F = new buzz.sound("/WebProjectRectonote/demo/F.mp3");
		var demo_G = new buzz.sound("/WebProjectRectonote/demo/G.mp3");
		var demo_H = new buzz.sound("/WebProjectRectonote/demo/H.mp3");
		var demo_I = new buzz.sound("/WebProjectRectonote/demo/I.mp3");
		var demo_J = new buzz.sound("/WebProjectRectonote/demo/J.mp3");
		var demo_K = new buzz.sound("/WebProjectRectonote/demo/K.mp3");
		var demo_L = new buzz.sound("/WebProjectRectonote/demo/L.mp3");
		var demo_M = new buzz.sound("/WebProjectRectonote/demo/M.mp3");
		var demo_N = new buzz.sound("/WebProjectRectonote/demo/N.mp3");
		var demo_O = new buzz.sound("/WebProjectRectonote/demo/O.mp3");
		var demo_P = new buzz.sound("/WebProjectRectonote/demo/P.mp3");
		var demo_Q = new buzz.sound("/WebProjectRectonote/demo/Q.mp3");
		var demo_R = new buzz.sound("/WebProjectRectonote/demo/R.mp3");
		var demo_S = new buzz.sound("/WebProjectRectonote/demo/S.mp3");
		var demo_T = new buzz.sound("/WebProjectRectonote/demo/T.mp3");
		var demo_U = new buzz.sound("/WebProjectRectonote/demo/U.mp3");
		var demo_V = new buzz.sound("/WebProjectRectonote/demo/V.mp3");
		var demo_W = new buzz.sound("/WebProjectRectonote/demo/W.mp3");
		var demo_X = new buzz.sound("/WebProjectRectonote/demo/X.mp3");
		var demo_Y = new buzz.sound("/WebProjectRectonote/demo/Y.mp3");
		var demo_Z = new buzz.sound("/WebProjectRectonote/demo/Z.mp3");
		
		
		
		  
		  
		var sound_A =  new buzz.sound("user/"+username+"/temp/samples/A.mp3");
		var sound_B =  new buzz.sound("user/"+username+"/temp/samples/B.mp3");
		var sound_C =  new buzz.sound("user/"+username+"/temp/samples/C.mp3");
		var sound_D =  new buzz.sound("user/"+username+"/temp/samples/D.mp3");
		var sound_E =  new buzz.sound("user/"+username+"/temp/samples/E.mp3");
		var sound_F =  new buzz.sound("user/"+username+"/temp/samples/F.mp3");
		var sound_G =  new buzz.sound("user/"+username+"/temp/samples/G.mp3");
		var sound_H =  new buzz.sound("user/"+username+"/temp/samples/H.mp3");
		var sound_I =  new buzz.sound("user/"+username+"/temp/samples/I.mp3");
		var sound_J =  new buzz.sound("user/"+username+"/temp/samples/J.mp3");
		var sound_K =  new buzz.sound("user/"+username+"/temp/samples/K.mp3");
		var sound_L =  new buzz.sound("user/"+username+"/temp/samples/L.mp3");
		var sound_M =  new buzz.sound("user/"+username+"/temp/samples/M.mp3");
		var sound_N =  new buzz.sound("user/"+username+"/temp/samples/N.mp3");
		var sound_O =  new buzz.sound("user/"+username+"/temp/samples/O.mp3");
		var sound_P =  new buzz.sound("user/"+username+"/temp/samples/P.mp3");
		var sound_Q =  new buzz.sound("user/"+username+"/temp/samples/Q.mp3");
		var sound_R =  new buzz.sound("user/"+username+"/temp/samples/R.mp3");
		var sound_S =  new buzz.sound("user/"+username+"/temp/samples/S.mp3");
		var sound_T =  new buzz.sound("user/"+username+"/temp/samples/T.mp3");
		var sound_U =  new buzz.sound("user/"+username+"/temp/samples/U.mp3");
		var sound_V =  new buzz.sound("user/"+username+"/temp/samples/V.mp3");
		var sound_W =  new buzz.sound("user/"+username+"/temp/samples/W.mp3");
		var sound_X =  new buzz.sound("user/"+username+"/temp/samples/X.mp3");
		var sound_Y =  new buzz.sound("user/"+username+"/temp/samples/Y.mp3");
		var sound_Z =  new buzz.sound("user/"+username+"/temp/samples/Z.mp3");
//	
//	window.addEventListener('load', importSounds());
	function importSounds(username){
		sound_A =  new buzz.sound("user/"+username+"/temp/samples/A.mp3");
		sound_B =  new buzz.sound("user/"+username+"/temp/samples/B.mp3");
		sound_C =  new buzz.sound("user/"+username+"/temp/samples/C.mp3");
		sound_D =  new buzz.sound("user/"+username+"/temp/samples/D.mp3");
		sound_E =  new buzz.sound("user/"+username+"/temp/samples/E.mp3");
		sound_F =  new buzz.sound("user/"+username+"/temp/samples/F.mp3");
		sound_G =  new buzz.sound("user/"+username+"/temp/samples/G.mp3");
		sound_H =  new buzz.sound("user/"+username+"/temp/samples/H.mp3");
		sound_I =  new buzz.sound("user/"+username+"/temp/samples/I.mp3");
		sound_J =  new buzz.sound("user/"+username+"/temp/samples/J.mp3");
		sound_K =  new buzz.sound("user/"+username+"/temp/samples/K.mp3");
		sound_L =  new buzz.sound("user/"+username+"/temp/samples/L.mp3");
		sound_M =  new buzz.sound("user/"+username+"/temp/samples/M.mp3");
		sound_N =  new buzz.sound("user/"+username+"/temp/samples/N.mp3");
		sound_O =  new buzz.sound("user/"+username+"/temp/samples/O.mp3");
		sound_P =  new buzz.sound("user/"+username+"/temp/samples/P.mp3");
		sound_Q =  new buzz.sound("user/"+username+"/temp/samples/Q.mp3");
		sound_R =  new buzz.sound("user/"+username+"/temp/samples/R.mp3");
		sound_S =  new buzz.sound("user/"+username+"/temp/samples/S.mp3");
		sound_T =  new buzz.sound("user/"+username+"/temp/samples/T.mp3");
		sound_U =  new buzz.sound("user/"+username+"/temp/samples/U.mp3");
		sound_V =  new buzz.sound("user/"+username+"/temp/samples/V.mp3");
		sound_W =  new buzz.sound("user/"+username+"/temp/samples/W.mp3");
		sound_X =  new buzz.sound("user/"+username+"/temp/samples/X.mp3");
		sound_Y =  new buzz.sound("user/"+username+"/temp/samples/Y.mp3");
		sound_Z =  new buzz.sound("user/"+username+"/temp/samples/Z.mp3");
		
	}
	
	
	
		$("#submit_Q").click(function(){imported(keyorder.charAt(0));});
		$("#submit_W").click(function(){imported(keyorder.charAt(1));});
		$("#submit_E").click(function(){imported(keyorder.charAt(2));});
		$("#submit_R").click(function(){imported(keyorder.charAt(3));});
		$("#submit_T").click(function(){imported(keyorder.charAt(4));});
		$("#submit_Y").click(function(){imported(keyorder.charAt(5));});
		$("#submit_U").click(function(){imported(keyorder.charAt(6));});
		$("#submit_I").click(function(){imported(keyorder.charAt(7));});
		$("#submit_O").click(function(){imported(keyorder.charAt(8));});
		$("#submit_P").click(function(){imported(keyorder.charAt(9));});
		$("#submit_A").click(function(){imported(keyorder.charAt(10));});
		$("#submit_S").click(function(){imported(keyorder.charAt(11));});
		$("#submit_D").click(function(){imported(keyorder.charAt(12));});
		$("#submit_F").click(function(){imported(keyorder.charAt(13));});
		$("#submit_G").click(function(){imported(keyorder.charAt(14));});
		$("#submit_H").click(function(){imported(keyorder.charAt(15));});
		$("#submit_J").click(function(){imported(keyorder.charAt(16));});
		$("#submit_K").click(function(){imported(keyorder.charAt(17));});
		$("#submit_L").click(function(){imported(keyorder.charAt(18));});
		$("#submit_Z").click(function(){imported(keyorder.charAt(19));});
		$("#submit_X").click(function(){imported(keyorder.charAt(20));});
		$("#submit_C").click(function(){imported(keyorder.charAt(21));});
		$("#submit_V").click(function(){imported(keyorder.charAt(22));});
		$("#submit_B").click(function(){imported(keyorder.charAt(23));});
		$("#submit_N").click(function(){imported(keyorder.charAt(24));});
		$("#submit_M").click(function(){imported(keyorder.charAt(25));});
	

	
	
		function imported(keych){
			$("#preview_"+keych).html('<img src="images/ajax-loader.gif" />');
		 	$("#upload_"+(keych)).ajaxForm({
				data: {action: keych},
				type: 'post',
				target:'#preview_'+keych,
				success:function(output){
					console.log(output);
					importSounds(username);
					$("#"+keych.charCodeAt(0)).tooltip('hide')
						.attr('title', output)
          				.tooltip('fixTitle');
				if(output.indexOf('.mp3') > -1){
			
					$("#"+keych.charCodeAt(0)).css('background','#ffcce0');
				}else
					$("#"+keych.charCodeAt(0)).tooltip('hide')
						.attr('title', 'No sound')
          				.tooltip('fixTitle');
					$("#"+keych.charCodeAt(0)).css('background','#999999');
				}
	 		});
			
		}
	
	
		$("#clear_Q").click(function(){cleared(keyorder.charAt(0));});
		$("#clear_W").click(function(){cleared(keyorder.charAt(1));});
		$("#clear_E").click(function(){cleared(keyorder.charAt(2));});
		$("#clear_R").click(function(){cleared(keyorder.charAt(3));});
		$("#clear_T").click(function(){cleared(keyorder.charAt(4));});
		$("#clear_Y").click(function(){cleared(keyorder.charAt(5));});
		$("#clear_U").click(function(){cleared(keyorder.charAt(6));});
		$("#clear_I").click(function(){cleared(keyorder.charAt(7));});
		$("#clear_O").click(function(){cleared(keyorder.charAt(8));});
		$("#clear_P").click(function(){cleared(keyorder.charAt(9));});
		$("#clear_A").click(function(){cleared(keyorder.charAt(10));});
		$("#clear_S").click(function(){cleared(keyorder.charAt(11));});
		$("#clear_D").click(function(){cleared(keyorder.charAt(12));});
		$("#clear_F").click(function(){cleared(keyorder.charAt(13));});
		$("#clear_G").click(function(){cleared(keyorder.charAt(14));});
		$("#clear_H").click(function(){cleared(keyorder.charAt(15));});
		$("#clear_J").click(function(){cleared(keyorder.charAt(16));});
		$("#clear_K").click(function(){cleared(keyorder.charAt(17));});
		$("#clear_L").click(function(){cleared(keyorder.charAt(18));});
		$("#clear_Z").click(function(){cleared(keyorder.charAt(19));});
		$("#clear_X").click(function(){cleared(keyorder.charAt(20));});
		$("#clear_C").click(function(){cleared(keyorder.charAt(21));});
		$("#clear_V").click(function(){cleared(keyorder.charAt(22));});
		$("#clear_B").click(function(){cleared(keyorder.charAt(23));});
		$("#clear_N").click(function(){cleared(keyorder.charAt(24));});
		$("#clear_M").click(function(){cleared(keyorder.charAt(25));});
	
		function cleared(keych){
			
			$("#preview_"+keych).html('<span class="glyphicon glyphicon-trash"></span>');
		 	$.ajax({
				url:"upload.php",
				data: {trash: keych},
				type: 'post',
//				target:'#preview_'+keych 
				success:function(){
					$("#preview_"+keych).html('<span>File deleted. Choose file again </span>');
					$("#"+keych.charCodeAt(0)).removeAttr('style');
					importSounds(username);
					$("#"+keych.charCodeAt(0)).tooltip('hide')
						.attr('title', 'No sound')
          				.tooltip('fixTitle');
				}
	 		});
			
			
		}
		
		$('#logout_button').click(function(){
			$.ajax({
				url:"account.php",
				data: {logout: "logout"},
				type: 'post',
				success:function(output){
				
					location.href="index.php";
				}
			});
			
		});
		
		//Tutorial
		  
		 $('#tutorial_panel').on('show.bs.modal',function(){
			 var $this = $('#myCarousel');
			  if($('.carousel-inner .item:first').hasClass('active')) {
					  console.log('first');
					$this.children('.left.carousel-control').hide();
				  }
			 $('#myCarousel').on('slid.bs.carousel','',function(){
				var $this = $('#myCarousel');
				 
				 if($('.item:first').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html('Getting Started');
					 $this.children('.left.carousel-control').hide();
					 $this.children('.right.carousel-control').show();
				 }else if($('.item:nth-child(2)').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html('1. Padplayer');
					 $this.children('.carousel-control').show();
				 }else if($('.item:nth-child(3)').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html('2. Samples Loader');
					 $this.children('.carousel-control').show();
				 }else if($('.item:nth-child(4)').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html('3. Loop Deck');
					 $this.children('.carousel-control').show();
				 }else if($('.item:nth-child(5)').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html('4. Save Pattern');
					 $this.children('.carousel-control').show();
				 }else if($('.item:nth-child(6)').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html('5. Load Pattern');
					 $this.children('.carousel-control').show();
				 }else if($('.item:nth-child(7)').hasClass('active')){
//					 $('#tutorial_panel .modal-title').html("6. Let's Try" );
					 $this.children('.carousel-control').show();
				 }else if($('.item:last').hasClass('active')){
					 $('#tutorial_panel .modal-title').html('Completed');
					 $this.children('.right.carousel-control').hide();
					 $this.children('.left.carousel-control').show();
				 }
			 });
		 });
		
		 
		  
		
	
		 //Demo
		  $('#alert_demo').hide();
		 var BgChk = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		$('#demo1').click(function(){
			//DemoAof
			//save pink
			
			
			if( demo%2 ==0){
				
				for(var i=0;i<26;i++){
					if(document.getElementById(i+65).style.background=="rgb(255, 204, 224)"){
						BgChk[i] = 1;
					}

				}
				for(var i=0;i<26;i++){
					document.getElementById(i+65).style.background = "#ffcce0";	
				}
				
				abc = 1;
				console.log(keyorder);
				$('#demo1 span').removeClass('glyphicon-play').addClass('glyphicon-stop');
				for(var i=0;i<26;i++){
					var ch_num=keyorder.charCodeAt(i);
					var ch_key=keyorder.charAt(i);
					if($('#'+ch_num).hasClass('pad_ld')){
						console.log
					}else {
					
					}
				}
				$('#alert_demo').show();
				
				buzz.all().stop();
				sound_demo.play();
				sound_demo.setSpeed(2);
				sound_demo.mute();
				sound_demo.bind("timeupdate", function(e) {
					var timer = buzz.toTimer(this.getTime());
					//$('#demo1').html(timer);
					if( timer == "00:01" ){
						demo_G.play();
						demo_H.play();
						$("#71,#72").addClass("pad_on").removeClass("pad_off");
					}
					if( timer == "00:07" ){
						demo_G.stop();
						demo_H.stop();
						$("#71,#72").addClass("pad_off").removeClass("pad_on");
						demo_S.play();
						$("#83").addClass("pad_on").removeClass("pad_off");
					}
					if( timer == "00:08" ){
						demo_G.play();
						demo_H.play();
						$("#71,#72").addClass("pad_on").removeClass("pad_off");
						demo_S.stop();
						$("#83").addClass("pad_off").removeClass("pad_on");
					}
					if( timer == "00:15" ){
						demo_G.stop();
						demo_H.stop();
						$("#71,#72").addClass("pad_off").removeClass("pad_on");
						demo_S.play();
						$("#83").addClass("pad_on").removeClass("pad_off");
					}
					if( timer == "00:17" ){
						demo_S.stop();	
						$("#83").addClass("pad_off").removeClass("pad_on");
					}
					if( timer == "00:17" ){					
						demo_J.play();
						$("#74").addClass("pad_on").removeClass("pad_off");
					}
					if( timer == "00:21" ){
						demo_J.stop();
						$("#74").addClass("pad_off").removeClass("pad_on");
						demo_H.play();
						$("#72").addClass("pad_on").removeClass("pad_off");
					}
					if( timer == "00:26" ){
						demo_J.play();
						$("#74").addClass("pad_on").removeClass("pad_off");
						demo_H.stop();
						$("#72").addClass("pad_off").removeClass("pad_on");
					}
					if( timer == "00:31" ){
						demo_J.stop();
						$("#74").addClass("pad_off").removeClass("pad_on");
						demo_H.play();
						$("#72").addClass("pad_on").removeClass("pad_off");
					}
					if( timer == "01:00" ){
						
						$("#72").addClass("pad_off").removeClass("pad_on");
						$('#demo1 span').addClass('glyphicon-play').removeClass('glyphicon-stop');
						abc=0;
						$('#alert_demo').hide();
						for(var i=0;i<26;i++)
						{
							if(BgChk[i] != 1){
								document.getElementById(i+65).style.background = "#999999";
							}
							BgChk[i] = 0;
						}
						
						
//						for(var i=0;i<keyorder.length();i++){
//							if($('#'+keyorder.charAt(i)).hasClass('pad_ld')){
//								$(this).addClass("pad_ld").removeClass('pad_off');
//							}
//						}
					}
				});
				
					
					
				
			}
			else{
				
				for(var i=0;i<26;i++)
				{
					if(BgChk[i] != 1){
						document.getElementById(i+65).style.background = "#999999";	
					}
					BgChk[i] = 0;
				}
				
				abc = 0;
				$('#alert_demo').hide();
				buzz.all().stop();
				$('#demo1 span').addClass('glyphicon-play').removeClass('glyphicon-stop');
				for(var i=0;i<26;i++){
					var ch_num=keyorder.charCodeAt(i);
					var ch_key=keyorder.charAt(i);
					$('#'+ch_num).removeClass('pad_on').addClass('pad_off');
				}
					
			}
			demo+=1;
		});
		
		
					
		$(document).keydown(function(event) { 
//			if (event.repeat != undefined) {
//				allowed = !event.repeat;
//			}
//			if (!allowed) return 
//			allowed = false;
			
			
			if(event.which==16){
				$("#shift").removeClass("shift_off").addClass("shift_on");
				console.log(event.which);
			
			}
				
			
		});

		$(document).keypress(function(event){
			console.log(" keypress==> "+event.which);
			//Tap
			
			if(abc != 1){
			
			if(event.which==97 ){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_A.stop();
					sound_A.play();
				}
			}
			if(event.which==98){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_B.stop();
					sound_B.play();
				}
			}
			if(event.which==99){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_C.stop();
					sound_C.play();
				}
			}
			if(event.which==100){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_D.stop();
					sound_D.play();
				}
			}
			if(event.which==101){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_E.stop();
					sound_E.play();
				}
			}
			if(event.which==102){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_F.stop();
					sound_F.play();
				}
			}
			if(event.which==103){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_G.stop();
					sound_G.play();
				}
			}
			if(event.which==104){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_H.stop();
					sound_H.play();
				}
			}
			if(event.which==105){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_I.stop();
					sound_I.play();
				}
			}
			if(event.which==106){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_J.stop();
					sound_J.play();
				}
			}
			if(event.which==107){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_K.stop();
					sound_K.play();
				}
			}
			if(event.which==108){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_L.stop();
					sound_L.play();
				}
			}
			if(event.which==109){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if (playchk[event.which-97]==1){
					sound_M.stop();
					sound_M.play();
				}
			}
			if(event.which==110){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if (playchk[event.which-97]==1){
					sound_N.stop();
					sound_N.play();
				}
			}
			if(event.which==111){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if (playchk[event.which-97]==1){
					sound_O.stop();
					sound_O.play();
				}
			}
			if(event.which==112){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_P.stop();
					sound_P.play();
				}
			}
			if(event.which==113){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_Q.stop();
					sound_Q.play();
				}
			}
			if(event.which==114){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_R.stop();
					sound_R.play();
				}
			}
			if(event.which==115){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_S.stop();
					sound_S.play();
				}
			}
			if(event.which==116){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_T.stop();
					sound_T.play();
				}
			}
			if(event.which==117){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_U.stop();
					sound_U.play();
				}
			}
			if(event.which==118){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_V.stop();
					sound_V.play();
				}
			}
			if(event.which==119){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_W.stop();
					sound_W.play();
				}
			}
			if(event.which==120){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_X.stop();
					sound_X.play();
				}
			}
			if(event.which==121){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_Y.stop();
					sound_Y.play();
				}
			}
			if(event.which==122){
				$("#"+(event.which-32)).removeClass("pad_off").addClass("pad_on");
				playchk[event.which-97]+=1;
				if(playchk[event.which-97]==1){
					sound_Z.stop();
					sound_Z.play();
				}
			}
				
//				playchk[event.which-97]=1;
//				if(playchk[event.which-97]==1){
//					soundarr[event.which-97].stop();
//					soundarr[event.which-97].play();					
////					snare.stop();
////					snare.play();
//				}
//				console.log("play");
			

			//Hold
			if(event.which>=65&&event.which<=90){
				$("#"+(event.which)).removeClass("pad_off").addClass("pad_on");
				console.log(chk[event.which-65]);
				if(chk[event.which-65]==0){
					chk[event.which-65]=1;
					if(event.which-65==0){						
						sound_A.play();
					}
					if(event.which-65==1){
						sound_B.play();
					}
					if(event.which-65==2){
						sound_C.play();
					}
					if(event.which-65==3){
						sound_D.play();
					}
					if(event.which-65==4){
						sound_E.play();
					}
					if(event.which-65==5){
						sound_F.play();
					}
					if(event.which-65==6){
						sound_G.play();
					}
					if(event.which-65==7){
						sound_H.play();
					}
					if(event.which-65==8){
						sound_I.play();
					}
					if(event.which-65==9){
						sound_J.play();
					}
					if(event.which-65==10){
						sound_K.play();
					}
					if(event.which-65==11){
						sound_L.play();
					}
					if(event.which-65==12){
						sound_M.play();
					}
					if(event.which-65==13){
						sound_N.play();
					}
					if(event.which-65==14){
						sound_O.play();
					}
					if(event.which-65==15){
						sound_P.play();
					}
					if(event.which-65==16){
						sound_Q.play();
					}
					if(event.which-65==17){
						sound_R.play();
					}
					if(event.which-65==18){
						sound_S.play();
					}
					if(event.which-65==19){
						sound_T.play();
					}
					if(event.which-65==20){
						sound_U.play();
					}
					if(event.which-65==21){
						sound_V.play();
					}
					if(event.which-65==22){
						sound_W.play();
					}
					if(event.which-65==23){
						sound_X.play();
					}
					if(event.which-65==24){
						sound_Y.play();
					}
					if(event.which-65==25){
						sound_Z.play();
					}
					
					console.log("play");
					
				}
				else{
					chk[event.which-65]=0;
					if(event.which-65==0){						
						sound_A.stop();
					}
					if(event.which-65==1){
						sound_B.stop();
					}
					if(event.which-65==2){
						sound_C.stop();
					}
					if(event.which-65==3){
						sound_D.stop();
					}
					if(event.which-65==4){
						sound_E.stop();
					}
					if(event.which-65==5){
						sound_F.stop();
					}
					if(event.which-65==6){
						sound_G.stop();
					}
					if(event.which-65==7){
						sound_H.stop();
					}
					if(event.which-65==8){
						sound_I.stop();
					}
					if(event.which-65==9){
						sound_J.stop();
					}
					if(event.which-65==10){
						sound_K.stop();
					}
					if(event.which-65==11){
						sound_L.stop();
					}
					if(event.which-65==12){
						sound_M.stop();
					}
					if(event.which-65==13){
						sound_N.stop();
					}
					if(event.which-65==14){
						sound_O.stop();
					}
					if(event.which-65==15){
						sound_P.stop();
					}
					if(event.which-65==16){
						sound_Q.stop();
					}
					if(event.which-65==17){
						sound_R.stop();
					}
					if(event.which-65==18){
						sound_S.stop();
					}
					if(event.which-65==19){
						sound_T.stop();
					}
					if(event.which-65==20){
						sound_U.stop();
					}
					if(event.which-65==21){
						sound_V.stop();
					}
					if(event.which-65==22){
						sound_W.stop();
					}
					if(event.which-65==23){
						sound_X.stop();
					}
					if(event.which-65==24){
						sound_Y.stop();
					}
					if(event.which-65==25){
						sound_Z.stop();
					}
					console.log("stop");
				}
			}
			}
		});

		$(document).keyup(function(event) {
			if(abc != 1){
			if(event.which==65){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_A.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
				console.log(playchk[event.which-65]);
				console.log(event.which);
			}
			if(event.which==66){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_B.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==67){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_C.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			
			if(event.which==68){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_D.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==69){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_E.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==70){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_F.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==71){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_G.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}	
			if(event.which==72){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_H.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==73){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_I.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==74){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_J.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==75){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_K.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==76){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_L.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==77){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_M.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==78){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_N.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==79){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_O.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			
			if(event.which==80){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_P.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==81){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_Q.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==82){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_R.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==83){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_S.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==84){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_T.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==85){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_U.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==86){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_V.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==87){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_W.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==88){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_X.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==89){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_Y.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			if(event.which==90){
				if(chk[event.which-65]==0){
					$("#"+event.which).removeClass("pad_on").addClass("pad_off");
					sound_Z.stop();
				}
				if(playchk[event.which-65]>0)
					playchk[event.which-65]=0;
			}
			
			
			if(event.which==16){
				$("#shift").removeClass("shift_on").addClass("shift_off");
			}
			}
		});


	  
	$('#save-panel').on('show.bs.modal', function () {
 		$('#savebox').show();
		$('#alert_overwrite').hide(); 
		$('#alert_savesuccess').hide();
		$('#alert_saving').hide();
		abc =1 ;
	});
	$('#save-panel').on('hidden.bs.modal', function () {
		abc = 0 ;
	}); 
		  
//	$('#save-panel').on('show.bs.modal', function () {
// 		$('#savebox').show();
//		$('#alert_overwrite').hide(); 
//		$('#alert_savesuccess').hide();
//		$('#alert_saving').hide();
//	});	  
	
	$('#alert_overwrite').hide(); 
	$('#alert_savesuccess').hide();
	$('#alert_saving').hide();
	$('#save_button').click(function(){
		var patternA = A.join("");
		var patternB = B.join("");
		var patternC = C.join("");
		var patternD = D.join("");
		var patternE = E.join("");
		var file_name = $('#filename').val();
		console.log(file_name);
		if(!file_name){
						
		}else if (file_name=="temp"){
			alert('Do not allowed to save this name!');
			 $('#filename').val('');
		}
		else{
			$('#alert_saving').show();
			$('#savebox').hide();

			$.post('save-loadpattern.php',{file_name: file_name},function(output){
				var chkfilexist = output;
				
			if(chkfilexist == file_name){
				$('#alert_saving').hide();
				$('#savebox').hide();
				$('#alert_overwrite').show(); 
				$('#overwrite').click(function(){
					$('#alert_overwrite').hide(); 
					$('#alert_saving').show();
					$.ajax({
						type:'post',
						url: 'save-loadpattern.php',
						data: {
							overwrite: 'save',
							file_name: file_name,
							channel1_name: channelA_name,
							channel1_pattern:  patternA,
							channel2_name: channelB_name,
							channel2_pattern:  patternB,
							channel3_name: channelC_name,
							channel3_pattern:  patternC,
							channel4_name: channelD_name,
							channel4_pattern:  patternD,
							channel5_name: channelE_name,
							channel5_pattern:  patternE,
							tempo : Tempo

					  },
					  complete:function(){
						  	$('#alert_saving').hide();
							$('#alert_savesuccess').html('Overwrite Successful!');
						 	$('#alert_savesuccess').show();
						  	
					  }
					});
				});
				
				$('#edited').click(function(){
					$('#alert_overwrite').hide();
					$('#savebox').show();

				});
			} else if(chkfilexist != file_name){
					$('#savebox').hide();
					$('#alert_saving').show();
					$.ajax({
						type:'post',
						url: 'save-loadpattern.php',
						data: {
							save: 'save',
							file_name: file_name,
							channel1_name: channelA_name,
							channel1_pattern:  patternA,
							channel2_name: channelB_name,
							channel2_pattern:  patternB,
							channel3_name: channelC_name,
							channel3_pattern:  patternC,
							channel4_name: channelD_name,
							channel4_pattern:  patternD,
							channel5_name: channelE_name,
							channel5_pattern:  patternE,
							tempo : Tempo

							  },
							complete:function(output){
								$('#alert_saving').hide();
								$('#alert_savesuccess').html('Pattern Saved!');
								$('#alert_savesuccess').show();
								console.log(output);
							}
					});
				}
			}); 
		}
	});

	
	var clip_can = blip.clip().sample('can');
    var clip_glass = blip.clip().sample('glass');
    var clip_plastic = blip.clip().sample('plastic');
	var clip_kick = blip.clip().sample('kick');
	var clip_snare = blip.clip().sample('snare');
	


	var timeline =	blip.loop()
		.tempo(Tempo)
		.data(TL)
		.tick(function(t,d,i){
			if(d){
				$("#TL"+(i+1)).removeClass("timeline_off").addClass("timeline_on");
				$("#TL"+i).removeClass("timeline_on").addClass("timeline_off");
				if(i==0){
					$("#TL"+16).removeClass("timeline_on").addClass("timeline_off");
				}
			}
			if($("#TL"+(i+1)).hasClass("timeline_on")){
				$("#A"+(i+1)).addClass("track_timeline_on");
				$("#A"+i).removeClass("track_timeline_on");
				$("#B"+(i+1)).addClass("track_timeline_on");
				$("#B"+i).removeClass("track_timeline_on");
				$("#C"+(i+1)).addClass("track_timeline_on");
				$("#C"+i).removeClass("track_timeline_on");
				$("#D"+(i+1)).addClass("track_timeline_on");
				$("#D"+i).removeClass("track_timeline_on");
				$("#E"+(i+1)).addClass("track_timeline_on");
				$("#E"+i).removeClass("track_timeline_on");
				if(i==0){
					$("#A"+16).removeClass("track_timeline_on");
					$("#B"+16).removeClass("track_timeline_on");
					$("#C"+16).removeClass("track_timeline_on");
					$("#D"+16).removeClass("track_timeline_on");
					$("#E"+16).removeClass("track_timeline_on");
					
					
				}	
			
			}
			}
		);
   
	var monotonous_a = blip.loop()
        .tempo(Tempo)
        .data(A)
        .tick(function(t,d) {
                 
        });
	
    
    var monotonous_b = blip.loop()
        .tempo(Tempo)
        .data(B)
        .tick(function(t,d) {
                   
        });

    var monotonous_c = blip.loop()
        .tempo(Tempo)
        .data(C)
        .tick(function(t,d) {
                   
        });

	 var monotonous_d = blip.loop()
        .tempo(Tempo)
        .data(D)
        .tick(function(t,d) {
                   
        });
	
	var monotonous_e = blip.loop()
        .tempo(Tempo)
        .data(E)
        .tick(function(t,d) {
                   
        });
	
	var samples_a;
	var track_select_a = document.getElementById("trackselect_a");
	var track_select_b = document.getElementById("trackselect_b");
	var track_select_c = document.getElementById("trackselect_c");
	var track_select_d = document.getElementById("trackselect_d");
	var track_select_e = document.getElementById("trackselect_e");
	
	
	document.getElementById("trackselect_a").addEventListener('click',function(){
		var samples_a = track_select_a.options[track_select_a.selectedIndex].value;
		if(samples_a=="unselected"){  channelA_name="unselected";
		monotonous_a.tick(function(t,d){ 
					
		});
		}
		else if(samples_a=="can"){  channelA_name="can";
		monotonous_a.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_a=="glass"){  channelA_name="glass";
		monotonous_a.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_a=="plastic"){  channelA_name="plastic";
		monotonous_a.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_a=="kick"){  channelA_name="kick";
		monotonous_a.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_a=="snare"){  channelA_name="snare";
		monotonous_a.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
	});
	
	document.getElementById("trackselect_b").addEventListener('click',function(){
		var samples_b= track_select_b.options[track_select_b.selectedIndex].value;
		if(samples_b=="unselected"){
		monotonous_b.tick(function(t,d){ channelB_name="unselected";
					
		});
		}
		else if(samples_b=="can"){   channelB_name="can";
		monotonous_b.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_b=="glass"){  channelB_name="glass";
		monotonous_b.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_b=="plastic"){   channelB_name="plastic";
		monotonous_b.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_b=="kick"){   channelB_name="kick";
		monotonous_b.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_b=="snare"){   channelB_name="snare";
		monotonous_b.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
	});
	
	document.getElementById("trackselect_c").addEventListener('click',function(){
		var samples_c = track_select_c.options[track_select_c.selectedIndex].value;
		if(samples_c=="unselected"){
		monotonous_c.tick(function(t,d){  channelC_name="unselected";
					
		});
		}
		else if(samples_c=="can"){  channelC_name="can";
		monotonous_c.tick(function(t,d){ 
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_c=="glass"){   channelC_name="glass";
		monotonous_c.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_c=="plastic"){  channelC_name="plastic";
		monotonous_c.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_c=="kick"){   channelC_name="kick";
		monotonous_c.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_c=="snare"){  channelC_name="snare";
		monotonous_c.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
	});

	document.getElementById("trackselect_d").addEventListener('click',function(){
		var samples_d = track_select_d.options[track_select_d.selectedIndex].value;
		if(samples_d=="unselected"){
		monotonous_d.tick(function(t,d){ channelD_name="unselected";
					
		});
		}
		else if(samples_d=="can"){  channelD_name="can";
		monotonous_d.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_d=="glass"){  channelD_name="glass";
		monotonous_d.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_d=="plastic"){  channelD_name="plastic";
		monotonous_d.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_d=="kick"){ channelD_name="kick";
		monotonous_d.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_d=="snare"){ channelD_name="snare";
		monotonous_d.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
	});
 
	document.getElementById("trackselect_e").addEventListener('click',function(){
		var samples_e = track_select_e.options[track_select_e.selectedIndex].value;
		if(samples_e=="unselected"){
		monotonous_e.tick(function(t,d){ channelE_name="unselected";
					
		});
		}
		else if(samples_e=="can"){ channelE_name="snare";
		monotonous_e.tick(function(t,d){
					if(d){clip_can.play(t)}	  
		});
		} 
		else if(samples_e=="glass"){ channelE_name="snare";
		monotonous_e.tick(function(t,d){
					if(d){clip_glass.play(t)}	  
		});
		}
		else if(samples_e=="plastic"){ channelE_name="plastic";
		monotonous_e.tick(function(t,d){
					if(d){clip_plastic.play(t)}	  
		});
		}
		else if(samples_e=="kick"){ channelE_name="kick";
		monotonous_e.tick(function(t,d){
					if(d){clip_kick.play(t)}	  
		});
		}
		else if(samples_e=="snare"){ channelE_name="snare";
		monotonous_e.tick(function(t,d){
					if(d){clip_snare.play(t)}	  
		});
		}
	});
	
    

	

    /* click events */
	
	
	
	
	document.getElementById('play_pause').addEventListener('click', function () {
		if(toggle){
		$(this).removeClass("play").addClass("pause");
		$("#play_pause > span").removeClass("glyphicon glyphicon-play").addClass("glyphicon glyphicon-pause");
		$("#Clear").addClass("disabled");
			console.log(A);
			console.log(B);
			console.log(C);
			console.log(D);
			console.log(E);
			
			timeline.tempo(Tempo);	
			monotonous_a.tempo(Tempo);
			monotonous_b.tempo(Tempo);
			monotonous_c.tempo(Tempo);
			monotonous_d.tempo(Tempo);
			monotonous_e.tempo(Tempo);
			timeline.start();
			monotonous_a.start();
			monotonous_b.start();
			monotonous_c.start();
			monotonous_d.start();
			monotonous_e.start();
			
			toggle--;
		
			
	
		}
		else{
		$(this).removeClass("pause").addClass("play");
		$("#play_pause > span").removeClass("glyphicon glyphicon-pause").addClass("glyphicon glyphicon-play");
		$("#Clear").removeClass("disabled");
			timeline.stop();	
		monotonous_a.stop();
		monotonous_b.stop();
		monotonous_c.stop();
		monotonous_d.stop();
		monotonous_e.stop();
		toggle++;
		}
	});
	$('#Tempo').on('keyup mouseup',function(){	
				console.log($('#Tempo').val());
				Tempo = $('#Tempo').val()*4;
				console.log(Tempo);
				timeline.tempo(Tempo);	
				monotonous_a.tempo(Tempo);
				monotonous_b.tempo(Tempo);
				monotonous_c.tempo(Tempo);
				monotonous_d.tempo(Tempo);
				monotonous_e.tempo(Tempo);
				if(Tempo>0 && toggle==0){
					
					timeline.stop();	
					monotonous_a.stop();
					monotonous_b.stop();
					monotonous_c.stop();
					monotonous_d.stop();
					monotonous_e.stop();
					timeline.start();
					monotonous_a.start();
					monotonous_b.start();
					monotonous_c.start();
					monotonous_d.start();
					monotonous_e.start();
				}
			
	});

	$("#stop").click(function(){
		$("#play_pause").removeClass("pause").addClass("play");
		$("#play_pause > span").removeClass("glyphicon glyphicon-pause").addClass("glyphicon glyphicon-play");
		$("#Clear").removeClass("disabled");
		var i;
		for(i=1;i<=16;i++){	
			if($("#TL"+i).hasClass("timeline_on")){
				$("#TL"+i).removeClass("timeline_on").addClass("timeline_off");
				$("#A"+i).removeClass("track_timeline_on");	
				$("#B"+i).removeClass("track_timeline_on");	
				$("#C"+i).removeClass("track_timeline_on");	
				$("#D"+i).removeClass("track_timeline_on");	
				$("#E"+i).removeClass("track_timeline_on");
			}
		}
		
timeline.stop();	
		monotonous_a.stop();
		monotonous_b.stop();
		monotonous_c.stop();
		monotonous_d.stop();
		monotonous_e.stop();
		timeline.reset()
		monotonous_a.reset();
		monotonous_b.reset();
		monotonous_c.reset();
		monotonous_d.reset();
		monotonous_e.reset();
		toggle=1;
	});
  
		
	
//	if(line[0]){
//		$("#TL1").removeClass("timeline_off").addClass("timeline_on");
//		line[0]=1
//	}

		/* Click ==> layer 1 */
	document.getElementById('A1').addEventListener('click', function () {
		if(A[0]){   
		$("#A1").removeClass("track_on").addClass("track_off");
			A[0]=0;
		}
		else{
		$("#A1").removeClass("track_off").addClass("track_on");
			A[0]=1;
		}
	});
	document.getElementById('A2').addEventListener('click', function () {
		if(A[1]){   
		$("#A2").removeClass("track_on").addClass("track_off");
			A[1]=0;
		}
		else{
		$("#A2").removeClass("track_off").addClass("track_on");
			A[1]=1;
		}
	});
	document.getElementById('A3').addEventListener('click', function () {
		if(A[2]){   
		$("#A3").removeClass("track_on").addClass("track_off");
			A[2]=0;
		}
		else{
		$("#A3").removeClass("track_off").addClass("track_on");
			A[2]=1;
		}
	});
	document.getElementById('A4').addEventListener('click', function () {
		if(A[3]){   
		$("#A4").removeClass("track_on").addClass("track_off");
			A[3]=0;
		}
		else{
		$("#A4").removeClass("track_off").addClass("track_on");
			A[3]=1;
		}
	});
	document.getElementById('A5').addEventListener('click', function () {
		if(A[4]){   
		$("#A5").removeClass("track_on").addClass("track_off");
			A[4]=0;
		}
		else{
		$("#A5").removeClass("track_off").addClass("track_on");
			A[4]=1;
		}
	});
	document.getElementById('A6').addEventListener('click', function () {
		if(A[5]){   
		$("#A6").removeClass("track_on").addClass("track_off");
			A[5]=0;
		}
		else{
		$("#A6").removeClass("track_off").addClass("track_on");
			A[5]=1;
		}
	});
	document.getElementById('A7').addEventListener('click', function () {
		if(A[6]){   
		$("#A7").removeClass("track_on").addClass("track_off");
			A[6]=0;
		}
		else{
		$("#A7").removeClass("track_off").addClass("track_on");
			A[6]=1;
		}
	});
	document.getElementById('A8').addEventListener('click', function () {
		if(A[7]){   
		$("#A8").removeClass("track_on").addClass("track_off");
			A[7]=0;
		}
		else{
		$("#A8").removeClass("track_off").addClass("track_on");
			A[7]=1;
		}
	});
	document.getElementById('A9').addEventListener('click', function () {
		if(A[8]){   
		$("#A9").removeClass("track_on").addClass("track_off");
			A[8]=0;
		}
		else{
		$("#A9").removeClass("track_off").addClass("track_on");
			A[8]=1;
		}
	});
	document.getElementById('A10').addEventListener('click', function () {
		if(A[9]){   
		$("#A10").removeClass("track_on").addClass("track_off");
			A[9]=0;
		}
		else{
		$("#A10").removeClass("track_off").addClass("track_on");
			A[9]=1;
		}
	});
	document.getElementById('A11').addEventListener('click', function () {
		if(A[10]){   
		$("#A11").removeClass("track_on").addClass("track_off");
			A[10]=0;
		}
		else{
		$("#A11").removeClass("track_off").addClass("track_on");
			A[10]=1;
		}
	});
	document.getElementById('A12').addEventListener('click', function () {
		if(A[11]){   
		$("#A12").removeClass("track_on").addClass("track_off");
			A[11]=0;
		}
		else{
		$("#A12").removeClass("track_off").addClass("track_on");
			A[11]=1;
		}
	});
	document.getElementById('A13').addEventListener('click', function () {
		if(A[12]){   
		$("#A13").removeClass("track_on").addClass("track_off");
			A[12]=0;
		}
		else{
		$("#A13").removeClass("track_off").addClass("track_on");
			A[12]=1;
		}
	});
	document.getElementById('A14').addEventListener('click', function () {
		if(A[13]){   
		$("#A14").removeClass("track_on").addClass("track_off");
			A[13]=0;
		}
		else{
		$("#A14").removeClass("track_off").addClass("track_on");
			A[13]=1;
		}
	});
	document.getElementById('A15').addEventListener('click', function () {
		if(A[14]){   
		$("#A15").removeClass("track_on").addClass("track_off");
			A[14]=0;
		}
		else{
		$("#A15").removeClass("track_off").addClass("track_on");
			A[14]=1;
		}
	});
	document.getElementById('A16').addEventListener('click', function () {
		if(A[15]){   
		$("#A16").removeClass("track_on").addClass("track_off");
			A[15]=0;
		}
		else{
		$("#A16").removeClass("track_off").addClass("track_on");
			A[15]=1;
		}
	});

		/* Layer 2 */
	document.getElementById('B1').addEventListener('click', function () {
		if(B[0]){   
		$("#B1").removeClass("track_on").addClass("track_off");
			B[0]=0;
		}
		else{
		$("#B1").removeClass("track_off").addClass("track_on");
			B[0]=1;
		}
	});
	document.getElementById('B2').addEventListener('click', function () {
		if(B[1]){   
		$("#B2").removeClass("track_on").addClass("track_off");
			B[1]=0;
		}
		else{
		$("#B2").removeClass("track_off").addClass("track_on");
			B[1]=1;
		}
	});
	document.getElementById('B3').addEventListener('click', function () {
		if(B[2]){   
		$("#B3").removeClass("track_on").addClass("track_off");
			B[2]=0;
		}
		else{
		$("#B3").removeClass("track_off").addClass("track_on");
			B[2]=1;
		}
	});
	document.getElementById('B4').addEventListener('click', function () {
		if(B[3]){   
		$("#B4").removeClass("track_on").addClass("track_off");
			B[3]=0;
		}
		else{
		$("#B4").removeClass("track_off").addClass("track_on");
			B[3]=1;
		}
	});
	document.getElementById('B5').addEventListener('click', function () {
		if(B[4]){   
		$("#B5").removeClass("track_on").addClass("track_off");
			B[4]=0;
		}
		else{
		$("#B5").removeClass("track_off").addClass("track_on");
			B[4]=1;
		}
	});
	document.getElementById('B6').addEventListener('click', function () {
		if(B[5]){   
		$("#B6").removeClass("track_on").addClass("track_off");
			B[5]=0;
		}
		else{
		$("#B6").removeClass("track_off").addClass("track_on");
			B[5]=1;
		}
	});
	document.getElementById('B7').addEventListener('click', function () {
		if(B[6]){   
		$("#B7").removeClass("track_on").addClass("track_off");
			B[6]=0;
		}
		else{
		$("#B7").removeClass("track_off").addClass("track_on");
			B[6]=1;
		}
	});
	document.getElementById('B8').addEventListener('click', function () {
		if(B[7]){   
		$("#B8").removeClass("track_on").addClass("track_off");
			B[7]=0;
		}
		else{
		$("#B8").removeClass("track_off").addClass("track_on");
			B[7]=1;
		}
	});
	document.getElementById('B9').addEventListener('click', function () {
		if(B[8]){   
		$("#B9").removeClass("track_on").addClass("track_off");
			B[8]=0;
		}
		else{
		$("#B9").removeClass("track_off").addClass("track_on");
			B[8]=1;
		}
	});
	document.getElementById('B10').addEventListener('click', function () {
		if(B[9]){   
		$("#B10").removeClass("track_on").addClass("track_off");
			B[9]=0;
		}
		else{
		$("#B10").removeClass("track_off").addClass("track_on");
			B[9]=1;
		}
	});
	document.getElementById('B11').addEventListener('click', function () {
		if(B[10]){   
		$("#B11").removeClass("track_on").addClass("track_off");
			B[10]=0;
		}
		else{
		$("#B11").removeClass("track_off").addClass("track_on");
			B[10]=1;
		}
	});
	document.getElementById('B12').addEventListener('click', function () {
		if(B[11]){   
		$("#B12").removeClass("track_on").addClass("track_off");
			B[11]=0;
		}
		else{
		$("#B12").removeClass("track_off").addClass("track_on");
			B[11]=1;
		}
	});
	document.getElementById('B13').addEventListener('click', function () {
		if(B[12]){   
		$("#B13").removeClass("track_on").addClass("track_off");
			B[12]=0;
		}
		else{
		$("#B13").removeClass("track_off").addClass("track_on");
			B[12]=1;
		}
	});
	document.getElementById('B14').addEventListener('click', function () {
		if(B[13]){   
		$("#B14").removeClass("track_on").addClass("track_off");
			B[13]=0;
		}
		else{
		$("#B14").removeClass("track_off").addClass("track_on");
			B[13]=1;
		}
	});
	document.getElementById('B15').addEventListener('click', function () {
		if(B[14]){   
		$("#B15").removeClass("track_on").addClass("track_off");
			B[14]=0;
		}
		else{
		$("#B15").removeClass("track_off").addClass("track_on");
			B[14]=1;
		}
	});
	document.getElementById('B16').addEventListener('click', function () {
		if(B[15]){   
		$("#B16").removeClass("track_on").addClass("track_off");
			B[15]=0;
		}
		else{
		$("#B16").removeClass("track_off").addClass("track_on");
			B[15]=1;
		}
	});

		/* Layer 3 */
	document.getElementById('C1').addEventListener('click', function () {
		if(C[0]){   
		$("#C1").removeClass("track_on").addClass("track_off");
			C[0]=0;
		}
		else{
		$("#C1").removeClass("track_off").addClass("track_on");
			C[0]=1;
		}
	});
	document.getElementById('C2').addEventListener('click', function () {
		if(C[1]){   
		$("#C2").removeClass("track_on").addClass("track_off");
			C[1]=0;
		}
		else{
		$("#C2").removeClass("track_off").addClass("track_on");
			C[1]=1;
		}
	});
	document.getElementById('C3').addEventListener('click', function () {
		if(C[2]){   
		$("#C3").removeClass("track_on").addClass("track_off");
			C[2]=0;
		}
		else{
		$("#C3").removeClass("track_off").addClass("track_on");
			C[2]=1;
		}
	});
	document.getElementById('C4').addEventListener('click', function () {
		if(C[3]){   
		$("#C4").removeClass("track_on").addClass("track_off");
			C[3]=0;
		}
		else{
		$("#C4").removeClass("track_off").addClass("track_on");
			C[3]=1;
		}
	});
	document.getElementById('C5').addEventListener('click', function () {
		if(C[4]){   
		$("#C5").removeClass("track_on").addClass("track_off");
			C[4]=0;
		} 
		else{
		$("#C5").removeClass("track_off").addClass("track_on");
			C[4]=1;
		}
	});
	document.getElementById('C6').addEventListener('click', function () {
		if(C[5]){   
		$("#C6").removeClass("track_on").addClass("track_off");
			C[5]=0;
		}
		else{
		$("#C6").removeClass("track_off").addClass("track_on");
			C[5]=1;
		}
	});
	document.getElementById('C7').addEventListener('click', function () {
		if(C[6]){   
		$("#C7").removeClass("track_on").addClass("track_off");
			C[6]=0;
		}
		else{
		$("#C7").removeClass("track_off").addClass("track_on");
			C[6]=1;
		}
	});
	document.getElementById('C8').addEventListener('click', function () {
		if(C[7]){   
		$("#C8").removeClass("track_on").addClass("track_off");
			C[7]=0;
		}
		else{
		$("#C8").removeClass("track_off").addClass("track_on");
			C[7]=1;
		}
	});
	document.getElementById('C9').addEventListener('click', function () {
		if(C[8]){   
		$("#C9").removeClass("track_on").addClass("track_off");
			C[8]=0;
		}
		else{
		$("#C9").removeClass("track_off").addClass("track_on");
			C[8]=1;
		}
	});
	document.getElementById('C10').addEventListener('click', function () {
		if(C[9]){   
		$("#C10").removeClass("track_on").addClass("track_off");
			C[9]=0;
		}
		else{
		$("#C10").removeClass("track_off").addClass("track_on");
			C[9]=1;
		}
	});
	document.getElementById('C11').addEventListener('click', function () {
		if(C[10]){   
		$("#C11").removeClass("track_on").addClass("track_off");
			C[10]=0;
		}
		else{
		$("#C11").removeClass("track_off").addClass("track_on");
			C[10]=1;
		}
	});
	document.getElementById('C12').addEventListener('click', function () {
		if(C[11]){   
		$("#C12").removeClass("track_on").addClass("track_off");
			C[11]=0;
		}
		else{
		$("#C12").removeClass("track_off").addClass("track_on");
			C[11]=1;
		}
	});
	document.getElementById('C13').addEventListener('click', function () {
		if(C[12]){   
		$("#C13").removeClass("track_on").addClass("track_off");
			C[12]=0;
		}
		else{
		$("#C13").removeClass("track_off").addClass("track_on");
			C[12]=1;
		}
	});
	document.getElementById('C14').addEventListener('click', function () {
		if(C[13]){   
		$("#C14").removeClass("track_on").addClass("track_off");
			C[13]=0;
		}
		else{
		$("#C14").removeClass("track_off").addClass("track_on");
			C[13]=1;
		}
	});
	document.getElementById('C15').addEventListener('click', function () {
		if(C[14]){   
		$("#C15").removeClass("track_on").addClass("track_off");
			C[14]=0;
		}
		else{
		$("#C15").removeClass("track_off").addClass("track_on");
			C[14]=1;
		}
	});
	document.getElementById('C16').addEventListener('click', function () {
		if(C[15]){   
		$("#C16").removeClass("track_on").addClass("track_off");
			C[15]=0;
		}
		else{
		$("#C16").removeClass("track_off").addClass("track_on");
			C[15]=1;
		}
	});
	
		/* Layer 4 */
	document.getElementById('D1').addEventListener('click', function () {
		if(D[0]){   
		$("#D1").removeClass("track_on").addClass("track_off");
			D[0]=0;
		}
		else{
		$("#D1").removeClass("track_off").addClass("track_on");
			D[0]=1;
		}
	});
	document.getElementById('D2').addEventListener('click', function () {
		if(D[1]){   
		$("#D2").removeClass("track_on").addClass("track_off");
			D[1]=0;
		}
		else{
		$("#D2").removeClass("track_off").addClass("track_on");
			D[1]=1;
		}
	});
	document.getElementById('D3').addEventListener('click', function () {
		if(D[2]){   
		$("#D3").removeClass("track_on").addClass("track_off");
			D[2]=0;
		}
		else{
		$("#D3").removeClass("track_off").addClass("track_on");
			D[2]=1;
		}
	});
	document.getElementById('D4').addEventListener('click', function () {
		if(D[3]){   
		$("#D4").removeClass("track_on").addClass("track_off");
			D[3]=0;
		}
		else{
		$("#D4").removeClass("track_off").addClass("track_on");
			D[3]=1;
		}
	});
	document.getElementById('D5').addEventListener('click', function () {
		if(D[4]){   
		$("#D5").removeClass("track_on").addClass("track_off");
			D[4]=0;
		}
		else{
		$("#D5").removeClass("track_off").addClass("track_on");
			D[4]=1;
		}
	});
	document.getElementById('D6').addEventListener('click', function () {
		if(D[5]){   
		$("#D6").removeClass("track_on").addClass("track_off");
			D[5]=0;
		}
		else{
		$("#D6").removeClass("track_off").addClass("track_on");
			D[5]=1;
		}
	});
	document.getElementById('D7').addEventListener('click', function () {
		if(D[6]){   
		$("#D7").removeClass("track_on").addClass("track_off");
			D[6]=0;
		}
		else{
		$("#D7").removeClass("track_off").addClass("track_on");
			D[6]=1;
		}
	});
	document.getElementById('D8').addEventListener('click', function () {
		if(D[7]){   
		$("#D8").removeClass("track_on").addClass("track_off");
			D[7]=0;
		}
		else{
		$("#D8").removeClass("track_off").addClass("track_on");
			D[7]=1;
		}
	});
	document.getElementById('D9').addEventListener('click', function () {
		if(D[8]){   
		$("#D9").removeClass("track_on").addClass("track_off");
			D[8]=0;
		}
		else{
		$("#D9").removeClass("track_off").addClass("track_on");
			D[8]=1;
		}
	});
	document.getElementById('D10').addEventListener('click', function () {
		if(D[9]){   
		$("#D10").removeClass("track_on").addClass("track_off");
			D[9]=0;
		}
		else{
		$("#D10").removeClass("track_off").addClass("track_on");
			D[9]=1;
		}
	});
	document.getElementById('D11').addEventListener('click', function () {
		if(D[10]){   
		$("#D11").removeClass("track_on").addClass("track_off");
			D[10]=0;
		}
		else{
		$("#D11").removeClass("track_off").addClass("track_on");
			D[10]=1;
		}
	});
	document.getElementById('D12').addEventListener('click', function () {
		if(D[11]){   
		$("#D12").removeClass("track_on").addClass("track_off");
			D[11]=0;
		}
		else{
		$("#D12").removeClass("track_off").addClass("track_on");
			D[11]=1;
		}
	});
	document.getElementById('D13').addEventListener('click', function () {
		if(D[12]){   
		$("#D13").removeClass("track_on").addClass("track_off");
			D[12]=0;
		}
		else{
		$("#D13").removeClass("track_off").addClass("track_on");
			D[12]=1;
		}
	});
	document.getElementById('D14').addEventListener('click', function () {
		if(D[13]){   
		$("#D14").removeClass("track_on").addClass("track_off");
			D[13]=0;
		}
		else{
		$("#D14").removeClass("track_off").addClass("track_on");
			D[13]=1;
		}
	});
	document.getElementById('D15').addEventListener('click', function () {
		if(D[14]){   
		$("#D15").removeClass("track_on").addClass("track_off");
			D[14]=0;
		}
		else{
		$("#D15").removeClass("track_off").addClass("track_on");
			D[14]=1;
		}
	});
	document.getElementById('D16').addEventListener('click', function () {
		if(D[15]){   
		$("#D16").removeClass("track_on").addClass("track_off");
			D[15]=0;
		}
		else{
		$("#D16").removeClass("track_off").addClass("track_on");
			D[15]=1;
		}
	});

		/* Layer 5 */
	document.getElementById('E1').addEventListener('click', function () {
		if(E[0]){   
		$("#E1").removeClass("track_on").addClass("track_off");
			E[0]=0;
		}
		else{
		$("#E1").removeClass("track_off").addClass("track_on");
			E[0]=1;
		}
	});
	document.getElementById('E2').addEventListener('click', function () {
		if(E[1]){   
		$("#E2").removeClass("track_on").addClass("track_off");
			E[1]=0;
		}
		else{
		$("#E2").removeClass("track_off").addClass("track_on");
			E[1]=1;
		}
	});
	document.getElementById('E3').addEventListener('click', function () {
		if(E[2]){   
		$("#E3").removeClass("track_on").addClass("track_off");
			E[2]=0;
		}
		else{
		$("#E3").removeClass("track_off").addClass("track_on");
			E[2]=1;
		}
	});
	document.getElementById('E4').addEventListener('click', function () {
		if(E[3]){   
		$("#E4").removeClass("track_on").addClass("track_off");
			E[3]=0;
		}
		else{
		$("#E4").removeClass("track_off").addClass("track_on");
			E[3]=1;
		}
	});
	document.getElementById('E5').addEventListener('click', function () {
		if(E[4]){   
		$("#E5").removeClass("track_on").addClass("track_off");
			E[4]=0;
		}
		else{
		$("#E5").removeClass("track_off").addClass("track_on");
			E[4]=1;
		}
	});
	document.getElementById('E6').addEventListener('click', function () {
		if(E[5]){   
		$("#E6").removeClass("track_on").addClass("track_off");
			E[5]=0;
		}
		else{
		$("#E6").removeClass("track_off").addClass("track_on");
			E[5]=1;
		}
	});
	document.getElementById('E7').addEventListener('click', function () {
		if(E[6]){   
		$("#E7").removeClass("track_on").addClass("track_off");
			E[6]=0;
		}
		else{
		$("#E7").removeClass("track_off").addClass("track_on");
			E[6]=1;
		}
	});
	document.getElementById('E8').addEventListener('click', function () {
		if(E[7]){   
		$("#E8").removeClass("track_on").addClass("track_off");
			E[7]=0;
		}
		else{
		$("#E8").removeClass("track_off").addClass("track_on");
			E[7]=1;
		}
	});
	document.getElementById('E9').addEventListener('click', function () {
		if(E[8]){   
		$("#E9").removeClass("track_on").addClass("track_off");
			E[8]=0;
		}
		else{
		$("#E9").removeClass("track_off").addClass("track_on");
			E[8]=1;
		}
	});
	document.getElementById('E10').addEventListener('click', function () {
		if(E[9]){   
		$("#E10").removeClass("track_on").addClass("track_off");
			E[9]=0;
		}
		else{
		$("#E10").removeClass("track_off").addClass("track_on");
			E[9]=1;
		}
	});
	document.getElementById('E11').addEventListener('click', function () {
		if(E[10]){   
		$("#E11").removeClass("track_on").addClass("track_off");
			E[10]=0;
		}
		else{
		$("#E11").removeClass("track_off").addClass("track_on");
			E[10]=1;
		}
	});
	document.getElementById('E12').addEventListener('click', function () {
		if(E[11]){   
		$("#E12").removeClass("track_on").addClass("track_off");
			E[11]=0;
		}
		else{
		$("#E12").removeClass("track_off").addClass("track_on");
			E[11]=1;
		}
	});
	document.getElementById('E13').addEventListener('click', function () {
		if(E[12]){   
		$("#E13").removeClass("track_on").addClass("track_off");
			E[12]=0;
		}
		else{
		$("#E13").removeClass("track_off").addClass("track_on");
			E[12]=1;
		}
	});
	document.getElementById('E14').addEventListener('click', function () {
		if(E[13]){   
		$("#E14").removeClass("track_on").addClass("track_off");
			E[13]=0;
		}
		else{
		$("#E14").removeClass("track_off").addClass("track_on");
			E[13]=1;
		}
	});
	document.getElementById('E15').addEventListener('click', function () {
		if(E[14]){   
		$("#E15").removeClass("track_on").addClass("track_off");
			E[14]=0;
		}
		else{
		$("#E15").removeClass("track_off").addClass("track_on");
			E[14]=1;
		}
	});
	document.getElementById('E16').addEventListener('click', function () {
		if(E[15]){   
		$("#E16").removeClass("track_on").addClass("track_off");
			E[15]=0;
		}
		else{
		$("#E16").removeClass("track_off").addClass("track_on");
			E[15]=1;
		}
	});
	$("#Clear").click(function(){
		$(".track_on").removeClass("track_on").addClass("track_off");
		var i;
		for(i=0;i<16;i++){
			A[i]=0;
			B[i]=0;
			C[i]=0;
			D[i]=0;
			E[i]=0;
			
		}
		
	});
		  
	  });
});

}).load();