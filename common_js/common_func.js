function changeDomain()
{
	strhostname = location.host;

	currentDomain = strhostname.substring(strhostname.indexOf(".")+1);
	document.domain = currentDomain;

	return;
}


document.domain		=	location.host.substr(location.host.indexOf(".")+1);

var mgamePopupObject;
var thisUri			=	location.href.replace("http://"+ location.host,"").split("/");
var thisHost			=	location.host.split(".");
var thisDomain			=	thisHost[1];

function mgameLoginCheck(f,dest) {
	var returnUrl		=	encodeBase64(dest ? dest : top.location.href);
	var idReplace		=	f.userid.value.replace(/[^a-zA-Z0-9_\-]/gi,"");
	var idLength		=	f.userid.value.trim().length;
	var pwReplace		=	f.pw.value.replace(/[^a-zA-Z0-9]/gi,"");
	var pwLength		=	f.pw.value.length;


	if(!f.userid.value.trim()) {
		alert("Please enter your ID.");
		f.userid.focus();
		return false;
	}

	if(idLength < 4 || idLength > 12) {
		alert("ID should be between 4-12 characters");
		f.userid.focus();
		return false;
	}
	if(!f.pw.value.trim()) {
		alert("Please enter your password.");
		f.pw.focus();
		return false;
	}

	f.action		=	"/account/login_proc.gcs";
	f.dest.value = returnUrl;

	/* When a page does not completely open in IE, IOVATION cannot detect DEVICEID */
	if(isIE()){
		if(document.readyState == 'complete'){
			return true;
		}else{
			return true;
		}
	}
	return true;
}


/*
 * IOVATION FORM COPY 2009/12/02 ADDED
 */
function copyBlackBox(submit_form,pass)
{
	var bb = document.getElementById( 'ioBlackBox' );

	if ( typeof( bb ) == 'undefined' )   
		return true;

	if ( bb.value == '' && pass < 6)
	{
		setTimeout( "copyBlackBox( null," + (pass + 1) + ");", 500 );
		return false;
	} else {
		if ( bb.value != '' ) {
			submit_form.ioBlackBox.value = bb.value;
		}
	}
	return true;
}


function mgameUserCheck(opt) {
	/*
	if(!getCookie("MGAME")) {
		alert("login first");
		return false;
	}
	*/

	return true;
}

function mgameLogout(dest) {
	var dest_str = dest ? dest : thisGame();
	top.location.href	=	"/account/logout.gcs?dest/"+ encodeBase64(dest_str);
}

function mgameIlligalWordsCheck(str, type) {
	var strReplace;
	if(type == 'nickname'){
		strReplace		=	new RegExp(mgameNickIlligalWords.replace(/[^a-z0-9\\\|]/gi,''),'gim');
	} else {
		strReplace		=	new RegExp(mgameIlligalWords.replace(/[^a-z0-9\\\|]/gi,''),'gim');
	}
	var strNew			=	str.replace(strReplace,function($0) { return $0.replace(/[a-z0-9]/gi,'*'); });

	if(str != strNew) alert('We have detected inappropriate word.');

	return strNew;
}


function mgameImageView(obj) {//hide image url, when someone click image, self close.
	//mgamePopup("/common_lib/popup_image.php?imgUrl="+ obj);
}

function mgamePopup(param,w,h, scrollbars, location) {
	var popupWidth	=	w ? w : 50;
	var popupHeight	=	h ? h : 50;

	var popupScrollbars = scrollbars ? scrollbars : 'no';
	var popupLocation = location ? location : 'no';

	mgamePopupObject	=	window.open(param,"mgamePopup","width="+ popupWidth +",height="+ popupHeight +",top=0,left=0,scrollbars="+popupScrollbars+",location="+popupLocation);
}

function mgameRollOver() {
	if (!document.getElementById) return

	var aPreLoad = new Array();
	var sTempSrc;
	var aImages = document.getElementsByTagName('img');

	for (var i = 0; i < aImages.length; i++) {
		if (aImages[i].className == 'imgover') {
			var src = aImages[i].getAttribute('src');
			var ftype = src.substring(src.lastIndexOf('.'), src.length);
			var hsrc = src.replace(ftype, '_on'+ftype);

			aImages[i].setAttribute('hsrc', hsrc);

			aPreLoad[i] = new Image();
			aPreLoad[i].src = hsrc;
			
			aImages[i].onmouseover = function() {
				sTempSrc = this.getAttribute('src');
				this.setAttribute('src', this.getAttribute('hsrc'));
			}

			aImages[i].onmouseout = function() {
				if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
				this.setAttribute('src', sTempSrc);
			}
		}
	}
}

