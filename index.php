<?php
function acilma_suresi (){
$time = explode( " ", microtime());
$usec = (double)$time[0];
$sec = (double)$time[1];
return $sec + $usec;
}
$saymaya_basla = acilma_suresi();
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<?php

include('config.php');
include ('includes/security/security.php');
require_once ('includes/guvenlik/antiflood.php');
define  ('GUVENLIK',true);

?>

<head>
<meta name="description" content="Enjoy FREE to play Online MMORPG, Knight Online World. Experience the greatest PVP War in a fantasy setting medieval continents. Join for free now!" />
<meta name="keywords" content="Knight Online World = Free to Play MMORPG, Join the epic PVP WAR Knight world, KnightOnline world, kol, usko, Ko, Kol, Knight, Kinayt, Knight oyun, mmo knight, mmorpg knight, knight online, knightonline, pvp, pvp mmo, pvp mmorpg, pk mmo, pk mmorpg" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="copyright" content="http://knight.cakirhost.com" />
<title>Knight Online World = Free to Play MMORPG, Join the epic PVP WAR Knight world, KnightOnline world, kol, usko, Ko, Kol, Knight, Kinayt, Knight oyun, mmo knight, mmorpg knight, knight online, knightonline, pvp, pvp mmo, pvp mmorpg, pk mmo, pk mmorpg</title>
<script type="text/javascript" src="common_js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="common_js/common.js"></script>
<script type="text/javascript" src="common_js/common_func.js"></script>
<!-- BEGIN google Analytics-->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-38026103-4', 'knight.cakirhost.com');  ga('send', 'pageview');
</script>
<!-- END google Analytics-->
<!-- BEGIN Tynt Script -->
<script type="text/javascript">
if(document.location.protocol=='http:'){
 var Tynt=Tynt||[];Tynt.push('axuAdAUemr4OSMacwqm_6l');
 (function(){var s=document.createElement('script');s.async="async";s.type="text/javascript";s.src='http://tcr.tynt.com/ti.js';var h=document.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})();
}
</script>
<!-- END Tynt Script --><link href="css/main_new.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="common_js/main.js"></script>
<script type="text/javascript" src="common_js/jquery.sliderkit.1.9.2.pack.js"></script>
<script type="text/javascript" src="common_gamejs/knight_notice.js"></script>
<script type="text/javascript" src="common_gamejs/knight_screenshot.js"></script>
<script type="text/javascript" src="common_js/scriptLogger.js"></script>
<script type="text/javascript">
<!--
	$(window).load(function(){

	});
//-->
</script>

<script type="text/javascript">
//<![CDATA[

window.onload	=	function() {
	WriteAll("knight_notice.php");
}
window.onresize = function(){
//	mgameLayerPosition(800, 600);
}

//]]>

</script>
</head>
<body>
<div id="mwrap">
<script type="text/javascript" src="/common_js/gnb.js"></script>
<script type="text/javascript">
	$(function () {
		$('#gnb').gnbBuilder(site_map);
		globalGnbDropDown();
	});
</script>
	<div id="header">
		<div id="gnb">
			<h1><a href="http://www.knightonlineworld.com">KNIGHT ONLINE</a></h1>
			<p class="account"><a href="/account/">ACCOUNT</a></p>
		</div>
		<div id="gnb_TrustGuard">
			<a name="trustlink" href="http://secure.trust-guard.com/certificates/7911" target="_blank" onclick="var nonwin=navigator.appName!='Microsoft Internet Explorer'?'yes':'no'; window.open(this.href.replace('http', 'https'),'welcome','location='+nonwin+',scrollbars=yes,width=517,height='+screen.availHeight+',menubar=no,toolbar=no'); return false;" oncontextmenu="var d = new Date(); alert('Copying Prohibited by Law - This image and all included logos are copyrighted by trust-guard \251 '+d.getFullYear()+'.'); return false;"><img name="trustseal" alt="Security Verified" style="border: 0;" src="https://c674753.ssl.cf2.rackcdn.com/security-7911-header.gif" /></a> 
		</div>
	</div>
	<div id="mcontainer">
		<div id="msnb">
			<iframe scrolling="no" name="ilogin" id="ilogin" width="238" height="100%" src="/account/login.gcs" marginheight="0" marginwidth="0" frameborder="0" align="center" allowTransparency="true" onload="iframeResize(this)"></iframe>		<p style="padding:9px 0 10px 0;"><a href="/webmall/" title="WebShop"><img src="http://download.nttgame.com/knight/images/usko/common/btn_webshop_121011.jpg" alt="WebMall" /></a></p>
