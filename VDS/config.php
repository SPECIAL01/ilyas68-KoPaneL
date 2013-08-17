<?php


include ('includes/security/antisql.php');

$dbname = "kn_online";
$dbuser = "ko";
$dbpass = "ko";

$conn = odbc_connect('Driver={SQL Server};Server=.;Database=kn_online','$dbuser','$dbpass');



/* KOPanel Genel Ayarlari */

$sitename 	= "site adý"; /* örnek :  knight.cakirhost.com  þeklinde */
$title		= "KnightOnline | Resmi Web Sitesi";
$slogan		= "KnightOnline";
$slogan1	= "";

$lunarwar	= "Belirlenmedi";
$deloswar	= "Belirlenmedi";



/* Tarih Ayarlarý (Düzenlemeyiniz!!!) */

date_default_timezone_set('Europe/Istanbul');
$todayh = getdate();
$d = $todayh[mday];
$m = $todayh[mon];
$y = $todayh[year];	
$date = $d."/".$m."/".$y;




?>