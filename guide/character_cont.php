
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="description" content="Enjoy FREE to play Online MMORPG, Knight Online World. Experience the greatest PVP War in a fantasy setting medieval continents. Join for free now!" />
<meta name="keywords" content="Knight Online World = Free to Play MMORPG, Join the epic PVP WAR Knight world, KnightOnline world, kol, usko, Ko, Kol, Knight, Kinayt, Knight oyun, mmo knight, mmorpg knight, knight online, knightonline, pvp, pvp mmo, pvp mmorpg, pk mmo, pk mmorpg" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="copyright" content="http://www.knightonlineworld.com" />
<title>Knight Online World = Free to Play MMORPG, Join the epic PVP WAR Knight world, KnightOnline world, kol, usko, Ko, Kol, Knight, Kinayt, Knight oyun, mmo knight, mmorpg knight, knight online, knightonline, pvp, pvp mmo, pvp mmorpg, pk mmo, pk mmorpg</title>
<script type="text/javascript" src="/common_js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="/common_js/common.js"></script>
<script type="text/javascript" src="/common_js2/common_func.js"></script>
<!-- BEGIN google Analytics-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-38026103-4', 'knightonlineworld.com');  ga('send', 'pageview');
</script>
<!-- END google Analytics-->
<!-- BEGIN Tynt Script -->
<script type="text/javascript">
if(document.location.protocol=='http:'){
 var Tynt=Tynt||[];Tynt.push('axuAdAUemr4OSMacwqm_6l');
 (function(){var s=document.createElement('script');s.async="async";s.type="text/javascript";s.src='http://tcr.tynt.com/ti.js';var h=document.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})();
}
</script>
<!-- END Tynt Script --><link href="/css/sub.css" type="text/css" rel="stylesheet" />
</head>
<body>
<div class="section guide">
<?php

//bir önceki sayfadan bilgi alıyoruz

$m = addslashes(strip_tags($_GET['m']));

//ilk önce temizleme işlemi

$m = preg_replace('/\W/si', '', $m);

//sonra include etme işlemi

@include('./'.$m.'.php');
?>


</body>
</html>

