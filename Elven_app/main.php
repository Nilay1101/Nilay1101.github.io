<?php
session_start();
?>
<html>
<script src="jquery-1.11.2.js"></script>
<script> 
$(document).ready(function(){
    $("div").hover(function(){
        $(".cl2").animate({
			top:'150px',
            left: '400px',
            opacity: '0.9',
            height: '12%',
            width: '35%',
			
        });
    });
});
</script>
<style>
.sfm input {background-color:smokewhite; 
		font-size: 14px; 
		text-transform:uppercase; 
		margin-top: 10px; 
		color:black;
        border:0px;		
		letter-spacing: 1px; 
		padding: 10px 30px;
		font-family: calibri, helvetica, arial;
		width:40%;} 

.mid0 {
position:absolute;
left:230px;
background-color:whitee;
height:60%;
width:75%;
top:230px;
padding-top:100px;
padding-left:20px;
border:0px solid black;

}

.c1 {
background:seagreen;
opacity:0.8;
position:absolute;
left:980px;
width:23%;
letter spacing:1px;
font-size:20px;
font-family: calibri, helvetica, arial;
color:white;
padding-left:50px;
padding-top:15px;
border-radius:15px;
top:15px;
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

.text0 input{
	position:absolute;
	left:1030px;
	top:170px;
	width:20%;
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
	height:45%;
	border:0px;
	padding:40px 40px 40px 40px;
	font-family: calibri, helvetica, arial;
	font-size:20px;
	border:0px;
	background-color:black;
	color:white;
	opacity:0.8;
}

.cl2 {
opacity:0;
filter:alpha(opacity=0);
background:#635F78;
height:50px;
width:50px;
padding-left:60px;
padding-top:20px;
position:absolute;
top:0px;
border:0px solid black;}
</style>
<body>
<?php require 'back.php';
$text=$file="";?>
<form  class="text0"  action="content.php" method="post">
<input type="submit" value="Recent Shares">
</form>
<div class="c1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Welcome</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $_POST["name"];?><br>&nbsp;&nbsp;&nbsp;
<?php echo $_POST["email"];?></div>
<div  class="cl2">
<form method="get" action="http://www.google.com/search" class="sfm"> 
		<input type="text" />
		<input type="submit" value="Google Search" /></form>
</div>
<div class="mid0">
<form  class="text"  action="content.php" method="post">
<br><br><br><textarea class="write" name="text">My email address:                                                                                             
                            Write here...</textarea><br><br><br><br><br><br><br><br><br><br><br><br><br>
<input type="submit" value="Share">
</form>
</div>
</body>
<?phpsession_destroy(); 
?>
</html>
