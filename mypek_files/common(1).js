// common
/*
	document.oncontextmenu	=	new Function("return false");
	document.onselectstart	=	new Function("return false");
	document.ondragstart	=	new Function("return false");
	document.onkeydown		=	function (e){ctrlEvent(e)};
*/


function MM_preloadImages() { //v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_showHideLayers() { //v9.0
	var i,p,v,obj,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 
	with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	obj.visibility=v; }
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
	eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
	if (restore) selObj.selectedIndex=0;
}
function MM_jumpMenu_blank(selObj,restore){ //v3.0
	eval("window.open='"+selObj.options[selObj.selectedIndex].value+"'");
	if (restore) selObj.selectedIndex=0;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
	window.open(theURL,winName,features);
}

// rollover
function initRollovers() {
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

//window.onload = initRollovers;

// Tab Content, now don't use
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) 
	{
		if (tabAnchor.item(i).className == "tab")
		{
			thismenu = tabAnchor.item(i);
		}
		else
		{
			continue;
		}

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);

		thismenu.onclick = function tabMenuClick() 
		{
			currentmenu = this.container.current;
			if (currentmenu == this)
				return false;

			if (currentmenu) 
			{
				currentmenu.targetEl.style.display = "none";

				if (currentmenu.imgEl) {
					currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", ".gif");
				} else {
					currentmenu.className = currentmenu.className.replace(" on", "");
				}
			}
			
			this.targetEl.style.display = "";
			if (this.imgEl) {
				this.imgEl.src = this.imgEl.src.replace(".gif", "_on.gif");
			} else {
				this.className += " on";
			}
			this.container.current = this;

			return false;
		};

		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	if (tabContainer.first)
		tabContainer.first.onclick();
}

// Change Over Row Class
function changeOverRowClass(elId, tagName, searchClass) {
	var el = document.getElementById(elId).getElementsByTagName(tagName);

	for (i=0; i<el.length; i++) {
		if (el[i].className == searchClass || el[i].className == searchClass + " on") {
			el[i].onmouseover = changeOverRowClassOver;
			el[i].onmouseout = changeOverRowClassOut;
		}
	}
}

function changeOverRowClassOver() {
	if (this.className == "") {
		this.className = this.className + " on";
	} else {
		this.className = "on";
	}
}

function changeOverRowClassOut() {
	if (this.className == "on") {
		this.className = "";
	} else {
		this.className = this.className.replace(" on", "");
	}
}

/* Add Even Row Class, maybe don't use */
function addEvenRowClass(elId, tagName, searchClass, addClass) {
	var count = 1;
	var el = document.getElementById(elId).getElementsByTagName(tagName);

	for (i=0; i<el.length; i++) {
		if (el[i].className == searchClass) {
			if (count%2) {
				el[i].className = el[i].className + " " + addClass;
			}
			count++;
		}
	}
}

// definition list toggle
// maybe don't use
function initToggle(tabContainer, onNum) {
	triggers = tabContainer.getElementsByTagName("a");

	for(i = 0; i < triggers.length; i++) {
		if (triggers.item(i).href.split("#")[1])
			triggers.item(i).targetEl = document.getElementById(triggers.item(i).href.split("#")[1]);
			triggers.item(i).imgEl = triggers.item(i).getElementsByTagName("img").item(0);

		if (!triggers.item(i).targetEl)
			continue;

		triggers.item(i).targetEl.style.display = "none";

		triggers.item(i).onclick = function () {
			for(i = 0; i<triggers.length; i++) {
				triggers.item(i).className = triggers.item(i).className.replace(" on", "");

				if (triggers.item(i).imgEl) {
					triggers.item(i).imgEl.src = triggers.item(i).imgEl.src.replace("_on.gif", ".gif");
				}
			}

			if (tabContainer.current == this) 
			{
				this.targetEl.style.display = "none";
				this.className = this.className.replace(" on", "");
				tabContainer.current = null;
			}
			else
			{
				if (tabContainer.current) 
				{
					tabContainer.current.targetEl.style.display = "none";
				}

				this.targetEl.style.display = "block";
				if (this.imgEl) 
				{
					this.imgEl.src = this.imgEl.src.replace(".gif", "_on.gif");
				}

				this.className += " on";
				tabContainer.current = this;
			}
		return false;
		}
	}

	if(onNum > -1)
	{
		triggers.item(onNum).onclick();
	}
}

// png
// use at default.css
function setPng24(obj) { 
	obj.width=obj.height=1; 
	obj.className=obj.className.replace(/\bpng24\b/i,''); 
	obj.style.filter = 
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');" 
	obj.src='';  
	return '';
}

