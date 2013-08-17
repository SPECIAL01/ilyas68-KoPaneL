<?php

if (!function_exists('sql_inject_chec')) {
function sql_inject_chec(){
$badwords = array("--","'","DROP", "SELECT", "UPDATE", "DELETE", "drop", "select", "update", "delete", "WHERE", "where","exec","EXEC","procedure","PROCEDURE"); 
foreach($_REQUEST as $value)  {
foreach($badwords as $word) 
if(substr_count($value, $word) > 0) {die("<b>UYARI:</b> SQL Injection denemesi yaptýnýz...");}
} } }
sql_inject_chec();

?>