<!DOCTYPE html>
<html>
<body>
<?php echo "<h1> Thank you, " . $_REQUEST['firstname'] . "!</h1>"; ?>
<p> Your form has been submitted.</h1>
<br>


<h2>SERVER</h2>
 <?php
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
?>
<br>
<h2>REQUEST</h2>
<?php
echo "First Name:<br>";
echo $_REQUEST['firstname'];
echo "<br>";
echo "Last Name:<br>";
echo "<br>";
echo $_REQUEST['lastname'];
?>
<br>
<h2>POST</h2>
<br>
<h2>GET</h2>
<br>

</body>
</html>