// scroll layer
// maybe don't use
function initMoving(target, position, topLimit, btmLimit) {
	if (!target)
		return false;

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

function availCheck(obj, opt) {

	if(opt) {
		obj.value	=	obj.value.toUpperCase().trim();
	}

	if(thisName() == 'setting' || thisName() == 'terminate') {
		obj.value	=	obj.value.replace(/[^a-z0-9_\-\s]/gi,'');
	} else if(thisName() == 'create' && obj && obj.name == 'joinPasswd') {
		obj.value	=	obj.value.replace(/[^a-z0-9]/gi,'');
	}else if(obj.name == 'joinName'){
		obj.value	=	obj.value.replace(/[^a-z0-9\s~!@$%^*()_+{},./]/gi,'');
	} else {
		obj.value	=	obj.value.replace(/[^a-z0-9\s]/gi,'');
	}

	try{
		if(obj.name=='joinPasswd') {
			if(obj.value.length >= 6) {

				var rea=/[a-zA-Z]/;
				var re0=/[0-9]/;
				var flag=0; 
				var error=['','Password must be combination of letters and numbers.','Password must be combination of letters and numbers.'];
				var html	=	document.getElementById('ajaxpassword');

				if(rea.test(obj.value)){ 
					flag+=1;
				}

				if(re0.test(obj.value)){
					flag+=2;
				}

				if(flag!=3){
					document.form1.passwdCheck.value=0;
					html.innerHTML='<font color="red">'+error[flag]+'</font>';
				}else{

					var temp	=	'';
					var cnt		=	0;
					for(var i=0;i<obj.value.length;i++){
						if(i==0){
							continue;
						}
						if(obj.value.substr((i-1),1)	==	obj.value.substr(i,1)){
							cnt++;
						}else{
							cnt=0;
						}
						if(cnt==2){
							document.form1.passwdCheck.value=0;
							html.innerHTML='<font color="red">'+'Don\'t use repeating characters.'+'</font>';
							break;
						}
						
					}

					if(cnt<2){
						html.innerHTML='OK';
						document.form1.passwdCheck.value=1;
					}

				}
			} else {
				document.getElementById('ajaxpassword').innerHTML = '';
				document.form1.passwdCheck.value=0;
			}
		}

	} catch(e) {}
}

function availCheck2(obj, opt) {
	if(obj.name == 'joinName'){
		obj.value       =       obj.value.replace(/[^a-z0-9\s~!@$%^*()_+{},./]/gi,'');

	} else {
		obj.value	=	obj.value.replace(/[^a-z0-9\s]/gi,'');
	}

}


function upperCase(obj) {
	obj.value	=	obj.value.toUpperCase();
}

function emailCheck(obj) {
	var emailAvail	=	/^[._a-zA-Z0-9-]+@[._a-zA-Z0-9-]+\.[a-zA-Z]+$/;

	if(!emailAvail.test(obj)) return false;

	var limitEmail	=	['mailinator2.com','sogetthis.com','mailin8r.com','mailinator.net','spamherelots.com','thisisnotmyrealemail.com','mailinator.com','guerrillamail.com','tempemail.net','mailcatch.com','trashmail.net','zoemail.net','incognitomail.net','spamgourmet.com','litedrop.com','hidzz.com','pookmail.com','hushmail.com','spamavert.com','blockfilter.com','deadaddress.com','wh4f.org','spambox.us','mt2009.com','spam.la','tempinbox.com','saynotospams.com','makemoneytradingstocks.org','spamcero.com','spamcorptastic.com','20minutemail.com','signed-first-edition.com','tempe-mail.com','dumpyemail.com','shieldemail.com','dodgit.com','dandikmail.com','maileater.com','haltospam.com','nospamfor.us','nospam4.us','spamfree24.org','spamfree24.com','spamfree24.eu','spamfree24.de','spamfree24.info','spamfree24.net','tempomail.fr','mint.us.to','skeefmail.com','slopsbox.com'];

	for(var i=0;i<limitEmail.length;i++) {
		if(obj.substr(obj.indexOf('@')+1).trim() == limitEmail[i]) return false;
	}

	return true;
}

// maybe don't use
function engCheck(obj) {
	obj.value.replace(/[^a-zA-Z0-9]/gi,"");
}

function openURL(bigNum,smallNum) {

}

//maybe don't use
function matrixLayerClose()
{
	document.getElementById("matrixMain").style.display = 'none';
	document.getElementById("matrixSub").style.display = '';
}
