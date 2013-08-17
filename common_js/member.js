
function checkSpace(theFieldSpace) {
	var Spacecount = 0;
	var foundSpace = true;

	for (var i = 0;i<theFieldSpace.length; i++) {
		var ch = theFieldSpace.substring(i,i+1)
		if (ch == " ") Spacecount = Spacecount + 1;
	}
	if (Spacecount != 0)
	foundSpace = false;
	return foundSpace;
}


function count_Special(theFieldSpecial) {
	var Special_count = 0;

	for (var i = 0;i<theFieldSpecial.length; i++) {
		var ch = theFieldSpecial.substring(i,i+1)
		if(/[^a-z0-9_¤¡-¤¾°¡-ÆR¤¿-¤ü]/i.test(ch)){
			Special_count = Special_count + 1;
		}
	}
	return Special_count;
}


function count_Numeric(theFieldSpecial) {
	var Numeric_count = 0;

	for (var i = 0;i<theFieldSpecial.length; i++) {
		var ch = theFieldSpecial.substring(i,i+1);
		if(checkNumberFormat(ch) ){
			Numeric_count = Numeric_count + 1;
		}
	}
	return Numeric_count;
}

function checkNumberFormat(num) {
	for(i=0;i<num.length;i++)
	if(num.charAt(i) != '-') {
		if (num.charAt(i)<'0' || num.charAt(i)>'9') {
			return false;
		}
	}
	return true;
}

function count_English( theFieldSpecial ) { 
	var english_count = 0;
	for( var i=0; i < theFieldSpecial.length;i++){
		var c=theFieldSpecial.charCodeAt(i);
		if( !( (  0x61 <= c && c <= 0x7A ) || ( 0x41 <= c && c <= 0x5A ) ) ) {

		}else {
			english_count = english_count + 1;
		}
	}
	return english_count ;
}

function count_Alpabet(theFieldSpecial) {
	var Alpabet_count = 0;

	for (var i = 0;i<theFieldSpecial.length; i++) {
		var ch = theFieldSpecial.substring(i,i+1)
		if(/[^a-z]/i.test(ch)){
			Alpabet_count = Alpabet_count + 1;
		}
	}
	return Alpabet_count;
}


function isValidEmail(theField) {
	var dotcount = 0;
	var doubledotcount = 0;
	var Atcount = 0;
	var invaliddotcount = 0;
	var foundSymbol = true;

	for (var i = 0;i<theField.length; i++) {
		var ch = theField.substring(i,i+1)
		if (ch == "@")
			Atcount = Atcount + 1;
		if (ch == ".") {
			dotcount = dotcount + 1;
			if (theField.substring(i+1,i+2) == ".")
				doubledotcount = doubledotcount +1;
		}
	}
	for (var j = 0;j<theField.length; j++) {
		var ch2 = theField.substring(j,j+1)
		if (ch2 == ",")
		invaliddotcount = invaliddotcount + 1;
	}
	if ((Atcount != 1) || (dotcount < 1) || (doubledotcount > 0) || (invaliddotcount != 0))
	foundSymbol = false;
	return foundSymbol;
}