function mgameFlash(flashUrl,flashWidth,flashHeight,flashDiv) {
	var flashPath,flashVars;
	var classId			=	"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
	var codeBase		=	"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0";
	var pluginsPage		=	"application/x-shockwave-flash";
	var embedType		=	"application/x-shockwave-flash";
	var pluginsPage		=	"http://www.macromedia.com/go/getflashplayer";

	var flashHtml		=	"";

	flashHtml			+=	'<object id="mgameFlashObj" classid="'+ classId +'" codebase="'+ codeBase +'" width="'+ flashWidth +'" height="'+ flashHeight +'">';
	flashHtml			+=	'	<param name="movie" value="' + flashUrl + '" />';
	flashHtml			+=	'	<param name="quality" value="high" />';
	flashHtml			+=	'	<param name="allowScriptAccess" value="always" />';
	flashHtml			+=	'	<param name="wmode" value="transparent" />';
	flashHtml			+=	'	<embed src="'+ flashUrl + '" allowScriptAccess="always" quality="high" wmode="transparent" width="'+ flashWidth +'" height="'+ flashHeight +'" type="' + embedType + '" pluginspage="' + pluginsPage + '" />';
	flashHtml			+=	'</object>';

	if(flashDiv) {
		document.getElementById(flashDiv).innerHTML	=	flashHtml;
	} else {
		document.write(flashHtml);
	}
}

function mgameMovie(movieUrl,movieWidth,movieHeight,movieDiv,movieUI,moviePlay) {
	var classId			=	"clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6";
	var playUI			=	movieUI ? "full" : "none";
	var playMode		=	moviePlay ? "false" : "true";
	var movieHtml		=	"";

	movieHtml			+=	'<object width="'+ movieWidth +'" height="'+ movieHeight +'" id="mgamePlayer" classid="'+ classId +'">';
	movieHtml			+=	'	<param name="autostart" value="'+ playMode +'">';
	movieHtml			+=	'	<param name="url" value="'+ movieUrl +'">';
	movieHtml			+=	'	<param name="volume" value="70">';
	movieHtml			+=	'	<param name="showcontrols" value="true">';
	movieHtml			+=	'	<param name="defaultframe" value="content">';
	movieHtml			+=	'	<param name="uiMode" value="'+ playUI +'">';
	movieHtml			+=	'	<param name="enablecontextmenu" value="false">';
	movieHtml			+=	'	<param name="fullscreen" value="false">';
	movieHtml			+=	'	<param name="enabled" value="true">';
	movieHtml			+=	'	<param name="stretchtofit" value="true">';
	movieHtml			+=	'</object>';

	if(movieDiv) {
		document.getElementById(movieDiv).innerHTML	=	movieHtml;
	} else {
		document.write(movieHtml);
	}
}

function iframeResize(ifrm) {
	if(ifrm) {
		ifrm.height	=	isXHTML(ifrm.contentWindow) ? ifrm.contentWindow.document.documentElement.scrollHeight : ifrm.contentWindow.document.body.scrollHeight;
	} else {
		var obj	=	parent.document.getElementsByTagName('iframe')[window.name];
		obj.style.height	=	isXHTML() ? document.documentElement.scrollHeight +'px' : document.body.scrollHeight;
	}
}


function isXHTML(obj) {
	var xhtml;

	if(isIE()) {
		xhtml		=	(obj ? obj.document.documentElement.clientHeight : document.documentElement.clientHeight) ? 1 : 0;
	} else {
		try {
			xhtml	=	((obj ? obj.document.doctype.publicId.indexOf('XHTML') : document.doctype.publicId.indexOf('XHTML')) == -1) ? 0 : 1;
		} catch(ex) {
			xhtml	=	0;
		}
	}

	return xhtml;
}


function if_Resize(td,iframe) 
{
	td						=	td ? td : 'resizeTd';
	iframe					=	iframe ? iframe : 'content';

	var obj					=	document.getElementById(td);
	var ifrm				=	document.getElementById(iframe);
	//var ifrm				=	obj.getElementsByTagName('iframe')[0].contentWindow;
	
	obj.style.height		=	Math.max(ifrm.document.documentElement.scrollHeight,ifrm.document.body.scrollHeight) +'px';
	ifrm.height				=	Math.max(ifrm.document.documentElement.scrollHeight,ifrm.document.body.scrollHeight) +'px';
	document.body.scrollTop	=	0;
}

