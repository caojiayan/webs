<?php 
   if($_POST){
       $data=$_POST;
       file_put_contents("./wxid.js", $data['wxid']);
   }
   $wxinfo=file_get_contents("./wxid.js");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
     <form action="" method="post">
      <div style="text-align:center;margin-top:20px;">
     	<textarea name="wxid" id="wxid" cols="60" rows="20">
     		<?php  echo $wxinfo ;?>
     	</textarea>
     <br>
     		<input type="submit"  value="提交">
     	</div>
     	
     </form>
	  
</body>
</html>