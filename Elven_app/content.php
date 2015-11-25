
<?php
session_start();
?>
<html>
<style>
.recent{
	position:absolute;
	left:1050px;
	padding-top:5px;
	top:20px;
	width:250px;
	height:150px;
	border:0px solid black;
	background-color:aquamarine;
	opacity:0.5;
	font-family: calibri, helvetica, arial;
	font-size:30px;
	text-align:center;
	color:black;
	border-radius:125px;
	padding-top:100px;
}

.share{
	position:absolute;
	<!--left:290px;-->
	<!--top:250px;-->
	border:0px solid black;
	width:100%;
	height:40%;
	background-color:slateblue;
	border-radius:40px;
	opacity:0.8;
	padding:20px 20px 20px 20px;
	font-family: calibri, helvetica, arial;
	font-size:20px;
	color:white;
}

.inner{
	border:0px solid black;
	width:100%;
	height:100%;
	padding:10px 10px 10px 10px;
	font-family: calibri, helvetica, arial;
	font-size:15px;
	color:white;
}

.menu {
    position:absolute;
    top:1100px;
    color:black;
    border:0px solid black;
    width:100%;
}

.text input{
	position:absolute;
	left:935px;
	top:80px;
	width:9%;
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
	left:300px;
	top:1000px;
	width:30%;
	border:0px;
	font-size:25px;
	color:white;
	background-color:red;
	font-family: calibri, helvetica, arial;
	border-radius:30px;
	opacity:0.8;
	padding-left:15px;
}

.text1 input{
	position:absolute;
	left:300px;
	top:540px;
	width:30%;
	border:0px;
	font-size:25px;
	color:white;
	background-color:seagreen;
	font-family: calibri, helvetica, arial;
	border-radius:30px;
	opacity:0.8;
	padding-left:15px;
}
	
</style>
<body>
<form  class="text"  action="index.html" method="post">
<input type="submit" value="LogOut">
</form>

<?php require 'back.php';
$space="                                                                                                                                                    
                                                                                                                                                              
																																							      
 ";
if (empty($_POST["text"])) {
    $_POST["text"]="William Butler Yeats is widely considered to be one of the greatest poets of the twentieth century.
	He belonged to the Protestant, Anglo-Irish minority that had controlled the 
	economic, political, social, and cultural life of Ireland since at least the end of the seventeenth century.
	Most members of this minority considered themselves English people who merely happened to have been born in Ireland,
	but Yeats was staunch in affirming his Irish nationality. Although he lived in London for fourteen years of his childhood
	(and kept a permanent home there during the first half of his adult life), Yeats maintained his cultural roots,
	featuring Irish legends and heroes in many of his poems and plays. ";
  }
  ?>
<div class="recent">Recent Shares...
</div>


<div class="share" style="top:700px; left:300px;">
Previous share
<div class="inner">
<?php
$myfile = fopen("share.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("share.txt"));
fclose($myfile);
?>
</div>
</div>
<form  class="text0"  action="mailto:" method="post">
<input type="submit" value="email your comments/answers ">
</form>
<div class="menu" style="left:300px;">
<div id="disqus_thread"></div>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'elven';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript></div><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<div class="share" style="top:240px; left:300px;">
Today's share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<?php
echo date("y.m.d l");
?>
<div class="inner">
<?php
$myfile = fopen("share.txt", "w") or die("Unable to open file!");
$file=$_POST["text"].$space;
fwrite($myfile, $file);
fclose($myfile);?>
<?php
$myfile = fopen("share.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("share.txt"));
fclose($myfile);?>
</div>
</div>
<form  class="text1"  action="mailto: " method="post">
<input type="submit" value="email your comments/answers ">
</form>
<?php
session_destroy(); 
?>
</html>