function ajaxCreate() {
	var xmlHttp;

	if(window.ActiveXObject) {
		xmlHttp	=	new ActiveXObject("Microsoft.XMLHTTP");
	} else if(window.XMLHttpRequest) {
		xmlHttp	=	new XMLHttpRequest();
	}

	return xmlHttp;
}

function ajaxRequest(div,actionfile,param,xml,output) 
{
	var ajax		=	ajaxCreate();
	
	ajax.open(param ? "POST" : "GET",actionfile,false);	
	ajax.setRequestHeader("content-type","application/x-www-form-urlencoded");
	ajax.send(param ? param : null);

	if(ajax == null){
		alert("AJAX NOT SUPPORT.");
		history.back();
	}

	if(xml) {
		eval(div+"(ajax)");
	} else {
		if(div) {
			document.getElementById(div).innerHTML	=	ajax.responseText;
		}
		else if(output)
		{
			document.write(ajax.responseText);
		}
		else
		{
			return ajax.responseText;
		}
	}
}

function isIE() {
	return (navigator.appName == "Microsoft Internet Explorer") ? true : false;
}

function isIE7() {
	var flag			=	false;
	var arrVerStr		=	window.navigator.appVersion.split("; ");

	if(arrVerStr.length >= 4) {
		var arrIEVer	=	arrVerStr[1].split(" ");
		
		if(arrIEVer[1] >= 7.0) {
			flag		=	true;
		}
	}

	return flag;
}

function windowVersion() {
	var osVerNum		=	5.1;
	var arrVerStr		=	window.navigator.appVersion.split('; ');
	
	if( arrVerStr.length >= 4 ) {
		var arrOsVer	=	arrVerStr[2].split(' ');

		if( arrOsVer.length >= 3) {
			var osVerNum	=	new Number(arrOsVer[2]);
		}
	}

	return osVerNum;
}

function winResize() {
	var Dwidth		=	parseInt(Math.max(document.body.scrollWidth,document.documentElement.scrollWidth));
	var Dheight	=	parseInt(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight));
	var divEl		=	document.createElement("div");

	divEl.style.position	=	"absolute";
	divEl.style.left		=	"0px";
	divEl.style.top		=	"0px";
	divEl.style.width	=	"100%";
	divEl.style.height	=	"100%";

	document.body.appendChild(divEl);
	window.resizeBy(Dwidth-divEl.offsetWidth,Dheight-divEl.offsetHeight);
	document.body.removeChild(divEl);
}

function imageResize(obj,size) {
	if(!size) {
		obj.width		=	"100%";
	} else {
		if(w=eval(obj.width) > size) obj.width = size;
	}
}

function addEvent(ev,fnc,obj) {
	obj		=	obj ? obj : window;

	if(isIE()) {
		obj.attachEvent(ev,fnc);
	} else {
		obj.addEventListener(ev.replace("on",""),fnc,false);
	}
}

function thisGame() {
	var gameName;
	var thisUri			=	top.location.host.split(".");

	if(thisUri[0].substr(0,2) == "mg") {
		gameName		=	thisUri[0].substr(2);
	} else if(thisUri[0].substr(thisUri[0].length-4) == "test") {
		gameName		=	thisUri[0].substr(0,thisUri[0].length-4);
	} else {
		gameName		=	thisUri[0];
	}

	return gameName;
}

function thisName() {
	var thisHref		=	location.href.split("/");
	var thisReFile		=	thisHref[thisHref.length-1].replace(/(\?(.)*)/gi,"");
	var thisLocate		=	thisReFile.split(".");

	return thisLocate[0].replace(/(_(.)*)/gi,"");
}

function thisFile(a) {
	var thisHref		=	location.href.split("/");
	var thisReFile		=	thisHref[thisHref.length-1].replace(/(\?(.)*)/gi,"");
	var thisLocate		=	thisReFile.split(".");
	var thisName		=	thisLocate[0].replace(/(_(.)*)/gi,"");

	return a ? thisName + "_" + a +"."+thisLocate[1] : thisName + "."+thisLocate[1];
}

function sortLink(v) {
	var f	=	document.procForm;
	
	f.sort.value	=	v;
	f.submit();
}

function copyLink(v) {
	try {
		var copyPath	=	copyUrl;
	} catch(e) {
		var copyPath	=	location.href +"?idx="+ v;
	}

	clipboardData.setData("Text",copyPath);
	alert("It is successfully saved.");
}

