<!DOCTYPE html>
<html>
<body>
<h1>Form submitted!</h1>
<br>
<?php
//$myfile = fopen("testfile.txt", "w");
//$txt = "Lets sleep soon.";
//fwrite($myfile, $txt);

//fclose($amyfile);
echo "<h3>" . $_POST['firstname'] . "</h3>";
echo "<h3>" . $_POST['lastname'] . "</h3>";
echo "<h3>" . $_POST['email'] . "</h3>";



$file = fopen("fuckoffchina.txt", "r") or die("Unable to open file!");
echo fread($file, filesize("fuckoffchina.txt"));
fclose($file);

$file = fopen("files/china_sucks_American_penis.txt", "w") or die("Unable to open file for write.");
$txt = $_POST['firstname'] . "\n";
$txt = $_POST['lastname'] . "\n";
$txt = $_POST['email'] . "\n";
fwrite($file, $_POST['firstname']);
fclose($file);

$incoming_request = fopen("files/incoming_request.json", "w") or die("Unable to open requestfile for write.");
fwrite($incoming_request, "\n");
$data = file_get_contents('php://input');
fwrite($incoming_request, $data);
fwrite($incoming_request, "\n");
//fwrite($incoming_request, json_decode($data));




//$data = json_decode(file_get_contents('php://input'), true);
//echo $data;
echo "<br><br>";
echo file_get_contents('php://input');

fclose($incoming_request);
?>


</body>
</html>
