<!DOCTYPE html>
<html lang="en">
<style>
.mid0 {
position:absolute;
left:50px;
background-color:white;
height:40%;
width:50%;
top:2050px;
border:0px solid black;

}

.text input{
	<!--position:absolute;
	left:100px;
	top:200px;-->
	width:10%;
	border:0px;
	font-size:25px;
	color:white;
	background-color:orange;
	font-family: calibri, helvetica, arial;
	border-radius:30px;
	opacity:0.8;
	padding-left:15px;
	
	
}

.write {
	position:absolute;
	width:85%;
	height:70%;
	border:0px;
	padding:10px 10px 10px 10px;
	font-family: calibri, helvetica, arial;
	font-size:20px;
	border:0px;
	background-color:black;
	color:white;
	opacity:0.8;
}
</style>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>| Season-Developer |</title>

    <link href="developer/css/bootstrap.css" rel="stylesheet">
    <link href="developer/css/custom-animations.css" rel="stylesheet">
    <link href="developer/css/style.css" rel="stylesheet">

  </head>

  <body>
<?php
$text=$file="";?>
<div class="mid0">
<form  class="text"  action="content.php" method="post">
<textarea class="write" name="text"></textarea><br><br><br><br><br><br><br><br><br><br><br>
<input type="submit" value="  share">
</form>
</div>

	<div id="h">
		<div class="container">
			<div class="row">
			    <li><a href="index.html"><button class="btn btn-lg btn-info btn-register">Home</button></a></li>
			</div>
		</div>
	</div>
	
	<div id="w">
		<div class="row nopadding">
			<div class="col-md-5 col-md-offset-1 mt">
			    <p><h4>"When <a>love</a> and <a>skill</a> wok together,<br>expect a masterpiece"<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a>- John Ruskin</a></h4></p>
				<br><br><br><br>
				<h4>Hi!</h4>
				<p>I am Nilay Jayswal .</p>
				<p>Here what I present you is Seasons . A Dream, a Thought and an Innovation.</p>
				<p>I am neither a Web Developer nor a Programmer but I am simply a guy who loves to build sites and doing the wrong things in the right way.</p>
				
			</div>
			
			<div class="col-md-6 pull-right">
				<img src="developer/img/shot01.jpg" class="img-responsive alignright" alt="" data-effect="slide-right">
			</div>
		</div>
	</div>
	
	<div id="picton">
		<div class="row nopadding">
			<div class="col-md-6 pull-left">
			<br><br><br>
				<img src="developer/img/shot02.jpg" class="img-responsive alignleft" alt="" data-effect="slide-left">
			</div>
			<div class="col-md-4 mt">
				<h3>Updates</h3>
				<p>Checkout the upcoming updates of Seasons below :</p>
				<p><h4><ul>
				<li> Customize Seasons</li><br>
				<li> Have your own Blogs by Seasons</li><br>
				<li> Ebooks and Presentations - Direct Download</li><br>
				<li> Student's Corner</li>
				</ul></h4>
				</p>
			</div>
	
		</div>
	</div>
	
	
	<div id="curious">
		<div class="row nopadding">
			<div class="col-md-5 col-md-offset-1 mt">
				<h4>Send me your Queries :</h4>
			</div>
			<div class="col-md-6 pull-right">
				<img src="developer/img/shot03.jpg" class="img-responsive alignright" alt="" data-effect="slide-right">
			</div>
		</div>
	</div>

    <script src="developer/js/jquery.min.js"></script>
    <script src="developer/js/bootstrap.min.js"></script>
    <script src="developer/js/retina-1.1.0.js"></script>
    <script src="developer/js/jquery.unveilEffects.js"></script>
  </body>
</html>