function writeLink() {
	if(!mgameUserCheck()) return;

	var p	=	document.procForm;
	
	if(p && p.mode) {
		p.mode.value		=	'write';
	}
	p.action			=	thisFile("write");
	p.submit();
}

function recomLink() {
	if(!mgameUserCheck()) return;

	var p	=	document.procForm;

	p.mode.value		=	"recom";
	p.action			=	thisFile("proc");
	p.submit();
}

function viewLink(idx,a) {
	var p	=	document.procForm;

	p.idx.value			=	idx;

	if(a) {
		p.action		=	a;
	} else {
		try {
			p.action	=	procAction;
		} catch(e) {
			p.action	=	thisFile("view");
		}
	}

	p.submit();
}

function pageLink(page) {
	var p	=	document.procForm;

	p.page.value		=	page;
	p.submit();
}

function listLink() {
	var p	=	document.procForm;

	p.action			=	thisFile();
	p.submit();
}

function modeLink(m) {
	if(!mgameUserCheck()) return;

	var p	=	document.procForm;

	p.mode.value		=	m;
	p.action			=	thisFile("proc");
	p.submit();
}

function deleteLink() {
	if(!mgameUserCheck()) return;

	if(!confirm("Do you want to delete?")) {
		return;
	}

	var p	=	document.procForm;

	p.mode.value		=	"delete";
	p.action			=	thisFile("proc");
	p.method			=	'post';
	p.submit();
}

function editLink() {
	if(!mgameUserCheck()) return;

	var p	=	document.procForm;

	p.mode.value		=	"edit";
	p.action			=	thisFile("write");
	p.submit();
}

function ajaxProc() {
	try {
		var cAction		=	ajaxAction;
	} catch(e) {
		var cAction		=	thisFile("comment");
	}

	return cAction;
}

function ajaxResize() {
	try {
		if_Resize2();
	} catch(e) {
	}
}

function ajaxId() {
	try {
		var div			=	ajaxDiv;
	} catch(e) {
		var div			=	"divAjax";
	}

	return div;
}

function ajaxVariable() {
	try {
		var query		=	ajaxQuery;
	} catch(e) {
		var query		=	"";
	}

	return query;
}

function ajaxPage(page, focus) 
{
	ajaxRequest(ajaxId(), ajaxProc(), ajaxVariable() + "&page=" + ((typeof page == 'undefined') ? 1 : page));
	ajaxResize();

	try {
		if(focus && focus == "no") {}
		else {
			document.commentForm.comment.focus();
			document.commentForm.comment.blur();
		}
	} catch(ex) {}
}

function commentWrite() {

	if(!mgameUserCheck()) return;

	var f	=	document.commentForm;
	
	f.comment.value	=	mgameIlligalWordsCheck(f.comment.value);

	if(!f.comment.value.trim()) {
		alert("Please type the comment.");
		f.comment.focus();
		return;
	}

	ajaxRequest(ajaxId(),ajaxProc(),ajaxVariable() +"&mode=write&comment="+ encodeURIComponent(f.comment.value));
	f.reset();
	ajaxResize();
}

function commentDelete(idx) {
	if(!mgameUserCheck()) return;
	if(!confirm("Do you want to delete?")) return;

	ajaxRequest(ajaxId(),ajaxProc(),ajaxVariable() +"&mode=delete&idx="+ idx);
	ajaxResize();
}

String.prototype.trim = function() {
	return this.replace(/(^[ \f\n\r\t]*)|([ \f\n\r\t]*$)/g, "");
}

String.prototype.numberFormat	=	function() {
	return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1,');
}

String.prototype.cut = function(len) {
	var str	=	this;
	var l	=	0;

	for(var i=0;i<str.length;i++) {
		l += (str.charCodeAt(i) > 128) ? 2 : 1;

		if(l > len) return str.substring(0,i) + "..";
	}

	return str;
}

function error(msg,opt) {
	if(!msg) {
		msg	=	"Please use it after you sign in.";
	}

	if(typeof(opt) !=  "undefined") {
		return confirm(msg);
	} else {

		try {
			mgameLayer(msg);
		} catch(ex) {
			alert(msg);
		}
	}
}

function setCookie(name, value, expiredays)	{
	var expire_date = new Date();
	expire_date.setDate(expire_date.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; expires=" + expire_date.toGMTString() + "; path=/; domain="+ document.domain;
}

function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;

	while(x <= document.cookie.length) {
		var y	=	(x+nameOfCookie.length);
		if(document.cookie.substring(x,y) == nameOfCookie) {
			if((endOfCookie = document.cookie.indexOf(";",y)) == -1) {
				endOfCookie	=	document.cookie.length;
			}

			return unescape( document.cookie.substring(y,endOfCookie));
		}

		x	=	document.cookie.indexOf(" ",x) + 1;
		if(x == 0)
		break;
	}

	return "";
}