<p style="padding-bottom:10px;"><a href="/download/" title="Game download"><img src="http://download.nttgame.com/knight/images/usko/common/btn_download_121011.jpg" alt="Game Download" /></a></p>
<p><a href="/guide/install.gcs" title="Beginner Guide"><img src="http://download.nttgame.com/knight/images/usko/common/btn_guide_121011.jpg" alt="Beginner Guide" /></a></p>

		</div>
		<!-- snb E -->
		<!-- content S -->
		<div id="mcontent">
		<!-- update 121011 S -->
			<div class="banner_top"></div>
			<div class="banner">
				<div class="sliderkit photoslider-bullets">
			<script type="text/javascript" src="/common_js/main_visual_banner.js"></script>
<script type="text/javascript">
<!--
	$(window).load(function(){
			var mainBanner = {
				__vNation : ""
				, __imgUrl : "http://download.nttgame.com/knight/images/banner/image/"
				, __is_navation : true
				, __jsonData : null
				, __jsonDataCount : 0
				, __v_Data : null
				, __v_DataNv : 0
				, _init: function(nation, datas){
					try{
						if(nation == "") nation = "US";
						this.__vNation = nation;
						this.__jsonData = datas;
						this.__jsonDataCount = datas.length;
						
						this._createBanner();
					}catch(e) {alert("Banner Data File Loading Faile\nPlease reload this page.");}
				}
				, _createBanner : function(){
					var rtData = Array();
					var rtDataNumber = Array();
					var z=0;
					for(i=0; i < this.__jsonDataCount; i++){
						if(this.__vNation == this.__jsonData[i]["na"]  || this.__jsonData[i]["na"] == "OT"){
							rtData[z] = "<div class='sliderkit-panel'>";
							rtDataNumber[z] = "<li><a href='#' title='"+this.__jsonData[i]["title"]+"'></a></li>";
							rtData[z] += "<a href='"+this.__jsonData[i]["link"]+"' title='"+this.__jsonData[i]["title"]+"' target='"+this.__jsonData[i]["target"]+"'>"
							rtData[z] += "<img src='"+ this.__imgUrl + this.__jsonData[i]["imagefile"]+"' alt='"+this.__jsonData[i]["title"]+"' />"
							rtData[z] += "</a></div>";
							z++;
						}
					}
					this.__v_Data = rtData;
					this.__v_DataNv = rtDataNumber;
				}
				, _view : function(obj_list, obj_number){
					var tmp1="", tmp2="";
					for(i=0; i < this.__v_Data.length; i++){
						tmp1 = $("."+obj_list).html();
						$("."+obj_list).html(tmp1 + this.__v_Data[i]);
						if(this.__is_navation){
							tmp2 = $("."+obj_number).html();
							$("."+obj_number).html(tmp2 + this.__v_DataNv[i]);
						}
					}
				}
				, _slider : function(){
					$(".photoslider-bullets").sliderkit({
						auto:true,
						circular:true,
						shownavitems:10,
						panelfx:"sliding",
						panelfxfirst:"fading",
						panelfxspeed:1000
					});
				}
			}
			mainBanner.__is_navation = true;
			mainBanner._init("TR", bannerlist);
			mainBanner._view("sliderkit-panels", "sliderkit-nav-clip ul");
			mainBanner._slider();
			
	});
//-->
</script>
<div class="sliderkit-panels">
</div>
<div class="sliderkit-nav">
	<div class="sliderkit-nav-clip">
		<ul>
		</ul>
	</div>
</div>				</div>
			</div>
		<!-- Update 121011 E -->
			<!-- main_news  -->
						<div id="newsGroup" class="news">
				<h2  style="margin:0 1px 0 18px;"><a href="#noticeList1" class="tab" onmouseover="WriteAll('knight_notice')"><img src="http://download.nttgame.com/knight/images/usko/main/tab_news01_121011.gif" title="ALL" /></a></h2>
					<ul id="noticeList1"></ul>
				<h2><a href="#noticeList2" class="tab" onmouseover="WriteAll('knight_recent_notice')"><img src="http://download.nttgame.com/knight/images/usko/main/tab_news02_121011.gif" alt="Announcement" /></a></h2>
					<ul id="noticeList2"></ul>
				<h2><a href="#noticeList3" class="tab" onmouseover="WriteAll('knight_recent_update')"><img src="http://download.nttgame.com/knight/images/usko/main/tab_news03_121011.gif" alt="Update" /></a></h2>
					<ul id="noticeList3"></ul>
				<h2><a href="#noticeList4" class="tab" onmouseover="WriteAll('knight_recent_event')"><img src="http://download.nttgame.com/knight/images/usko/main/tab_news04_121011.gif" alt="Event" /></a></h2>
					<ul id="noticeList4"></ul>
			</div>
			<script type="text/javascript">initTabMenu("newsGroup");</script>
			<div class="rankset">
				<iframe src="/main/main_rank.gcs" id="rank" scrolling="no" frameborder="0" style="margin:0 18px;border:none;width:468px;height:270px;" allowTransparency="true" align="center"></iframe>
			</div>
