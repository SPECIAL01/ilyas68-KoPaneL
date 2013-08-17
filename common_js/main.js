function init_main(name,num){
	arr_admin		= new Array();
	arr_admin[0]	= new Array();
	arr_admin[0][0]	= name;
	arr_admin[0][1]	= num;

	for(i=0; i<arr_admin.length; i++)	{
		tmpEval= 'tmpArr = '+arr_admin[i][0]+'.split("||");'+'\n';
		tmpEval+='arr_'+arr_admin[i][0]+' = new Array();'+'\n';
		tmpEval+='for(tmpLoop=0; tmpLoop<tmpArr[0]; tmpLoop++)'+'\n';
		tmpEval+='{'+'\n';
		tmpEval+='	arr_'+arr_admin[i][0]+'[tmpLoop]		= new Array();'+'\n';

		for(j=0; j<arr_admin[i][1]; j++)
			tmpEval+='	arr_'+arr_admin[i][0]+'[tmpLoop]['+j+']	= tmpArr[tmpLoop*'+arr_admin[i][1]+'+'+(j+1)+'];'+'\n';

		tmpEval+='}'+'\n';
		//alert(tmpEval);
		eval(tmpEval);
	}
}

function WriteAll(type){
	var html	= "";
	var arr_tmp = "";
	var leng	= 0;
	var div		= "";
	var more	= "";

	init_main(type, 4);

	if(type == "knight_notice"){
		arr_tmp	= arr_knight_notice;
		leng	= arr_knight_notice.length;
		div		= document.getElementById("noticeList1");
		more	= "index.gcs";
	
	}else if(type == "knight_recent_notice"){
		arr_tmp = arr_knight_recent_notice;
		leng	= arr_knight_recent_notice.length;
		div		= document.getElementById("noticeList2");
		more	= "index.gcs?rtype=1";
	}else if(type == "knight_recent_update"){
		arr_tmp = arr_knight_recent_update;
		leng = arr_knight_recent_update.length;
		div		= document.getElementById("noticeList3");
		more	= "index.gcs?rtype=2";
	}else if(type == "knight_recent_event"){
		arr_tmp = arr_knight_recent_event;
		leng = arr_knight_recent_event.length;
		div		= document.getElementById("noticeList4");
		more	= "index.gcs?rtype=3";
	}

	if(arr_tmp.length > 6) {
		arr_tmp.length = 6;
	}

	var url="/news/index.gcs?rtype=1";
	var class_name="kind Announcement";
	try{
		if(arr_tmp.length == 0){
			html += '<li></li>';
		}
		for(i=0;i<arr_tmp.length;i++) {
			if(arr_tmp[i][3] == 1){
				class_name = "kind Announcement";
				url = "/news/index.gcs?rtype=1&idx="+arr_tmp[i][0];
			}else if(arr_tmp[i][3] == 2){
				class_name = "kind update";
				url = "/news/index.gcs?rtype=2&idx="+arr_tmp[i][0];
			}else if(arr_tmp[i][3] == 3){
				class_name = "kind event";
				url = "/news/index.gcs?rtype=3&idx="+arr_tmp[i][0];
			}

			html += "<li><a href=\""+url+"\" target=\"_top\"><span class=\""+class_name+"\"></span>&nbsp;"+arr_tmp[i][1]+"</a>";
			html += "<span class=\"date\">"+arr_tmp[i][2]+"</span></li>";
		}

	}catch(e){
		html += "";
		html += '<li>Loading...</li><li class="more"><a href="/news/"><img src="http://download.nttgame.com/knight/images/usko/main/btn_more_news_121011.gif" alt="MORE" /></a></li>';

	}
	html += '<li class="more"><a href="/news/'+more+'"><img src="http://download.nttgame.com/knight/images/usko/main/btn_more_news_121011.gif" alt="MORE" /></a></li>';

	div.innerHTML = html;

}


function WriteTotalScreenShot() 
{
	var total_knight_screen = knight_screenshot;
	var tmpArr = total_knight_screen.split("||");

	screen_array = new Array();
	for(tmploop=0; tmploop< tmpArr[0] ; tmploop++ ){
		screen_array[tmploop] = new Array();
		for(i =0 ; i< 5 ; i++){
			screen_array[tmploop][i] = tmpArr[tmploop*4+(i+1)];
		}
		document.write("<li><a href=\"community/index.gcs?rtype=2&idx="+screen_array[tmploop][0]+"\"><img src="+screen_array[tmploop][3]+" width=\"142\" height=\"88\" border=\"0\"></a></li>\n");

	}


}