function encodeBase64(what) {
	var encodeTable	=	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var result			=	"";
	var len				=	what.length;
	var x,y;
	var ptr				=	0;

	while(len-- > 0) {
		x				=	what.charCodeAt(ptr++);
		result			+=	encodeTable.charAt((x >> 2) & 63);

		if(len-- <= 0) {
			result		+=	encodeTable.charAt((x << 4) & 63);
			result		+=	"==";
			break;
		}

		y				=	what.charCodeAt(ptr++);
		result			+=	encodeTable.charAt(((x << 4) | ((y >> 4) & 15)) & 63);

		if(len-- <= 0) {
			result		+=	encodeTable.charAt((y << 2) & 63);
			result		+=	"=";
			break;
		}

		x				=	what.charCodeAt(ptr++);
		result			+=	encodeTable.charAt( ( ( y << 2 ) | ( ( x >> 6 ) & 3 ) ) & 63 );
		result			+=	encodeTable.charAt( x & 63 );

	}

	return result;
}

function mgameLayer(msg,w,h,flag, type, url) {
	if(flag == 2) {
		var w			=	w ? parseInt(w+10) : 290;
		var h			=	h ? parseInt(h+38) : 380;
	} else {
		var w			=	360;
		var h			=	flag ? 220 : 194;
	}

	var subURI = '';

	if(typeof(type) != 'undefined' && type != null)
	{
		if(type.trim().length > 0)
		{
			subURI = '&type='+type;
		}
	}

	if(typeof(url) != 'undefined'  && url != null)
	{
		if(url.trim().length > 0)
		{
			subURI += '&url='+url;
		}	
	}

	var position			=	mgameLayerPosition(w,h);

	mgameLayerShow();

}


/**
 * Show Iframe Layer Function
 * 
 * @param url Iframe URL
 * @param w Layer Width
 * @param h Layer Height
 * @return
 */
function mgameIframeLayer(url, w, h, scroll_flag) {
	//var w			=	w ? parseInt(w+10) : 500;
	//var h			=	h ? parseInt(h+38) : 200;
	var position	=	mgameLayerPosition(w, h);
	mgameLayerShow();

	if(scroll_flag){
		var html		=	'<iframe src="'+ url +'" width="'+ w +'" height="'+ h +'" scrolling="no" frameborder="0" style="border:0px solid #705137" onload="iframeResize(this)" allowtransparency="true"></iframe>';
	} else{
		var html		=	'<iframe src="'+ url +'" width="'+ w +'" height="'+ h +'" scrolling="yes" frameborder="0" style="border:2px solid #705137"  allowtransparency="true"></iframe>';
	}

	document.getElementById('divmgameLayer').innerHTML	=	html;
}

/**
 * Show Iframe Layer Function
 * 
 * @param url Iframe URL
 * @param w Layer Width
 * @param h Layer Height
 * @return
 */
function nttgameIframeLayer(url, w, h, scroll_flag) {
	//var w			=	w ? parseInt(w+10) : 500;
	//var h			=	h ? parseInt(h+38) : 200;
	var position	=	mgameLayerPosition(w, h);
	mgameLayerShow();

	if(scroll_flag){
		var html		=	'<iframe src="'+ url +'" width="'+ w +'" height="'+ h +'" scrolling="no" frameborder="0" style="border:0px solid #705137" onload="iframeResize(this)" allowtransparency="true"></iframe>';
	} else{
		var html		=	'<iframe src="'+ url +'" width="'+ w +'" height="'+ h +'" scrolling="yes" frameborder="0" style="border:2px solid #705137"  allowtransparency="true"></iframe>';
	}

	document.getElementById('divmgameLayer').innerHTML	=	html;
}

function nttgameIframeLayer_top(url, w, h, scroll_flag) {
//	var w			=	w ? parseInt(w+1) : 500;
//	var h			=	h ? parseInt(h+200) : 200;
	var position	=	nttgameLayerPosition_top(w, h);
	mgameLayerShow();

	if(scroll_flag){
		var html		=	'<iframe src="'+ url +'" width="'+ w +'" height="'+ h +'" scrolling="no" frameborder="0" style="border:0px solid #705137" onload="iframeResize(this)" allowtransparency="true"></iframe>';
	} else{
		var html		=	'<iframe src="'+ url +'" width="'+ w +'" height="'+ h +'" scrolling="yes" frameborder="0" style="border:2px solid #705137" allowtransparency="true"></iframe>';
	}

	document.getElementById('divmgameLayer').innerHTML	=	html;
}