<!--
			<div class="screen">
				<h2><img src="http://download.nttgame.com/knight/images/usko/main/h_screen.gif" alt="Screen Shots" /></h2>
				<ul>
					<script type="text/javascript">WriteTotalScreenShot()</script>
				</ul>
				<p class="more"><a href="/community/?rtype=2"><img src="http://download.nttgame.com/knight/images/usko/main/btn_more.gif" alt="MORE" /></a></p>
			</div>
-->
			<div class="aside">
	<div><a href="/community/?rtype=1"><img src="http://download.nttgame.com/knight/images/usko/main/btn_forum_030613_b.jpg" alt="Forum" /></a></div>
	<div><a href="/guide/character.gcs"><img src="http://download.nttgame.com/knight/images/usko/main/btn_character_030613_b.jpg" alt="Character" /></a></div>
	<div><a href="/reseller/"><img src="http://download.nttgame.com/knight/images/usko/main/btn_resellers_030613_b.jpg" alt="Official ESN Resellers" /></a></div>
	<div><img src="http://download.nttgame.com/knight/images/usko/main/support_030613.jpg" alt="Support" usemap="#SupportMap"/></div>
	<div style="width:100%; text-align:left; font-weight:bold; margin:0 0 3px 10px;"><a href="http://www.youtube.com/user/OfficialNTTGame" style="color:#de852f;" target="_blank">Find Us here!</a></div>
	<div><img src="http://download.nttgame.com/knight/images/usko/main/social_030613.jpg" alt="SOCIAL" usemap="#SocialMap" /></div>
	<map name="SupportMap" id="SupportMap">
	  <area shape="rect" coords="69,108,215,155" href="/support/?rtype=1" target="_top" />
	  <area shape="rect" coords="69,164,213,205" href="/support/?rtype=2" target="_top" />
	</map>
	<map name="SocialMap" id="SocialMap">
	  <area shape="rect" coords="21,3,76,55" href="http://www.facebook.com/pages/Knight-Online-World/362397760484902" target="_blank" />
	  <area shape="rect" coords="92,6,145,57" href="https://twitter.com/KnightOnline" target="_blank" />
	  <area shape="rect" coords="158,7,213,60" href="http://www.youtube.com/user/OfficialNTTGame" target="_blank" />
	</map>
</div>		</div>
		<!-- content E -->
		<!-- side banner S --> 
<!--
			<div id="sidebanner"><a href="http://www.soulsaveronline.com/?Game=soulsaver&Issue=80lv&AD_media=knightonline&Material=banner&Slot=soul&Date=120813-120831" target="_blank"><img src="http://download.nttgame.com/knight/images/usko/main/20120809_gsp_nns.jpg"" alt="Soulsaver" /></a></div>
-->
		<!-- side banner E -->
	</div>
	<div id="mcontainer_bottom">
	</div>
	<!-- footer S -->
	<div id="footer">
	<table class="tableFt" align="center">
		<tbody>
		<tr>
			<td rowspan="2"><a href="http://www.knightonlineworld.com"><img src="http://download.nttgame.com/knight/images/usko/main/bg_ntt_logo.gif" /></a></td>
			<td rowspan="2"><img src="http://download.nttgame.com/knight/images/usko/main/logo_line.gif" /></td>
			<td>
				<li><a href="javascript:parent.mgameIframeLayer('/include/popup.gcs?url=/include/user_agreement.gcs', 1005, 544, 1);">User Agreement</a></li>
				<li><a href="javascript:parent.mgameIframeLayer('/include/popup.gcs?url=/include/policy.gcs', 1005, 544,1);">Privacy Policy</a></li>
				<li><a href="javascript:parent.mgameIframeLayer('/include/popup.gcs?url=/include/rules_of_conduct.gcs', 1005, 544,1);">Rules of Conduct</a></li>
			</td>
		</tr>
		<tr>
			<td><address>Copyright &copy; 2005-2013. Mgame Corp. &amp; Noahsystem Co.,Ltd. All Rights Reserved And &copy; 2013 Licensed and published by Game Caf&#233; Services, Inc <br />
				Registered in California, United States No C3258553. <br />
			</address></td>	
		</tr>
		</tbody>
	</table>
</div>

<!-- Google Code for Yeniden pazarlama etiketi -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 983271003;
var google_conversion_label = "dr6cCLWU0QUQ24zu1AM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/983271003/?value=0&amp;label=dr6cCLWU0QUQ24zu1AM&amp;guid=ON&amp;script=0"/></div></noscript>	<!-- footer E -->
</div>
</body>
</html>