function strCut(str, len){ 
	var returnStr = str;
	if (str.length > len)	{
		returnStr = returnStr.substr(0,len) + "..";
		//returnStr = returnStr.substr(0,len);
	}
	return returnStr;
}

function strCut_back(str, len){ 
	var returnStr =  str.substr(0,str.length-9);
	if (str.length > len)	{
		returnStr = returnStr.substr(len,str.length);
	}
	return returnStr;
}

function WriteRank(type, svr){

	var html	= "";
	var arr_tmp = "";
	var leng	= 0;
	var div		= "";
	var more	= "";
	var tmp_type ="";

	
	if(type == 1){
		if(svr == 1 ) {
			tmp_type = "r_rank_1";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_1;
			leng	= arr_r_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "r_rank_2";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_2;
			leng	= arr_r_rank_2.length;
		} else if(svr == 3){
			tmp_type = "r_rank_3";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_3;
			leng	= arr_r_rank_3.length;
		} else if(svr == 4){
			tmp_type = "r_rank_4";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_4;
			leng	= arr_r_rank_4.length;
		} else if(svr == 5){
			tmp_type = "r_rank_5";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_5;
			leng	= arr_r_rank_5.length;
		} else if(svr == 6){
			tmp_type = "r_rank_6";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_6;
			leng	= arr_r_rank_6.length;
		} else if(svr == 7){
			tmp_type = "r_rank_7";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_7;
			leng	= arr_r_rank_7.length;
		} else if(svr == 8){
			tmp_type = "r_rank_8";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_8;
			leng	= arr_r_rank_8.length;
		} else if(svr == 9){
			tmp_type = "r_rank_9";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_9;
			leng	= arr_r_rank_9.length;
		} else if(svr == 10){
			tmp_type = "r_rank_10";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_10;
			leng	= arr_r_rank_10.length;
		} else if(svr == 11){
			tmp_type = "r_rank_11";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_11;
			leng	= arr_r_rank_11.length;
		} else if(svr == 12){
			tmp_type = "r_rank_12";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_12;
			leng	= arr_r_rank_12.length;
		} else if(svr == 13){
			tmp_type = "r_rank_13";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_13;
			leng	= arr_r_rank_13.length;
		} else if(svr == 14){
			tmp_type = "r_rank_14";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_14;
			leng	= arr_r_rank_14.length;
		} else if(svr == 15){
			tmp_type = "r_rank_15";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_15;
			leng	= arr_r_rank_15.length;
		} else if(svr == 16){
			tmp_type = "r_rank_16";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_16;
			leng	= arr_r_rank_16.length;
		} else if(svr == 17){
			tmp_type = "r_rank_17";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_17;
			leng	= arr_r_rank_17.length;
		} else if(svr == 18){
			tmp_type = "r_rank_18";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_18;
			leng	= arr_r_rank_18.length;
		}
	}else if(type == 2){
		if(svr == 1 ) {
			tmp_type = "k_rank_1";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_1;
			leng	= arr_k_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "k_rank_2";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_2;
			leng	= arr_k_rank_2.length;
		} else if(svr == 3){
			tmp_type = "k_rank_3";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_3;
			leng	= arr_k_rank_3.length;
		} else if(svr == 4){
			tmp_type = "k_rank_4";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_4;
			leng	= arr_k_rank_4.length;
		} else if(svr == 5){
			tmp_type = "k_rank_5";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_5;
			leng	= arr_k_rank_5.length;
		} else if(svr == 6){
			tmp_type = "k_rank_6";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_6;
			leng	= arr_k_rank_6.length;
		} else if(svr == 7){
			tmp_type = "k_rank_7";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_7;
			leng	= arr_k_rank_7.length;
		} else if(svr == 8){
			tmp_type = "k_rank_8";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_8;
			leng	= arr_k_rank_8.length;
		} else if(svr == 9){
			tmp_type = "k_rank_9";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_9;
			leng	= arr_k_rank_9.length;
		} else if(svr == 10){
			tmp_type = "k_rank_10";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_10;
			leng	= arr_k_rank_10.length;
		} else if(svr == 11){
			tmp_type = "k_rank_11";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_11;
			leng	= arr_k_rank_11.length;
		} else if(svr == 12){
			tmp_type = "k_rank_12";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_12;
			leng	= arr_k_rank_12.length;
		} else if(svr == 13){
			tmp_type = "k_rank_13";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_13;
			leng	= arr_k_rank_13.length;
		} else if(svr == 14){
			tmp_type = "k_rank_14";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_14;
			leng	= arr_k_rank_14.length;
		} else if(svr == 15){
			tmp_type = "k_rank_15";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_15;
			leng	= arr_k_rank_15.length;
		} else if(svr == 16){
			tmp_type = "k_rank_16";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_16;
			leng	= arr_k_rank_16.length;
		} else if(svr == 17){
			tmp_type = "k_rank_17";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_17;
			leng	= arr_k_rank_17.length;
		} else if(svr == 18){
			tmp_type = "k_rank_18";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_18;
			leng	= arr_k_rank_18.length;
		}
	}else if(type == 3){
		if(svr == 1 ) {
			tmp_type = "c_rank_1";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_1;
			leng	= arr_c_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "c_rank_2";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_2;
			leng	= arr_c_rank_2.length;
		} else if(svr == 3){
			tmp_type = "c_rank_3";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_3;
			leng	= arr_c_rank_3.length;
		} else if(svr == 4){
			tmp_type = "c_rank_4";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_4;
			leng	= arr_c_rank_4.length;
		} else if(svr == 5){
			tmp_type = "c_rank_5";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_5;
			leng	= arr_c_rank_5.length;
		} else if(svr == 6){
			tmp_type = "c_rank_6";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_6;
			leng	= arr_c_rank_6.length;
		} else if(svr == 7){
			tmp_type = "c_rank_7";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_7;
			leng	= arr_c_rank_7.length;
		} else if(svr == 8){
			tmp_type = "c_rank_8";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_8;
			leng	= arr_c_rank_8.length;
		} else if(svr == 9){
			tmp_type = "c_rank_9";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_9;
			leng	= arr_c_rank_9.length;
		} else if(svr == 10){
			tmp_type = "c_rank_10";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_10;
			leng	= arr_c_rank_10.length;
		} else if(svr == 11){
			tmp_type = "c_rank_11";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_11;
			leng	= arr_c_rank_11.length;
		} else if(svr == 12){
			tmp_type = "c_rank_12";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_12;
			leng	= arr_c_rank_12.length;
		} else if(svr == 13){
			tmp_type = "c_rank_13";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_13;
			leng	= arr_c_rank_13.length;
		} else if(svr == 14){
			tmp_type = "c_rank_14";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_14;
			leng	= arr_c_rank_14.length;
		} else if(svr == 15){
			tmp_type = "c_rank_15";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_15;
			leng	= arr_c_rank_15.length;
		} else if(svr == 16){
			tmp_type = "c_rank_16";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_16;
			leng	= arr_c_rank_16.length;
		} else if(svr == 17){
			tmp_type = "c_rank_17";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_17;
			leng	= arr_c_rank_17.length;
		} else if(svr == 18){
			tmp_type = "c_rank_18";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_18;
			leng	= arr_c_rank_18.length;
		}
	}else if(type == 4){
		if(svr == 1 ) {
			tmp_type = "h_rank_1";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_1;
			leng	= arr_h_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "h_rank_2";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_2;
			leng	= arr_h_rank_2.length;
		} else if(svr == 3){
			tmp_type = "h_rank_3";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_3;
			leng	= arr_h_rank_3.length;
		} else if(svr == 4){
			tmp_type = "h_rank_4";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_4;
			leng	= arr_h_rank_4.length;
		} else if(svr == 5){
			tmp_type = "h_rank_5";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_5;
			leng	= arr_h_rank_5.length;
		} else if(svr == 6){
			tmp_type = "h_rank_6";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_6;
			leng	= arr_h_rank_6.length;
		} else if(svr == 7){
			tmp_type = "h_rank_7";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_7;
			leng	= arr_h_rank_7.length;
		} else if(svr == 8){
			tmp_type = "h_rank_8";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_8;
			leng	= arr_h_rank_8.length;
		} else if(svr == 9){
			tmp_type = "h_rank_9";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_9;
			leng	= arr_h_rank_9.length;
		} else if(svr == 10){
			tmp_type = "h_rank_10";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_10;
			leng	= arr_h_rank_10.length;
		} else if(svr == 11){
			tmp_type = "h_rank_11";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_11;
			leng	= arr_h_rank_11.length;
		} else if(svr == 12){
			tmp_type = "h_rank_12";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_12;
			leng	= arr_h_rank_12.length;
		} else if(svr == 13){
			tmp_type = "h_rank_13";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_13;
			leng	= arr_h_rank_13.length;
		} else if(svr == 14){
			tmp_type = "h_rank_14";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_14;
			leng	= arr_h_rank_14.length;
		} else if(svr == 15){
			tmp_type = "h_rank_15";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_15;
			leng	= arr_h_rank_15.length;
		} else if(svr == 16){
			tmp_type = "h_rank_16";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_16;
			leng	= arr_h_rank_16.length;
		} else if(svr == 17){
			tmp_type = "h_rank_17";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_17;
			leng	= arr_h_rank_17.length;
		} else if(svr == 18){
			tmp_type = "h_rank_18";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_18;
			leng	= arr_h_rank_18.length;
		}
	}
	div		= document.getElementById("rank_list");

	if(type ==4 ){

		var j=1;

		try{
			if(arr_tmp.length == 0){
				html += '';
			}

			html += '		<div id="rank_title">';
			html += '			<img alt="Karus" src="http://download.nttgame.com/knight/images/usko/main/th_karus_121011.gif" /><img alt="El morad" src="http://download.nttgame.com/knight/images/usko/main/th_elmorad_121011.gif" />';
			html += '		</div>';

			html += '		<div id="rank_title2">';
			html += '			<li class="ranktd_a">Character</li><li class="ranktd_b">Achievements</li><li class="ranktd_c">Character</li><li class="ranktd_d">Achievements</li>';
			html += '		</div>';

			html += '		<div class="rankwar">';
			//karus, elmorad count re-count
			var total_cnt = arr_tmp.length;
			var karu_cnt = 0;
			var elmo_cnt = 0;
			for(i = 0;i < total_cnt; i++){

				if(arr_tmp[i][3] == "Karus"){
					karu_cnt++;
				} else if(arr_tmp[i][3] == "Elmorad"){
					elmo_cnt++;
				}
			}

			for(i=0;i<arr_tmp.length;i++) {
				if(arr_tmp[i][3] == "Karus"){
					if(i==0){
						html += '			<div id="rank_karuslist">';
					}

					html += '				<li class="rank_li"><span class="rank_character">'+arr_tmp[i][2]+'</span><span class="rank_achievements">'+arr_tmp[i][4]+'</span></li>';

					if(i == karu_cnt -1 ){
						html += '		</div>';
					}
				}
			}

			for(i=0;i<arr_tmp.length;i++) {
				if(arr_tmp[i][3] == "Elmorad"){
					if(i == karu_cnt ){
						html += '			<div id="rank_elmoradlist">';
					}

					html += '				<li class="rank_li"><span class="rank_character">'+arr_tmp[i][2]+'</span><span class="rank_achievements">'+arr_tmp[i][4]+'</span></li>';

					if(i ==total_cnt -1){
						html += '		</div>';
					}

				}
			}

			html += '		</div>';

		}catch(e){
			html += "";
			html += '		<table class="tableRank">';
			html += '			<tr>';
			html += '				<th scope="col"><img src="http://download.nttgame.com/knight/images/usko/main/th_karus_121011.gif" alt="Karus" /></th>';
			html += '				<th scope="col"><img src="http://download.nttgame.com/knight/images/usko/main/th_elmorad_121011.gif" alt="El morad" /></th>';
			html += '			</tr>';
			//html += '			<tr><td colspan="2">Loading...</td></tr>';
			html += '		</table>';

		}

	} else {
		if(arr_tmp.length > 5) {
			arr_tmp.length = 5;
		}

		var j=1;

		try{
			if(arr_tmp.length == 0){
				html += '';
			}
			html += '		<table class="tableRank">';
			html += '			<tr>';
			html += '				<th scope="col"><img src="http://download.nttgame.com/knight/images/usko/main/th_karus_121011.gif" alt="Karus" /></th>';
			html += '				<th scope="col"><img src="http://download.nttgame.com/knight/images/usko/main/th_elmorad_121011.gif" alt="El morad" /></th>';
			html += '			</tr>';

			for(i=0;i<arr_tmp.length;i++) {
				j =i+1;
				html += "<tr>";

				html += "	<td><span class='num num"+j+"'>"+arr_tmp[i][3]+"</span></td>";
				html += "	<td><span class='num num"+j+" numEl'>"+arr_tmp[i][2]+"</span></td>";

				html += "</tr>";

			}
			html += '</table>';

		}catch(e){
			html += "";
			html += '		<table class="tableRank">';
			html += '			<tr>';
			html += '				<th scope="col"><img src="http://download.nttgame.com/knight/images/usko/main/th_karus_121011.gif" alt="Karus" /></th>';
			html += '				<th scope="col"><img src="http://download.nttgame.com/knight/images/usko/main/th_elmorad_121011.gif" alt="El morad" /></th>';
			html += '			</tr>';
			//html += '			<tr><td colspan="2">Loading...</td></tr>';
			html += '		</table>';

		}

	}

	div.innerHTML = html;
	//alert(div.innerHTML);
}