function nttgameLayerPosition_top(w,h) {
	if(!document.getElementById('divmgameLayer')) {
		var divNew;
		var divName	=	['divmgameLayer','divmgameLayerBg'];

		for(var i=0;i<divName.length;i++) {
			divNew		=	document.createElement('div');
		
			divNew.setAttribute('id',divName[i]);
			document.body.appendChild(divNew);
		}
	}

	var obj				=	document.getElementById('divmgameLayer');
	var objBg			=	document.getElementById('divmgameLayerBg');
	var xhtml			=	isXHTML();
	var cWidth			=	xhtml ? document.documentElement.clientWidth : document.body.clientWidth;
	var cHeight			=	xhtml ? document.documentElement.clientHeight : document.body.clientHeight;
	var sHeight			=	xhtml ? document.documentElement.scrollHeight : document.body.scrollHeight;
	var sScroll			=	xhtml ? document.documentElement.scrollTop : document.body.scrollTop;

	objBg.style.cssText	=	'margin:0;padding:0;position:absolute;top:0;left:0;width:100%;height:'+ ((cHeight > sHeight) ? cHeight : sHeight)+'px;z-index:1165;background:#000;filter:alpha(opacity=75);opacity:0.75;-moz-opacity:0.75;';
	obj.style.cssText	=	'margin:0;padding:0;position:absolute;z-index:6244;';

	var left_value 		=	Math.ceil((cWidth-w)/2);
	var top_value		=	300;
	//var top_value		=	Math.ceil((cHeight-h)/2+sScroll);

	if(left_value < 10) left_value = 10;
	if(top_value < 10) top_value = 10;

	obj.style.left		=	left_value + 'px';
	obj.style.top		=	top_value-200 + 'px';
}

function mgameLayerPosition(w,h) {
	if(!document.getElementById('divmgameLayer')) {
		var divNew;
		var divName	=	['divmgameLayer','divmgameLayerBg'];

		for(var i=0;i<divName.length;i++) {
			divNew		=	document.createElement('div');
		
			divNew.setAttribute('id',divName[i]);
			document.body.appendChild(divNew);
		}

	var obj				=	document.getElementById('divmgameLayer');
	var objBg			=	document.getElementById('divmgameLayerBg');
	var xhtml			=	isXHTML();
	var cWidth			=	xhtml ? document.documentElement.clientWidth : document.body.clientWidth;
	var cHeight			=	xhtml ? document.documentElement.clientHeight : document.body.clientHeight;
	var sHeight			=	xhtml ? document.documentElement.scrollHeight : document.body.scrollHeight;
	var sScroll			=	xhtml ? document.documentElement.scrollTop : document.body.scrollTop;

	objBg.style.cssText	=	'margin:0;padding:0;position:absolute;top:0;left:0;width:100%;height:'+ ((cHeight > sHeight) ? cHeight : sHeight)+'px;z-index:1165;background:#000;filter:alpha(opacity=75);opacity:0.75;-moz-opacity:0.75;';
	obj.style.cssText	=	'margin:0;padding:0;position:absolute;z-index:6244;';

	var left_value 		=	Math.ceil((cWidth-w)/2);
	var top_value		=	Math.ceil((cHeight-h)/2+sScroll);

	if(left_value < 10) left_value = 10;
	if(top_value < 10) top_value = 10;

	obj.style.left		=	left_value + 'px';
	obj.style.top		=	top_value + 'px';

	}
}

function mgameLayerShow() {

	try {
		var divName	=	['divmgameLayer','divmgameLayerBg'];
	} catch(ex) {
		alert('maintenance not found');
		return;
	}

	var obj;
       //setCookie("pop_flag","1",1);
	for(var i=0;i<divName.length;i++) {
		obj		=	document.getElementById(divName[i]);

		obj.innerHTML		=	'';
		obj.style.display	=	(obj.style.display != 'block') ? 'block' : 'none';
	}

	if(isIE()) {
		if(!isIE7()) {
			var sel		=	document.getElementsByTagName('select');

			for(var j=0;j<sel.length;j++) {
				sel[j].style.visibility	=	(obj.style.display != 'block') ? 'visible' : 'hidden';
			}
		}
		
		var player	=	document.getElementsByTagName('object');
		
		for(var k=0;k<player.length;k++) {
			if(player[k].id == 'mgamePlayer') {
				player[k].style.visibility	=	(obj.style.display != 'block') ? 'visible' : 'hidden';
			}
		}
	}
}

