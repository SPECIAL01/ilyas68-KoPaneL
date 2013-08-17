function GO_HISTORYBACK_LIST(referpage,parameter){
	var refer = document.referrer;
	if (refer.indexOf(referpage) != -1 ){
		history.back();
	}else {
		location.href= referpage+"?"+parameter;
	}
}

function FORM_HISTORYBACK_LIST(referpage,formname){
	var refer = document.referrer;
	if (refer.indexOf(referpage) != -1 ){
		history.back();
	}else {
		var frmname = eval("document."+formname);
		frmname.submit();
	}
}


function imageResize(obj,size) {
	if(!size) {
		obj.width		=	"100%";
	} else {
		if(w=eval(obj.width) > size) obj.width = size;
	}
}

function messageLimit(obj,limit,div) {
	var nByte			=	0;

	for(var i=0;i<obj.value.length;i++) { 
		nByte			+=	(obj.value.charCodeAt(i)>128) ? 2 : 1;
		
		if(nByte >= limit) break;			
	}

	if(nByte >= limit) { 
		error(limit +" Bytes allowed.");
		obj.value			=	obj.value.substr(0,i);
	}
	
	if(document.getElementById("divMessageLimit")) {
		document.getElementById("divMessageLimit").innerText	=	nByte +"/"+ limit +" Bytes";
	} else if(div) {
		document.getElementById(div).innerText	=	nByte +"/"+ limit +" Bytes";
	}
}

function winResize() {

	var Dwidth = parseInt(document.body.scrollWidth);
	var Dheight = parseInt(document.body.scrollHeight);
	var divEl = document.createElement("div");
	divEl.style.position = "absolute";
	divEl.style.left = "0px";
	divEl.style.top = "0px";
	divEl.style.width = "100%";
	divEl.style.height = "100%";

	document.body.appendChild(divEl);
	window.resizeBy(Dwidth-divEl.offsetWidth, Dheight-divEl.offsetHeight);
	document.body.removeChild(divEl);

}


function iframeResize(ifrm) {

	if(ifrm) {
		try {
			ifrm.setAttribute("height", eval(ifrm.name).document.body.scrollHeight);
		} catch(ex) {
		}
		document.body.scrollTop	=	0;

	} else {
		var obj		=	parent.document.getElementsByTagName("iframe");
		
		for(var i=0;i<obj.length;i++) {

			if(obj[i].name == window.name) {
				try {
					//obj[i].style.height	=	document.body.scrollHeight;
					obj[i].setAttribute("height", document.body.scrollHeight + 200);
				} catch(ex) {
				}
			}
		}
	}
}
function iframeResize2(ifrm) {
	if(ifrm) {
		try {
			ifrm.style.height	=	ifrm.contentWindow.document.documentElement.scrollHeight +'px';
		} catch(ex) {

		}
		document.documentElement.scrollTop	=	0;

	} else {
		var obj		=	document.getElementsByTagName("iframe");
		for(var i=0;i<obj.length;i++) {
			if(obj[i].name == window.name) {
				try {
					obj[i].style.height	=	document.documentElement.scrollHeight +'px';
				} catch(ex) {
				}
			}
		}
	}
}



function iframe_resize_table_add(add_val) {
	//alert(Content.document.body.scrollHeight);
	if(!add_val) add_val= 50;	

	//resize_td.height = Content.document.body.scrollHeight + add_val; 
	resize_td.height = Content.document.body.scrollHeight ;
	resize_td.width = Content.document.body.scrollWidth; 
	//alert(resize_td.height);

}

function numberCheck(obj) {
	obj.value			=	obj.value.replace(/[^0-9]/gi,"");	
}



String.prototype.trim = function() {
	return this.replace(/(^[ \f\n\r\t]*)|([ \f\n\r\t]*$)/g, "");
}


String.prototype.numberFormat	=	function() {
	return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1,');
}


function include( filename ) {
	var js	=	document.createElement('script');
	js.setAttribute('type', 'text/javascript');
	js.setAttribute('src', filename);
	js.setAttribute('defer', 'defer');
	document.getElementsByTagName('head')[0].appendChild(js);
}

function thisFile(a) {
	var thisHref		=	location.href.split("/");
	var thisReFile		=	thisHref[thisHref.length-1].replace(/(\?(.)*)/gi,"");
	var thisLocate		=	thisReFile.split(".");
	var thisName		=	thisLocate[0].replace(/(_(.)*)/gi,"");

	return a ? thisName + "_" + a +"."+thisLocate[1] : thisName + "."+thisLocate[1];
}


function copyLink(v) {
	try {
		var copyPath	=	copyUrl;
	} catch(e) {
		var copyPath	=	location.href +"?idx="+ v;
	}
	
	clipboardData.setData("Text",copyPath);
	error("save in clipboard.");
}




function getDateDiff(date, diffType){
	//date = '2009-10-29 12:30:35';

	var gapTime;
	var writeDate = new Date(date.substr(0,4),date.substr(5,2),date.substr(8,2),date.substr(11,2),date.substr(14,2));

	var nowDate = new(Date);
	var nowYear = nowDate.getYear();
	var nowMonth = nowDate.getMonth()+1;
	var nowDay = nowDate.getDate();
	var nowHours = nowDate.getHours();
	var nowMinutes = nowDate.getMinutes();
	
	var currentDate = new Date(nowYear,nowMonth,nowDay,nowHours,nowMinutes);
	
	var gapTimeStamp = currentDate.getTime()-writeDate.getTime();

	if(diffType == "D")
		gapTime = Math.abs(Math.floor(gapTimeStamp/(60*60*24*1000)));
	else if(diffType == "H")
		gapTime = Math.abs(Math.floor(gapTimeStamp/(60*60*1000)));
	else if(diffType == "M")
		gapTime = Math.abs(Math.floor(gapTimeStamp/(60*1000)));

	return gapTime;
}


function div_add(a,b) {
	var f		=	document.form1;
	var divm	=	eval(a);
	var t		=	f("no_"+a);
	if(b == "+") {
		if(t.value == 5) {	
			alert("Can not be added anymore.");
			return;
		}

		t.value	=	parseInt(t.value)+1;

		divm.innerHTML	+=	eval(a+"_html");
	} else if(b == "-") {
		if(t.value == 1) {
			alert("Can not be deleted anymore.");
			return;
		}

		var divn	=	eval(a+"_div");
		var len		=	divn.length;
		var temp	=	"";

		for(i=0;i<len-1;i++) {
			temp	+=	'<div id="'+a+'_div">';
			temp	+= divn[i].innerHTML;
			temp	+=	"</div>";
		}

		divm.innerHTML	=	temp;
		t.value	=	parseInt(t.value)-1;
	}
}