/* 레이어 아래에 방해되는 엘리먼트들 hidden시키는 코드  */
function toggleTroubleElements(on) {
	var agent_name	= navigator.userAgent.toLowerCase();
	var is_ie		= ((agent_name.indexOf("msie") != -1) && (agent_name.indexOf("opera") == -1));
	var is_ie7		= (is_ie && (parseFloat(navigator.appVersion.split('MSIE')[1])>=7));
	//alert(true);
	if(is_ie)if(is_ie7)return;

	if (on) {
		for (var i=0; i<hideObjs.length; i++){
			hideObjs[i].style.visibility = 'visible';
		}
		hideObjs = new Array();
	}else{
		hideObjs = new Array();
		var objs = document.getElementsByTagName('select');
		for (var i=0; i<objs.length; i++){
			if (objs[i].style.visibility != 'hidden') { objs[i].style.visibility = 'hidden'; hideObjs.push(objs[i]); }
		}
		var objs = document.getElementsByTagName('object');
		for (var i=0; i<objs.length; i++){
			if (objs[i].style.visibility != 'hidden') { objs[i].style.visibility = 'hidden'; hideObjs.push(objs[i]); }
		}
		var objs = document.getElementsByTagName('embed');
		for (var i=0; i<objs.length; i++){
			if (objs[i].style.visibility != 'hidden') { objs[i].style.visibility = 'hidden'; hideObjs.push(objs[i]); }
		}
	}
}


function mgameInit() {
	try {
		if(!getCookie("MGAME")) {
			document.getElementsByName('userid').focus();
			//document.loginForm.userid.focus();
		}
	} 
	catch(ex) 
	{
	}
}

//addEvent('onload',mgameInit);

/* 매개 변수 조합 */
function linkParameter(except) {
	var obj		=	location.href;
	var param	=	'';

	if(obj.indexOf('?') == -1) return '';

	var devide	=	obj.substr(obj.indexOf('?')+1).split('&') ? obj.substr(obj.indexOf('?')+1).split('&') : [];
	var tmp

	for(var i=0;i<devide.length;i++) {
		tmp	=	devide[i].split('=');
		param	+=	((except ? except : '').indexOf(tmp[0]) == -1 && tmp[1]) ? '&'+ tmp[0] +'='+ tmp[1] : '';
	}

	return param;
}

/* 뷰 링크 */
function linkView(idx) {
	location.href	=	thisFile('view') +'?idx='+ idx + linkParameter('idx');
}

/* 뷰 링크 */
function linkWrite() {
	location.href	=	thisFile('write') + (linkParameter().substr(1) ? '?'+ linkParameter().substr(1) : '');
}

/* 수정 링크 */
function linkEdit() {
	location.href	=	thisFile('write') +'?mode=edit'+ linkParameter('mode');
}


function linkMode(m) {
	location.href	=	thisFile('proc') +'?mode='+ m + linkParameter('mode');
}


function linkDelete() {
	if(!confirm('Do you want to delete?')) return;
	location.href	=	thisFile('proc') +'?mode=delete'+ linkParameter('mode');
}


function linkList() {
	location.href	=	thisFile() + (linkParameter('idx,mode').substr(1) ? '?'+ linkParameter('idx,mode').substr(1) : '');
}


function linkPage(page) {
	location.href	=	thisFile() +'?page='+ page + linkParameter('page,mode,idx');
}


function linkProc(m) {
	var idx	=	formChecking();
	
	if(!idx) {
		alert('Please select a articles.');
		return;
	}
	
	if(m == 'delete') {
		if(!confirm('Do you want to delete?')) return;
	}
	
	location.href	=	thisFile('proc') +'?mode='+ m +'&idx='+ idx + linkParameter();
}


function f_sendEmail()
{
	if(!confirm('Do you want to retrieve account information by email?')){
	}	
}

function selectGuild(data, target, game) {
}


function getHost()
{
	var Dns;
	Dns = location.href;
	Dns = Dns.split("//");
	Dns = Dns[1].substr(0, Dns[1].indexOf("/"));
	
	return Dns;
}

function getGameName()
{
	var host	=	getHost();
	var arr	=	host.split(".");
	return arr[0];
}

//scroll layer
function mgameLayerMoving(target, position, topLimit, btmLimit) {
	if (!target)
		return false;

	var gameName	=	getGameName();	

	var obj = target;
	obj.initTop = position;
	obj.topLimit = topLimit;
	obj.bottomLimit = document.documentElement.scrollHeight - btmLimit;

	obj.style.position = "absolute";
	obj.top = obj.initTop;
	obj.left = obj.initLeft;

	if (typeof(window.pageYOffset) == "number") {
		obj.getTop = function() {
			return window.pageYOffset;
		}
	} else if (typeof(document.documentElement.scrollTop) == "number") {
		obj.getTop = function() {
			return document.documentElement.scrollTop;
		}
	} else {
		obj.getTop = function() {
			return 0;
		}
	}

	if (self.innerHeight) {
		obj.getHeight = function() {
			return self.innerHeight;
		}
	} else if(document.documentElement.clientHeight) {
		obj.getHeight = function() {
			return document.documentElement.clientHeight;
		}
	} else {
		obj.getHeight = function() {
			return 500;
		}
	}

	obj.move = setInterval(function() {
		if (obj.initTop > 0) {
			pos = obj.getTop() + obj.initTop;
		} else {
			pos = obj.getTop() + obj.getHeight() + obj.initTop;
			//pos = obj.getTop() + obj.getHeight() / 2 - 15;
		}

		if (pos > obj.bottomLimit)
			pos = obj.bottomLimit;
		if (pos < obj.topLimit)
			pos = obj.topLimit;

		interval = obj.top - pos;
		obj.top = obj.top - interval / 3;
		obj.style.top = obj.top + "px";
	}, 30)
}

function enter_key(form){
	if(event.keyCode == 13) {
		form.submit();
	}
}


function numbersonly(e, decimal) {
	var key;
	var keychar;

	if (window.event) {
		key = window.event.keyCode;
	} else if (e) {
		key = e.which;
	} else {
		return true;
	}
	keychar = String.fromCharCode(key);

	if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
		return true;
	} else if ((("0123456789").indexOf(keychar) > -1)) {
		return true;
	} else if (decimal && (keychar == ".")) {
		return true;
	} else
		return false;
}



/*Martin*/
var __checkValue = function(types, val){
	var check1 = "";
	var check2 = "";
	var check3 = "";
	
	if(types == "password"){
		check1 = /.*[0-9].*/i;
		check2 = /.*[a-zA-Z].*/i;
		check3 = /[!"#$%&'()*+,-.:;?@[\\\]_{|}~]/i;
	}else if(types == "nickname"){
		//check1=/^[0-9a-zA-Z_]*$/;
		check1=/[^0-9a-zA-Z_]/gi;
		if (check1.test(val)){
			return false;
		}else{
			return true;
		}
	}else if(types == "captcha"){
		check1 = /.*[a-zA-Z0-9].*/i;
		if(check1.test(val)) {
			return true;
		}else{
			return false;
		}
	}else if(types == "number"){
		check1=/[^0-9]/gi;
		if (check1.test(val)){
			return false;
		}else{
			return true;
		}
	}else{
		return false;
	}

	if(check1.test(val)) {
		return true;
	} else if(check2.test(val)) {
		return true;
	} else if(check3.test(val)) {
		return true;
	} else{
		return false;
	}
};

var __chkEmail = function (mailaddr) {
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	var blockEmail = true;
	var mail = mailaddr;
	var mail_array = mail.split("@");
	return (pattern.test(mailaddr)&&blockEmail) ? true : false;
};


var __ajaxExistCheck = function(para, val){
	var result = ajaxRequest(null,'/account/create_all_check.gcs', 'type='+ para +'&val='+ val);
	if(result == 1){
		return true;
	}else{
		return false;
	}
};

var __chkDate = function (ExpiryDate) { 
	var objDate, mSeconds, day, month, year;
	if (ExpiryDate.length !== 10) { 
		return false; 
	} 
	if (ExpiryDate.substring(2, 3) !== '/' || ExpiryDate.substring(5, 6) !== '/') { 
		return false; 
	} 
	month = ExpiryDate.substring(0, 2) - 1;
	day = ExpiryDate.substring(3, 5) - 0; 
	year = ExpiryDate.substring(6, 10) - 0; 
	if (year < 1000 || year > 2100) { 
		return false; 
	} 
	mSeconds = (new Date(year, month, day)).getTime(); 
	objDate = new Date(); 
	objDate.setTime(mSeconds); 
	if (objDate.getFullYear() !== year || 
	    objDate.getMonth() !== month || 
	    objDate.getDate() !== day) { 
	    return false; 
	} 
	return true; 
}