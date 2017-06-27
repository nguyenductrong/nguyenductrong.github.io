
var numberDayOfMonth = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var d = new Date();
var dateCheck = d.getDate();
var monthCheck = d.getMonth();
var yearCheck = d.getFullYear();

var positionDayOne = 0;
var results = "";
var positionDateNow;

function setValueInput(){
	results = dateCheck + "/" (monthCheck + 1) + "/" + yearCheck;
	document.getElementById("output").value = results;
	
}

/*
   create: container-calendar
*/
function show(){
	document.write("<DIV ID='calendar-container' >")
	document.write("<FORM>");
	document.write("<TABLE ID='calendar-table'>");
	this.rowAction();
	this.showWeekDays();
	this.displayCalendar(monthCheck,yearCheck);	
	document.write("</TABLE>");
	document.write("</FORM>");
	document.write("</DIV>");
	
}
/*
  creat:   button: previous year, previous month, next year, next month;
         combobox:  year, month;

*/
function rowAction(){
	document.write("<TR ID='rowAction'>");
	document.write("<TD class='btnClick' onClick= 'btnPreviousYear()'><a NAME='btnPreviousYear'>&#8647;</a></TD>");
	document.write("<TD class='btnClick' onClick= 'btnPreviousMonth()'><a NAME='btnPreviousMonth'>&larr;</a></TD>");
	document.write("<TD class='btnClick' colspan='2'><SELECT ID='months' onChange='changeMonth();'>");
	for(var i =0; i<month_name.length; i ++){
		document.write("<OPTION VALUE = ' " + i + " '>" +month_name[i]+"</OPTION>");
		
	}
	document.write("</SELECT></TD>");
	document.write("<TD class='btnClick' colspan='1'><SELECT ID='years' onChange='changeYear();'>");
	for(var i =1900; i <= 2025; i ++){
		document.write("<OPTION VALUE = ' " + i + " '>" +i+"</OPTION>");
		
	}
	document.write("</SELECT></TD>");
	
	document.write("<TD class='btnClick' onClick= 'btnNextYear()'><a NAME='btnNextYear'>&rarr;</a></TD>");
	document.write("<TD class='btnClick' onClick= 'btnNextMonth()'><a NAME='btnNextMonth'>&#8649;</a></TD>");
	document.write("/TR");	
}


function showWeekDays(){
	document.write("<TR ID='titleDay'>");
	for( var i = 0; i <= day_name.length; i ++){
		document.write("<TD>" + day_name[i] + "</TD>");	
	}
	document.write("</TR>");
	
}

function displayCalendar(month,year){
	var count = 1;
	for(var i = 0; i < 6; i++){
		document.write("<TR>");
		for( var j = 0; j< 7; j++){
			document.write("<TD ID='itemDay "+ count + "' CLASS='item' onClick='checkDay("+ count +");'/></TD>");
			count++;
		}
		document.write("</TR>");
	}
	setData();
	setMonths();
	setYears();
	
}

/*
 clear calendar 
*/
function deleteCalendaOfValue(){
	for(var i = 1; i <= 42; i++ ){
		document.getElementById("item" + i).innerHTML = "";
		document.getElementById("item" + i).style.background = "none";
		
	}
	
}

function setData(){
	var d = new Date();
	var day_now =  d.getDate();
	var month_now = d.getMonth();
	var year_now = d.getFullYear();
	var day = new Date(yearCheck,monthCheck,1).getDay();
	document.write(day);
	positionDayOne = parseInt(day);
	
	var preMonth = monthCheck - 1;
	var nexMonth = monthCheck + 1;
	
	if(((yearCheck % 4 == 0) && (yearCheck % 100 != 0)) || (yearCheck % 400 == 0)){
		numberDayOfMonth[1] = 29 ;
			
	}else{
		numberDayOfMonth[1] = 28 ;
	}
	if(preMonth < 0){
		preMonth = 11;
	}
	if(nexMonth == 12){
		nexMonth = 0;
	}
	var numberDay = numberDayOfMonth[monthCheck];
	var numberDayOfPreviousMonth = numberDayOfMonth[preMonth];
	var numberDayOfNextMonth = numberDayOfMonth[nexMonth];
	
	var position = 1;
	var count = 1;
	var check = false;
	var positionStar = day;
	var positinStop = (parseInt(numberDay) + parseInt(day));
	
	// value item 
	for(var i =0; i < 6; i++){
		for(var j = 0; j < 7; j ++){
			if(count >= day){
				check = true;
			}
			if(check == true && position <= numberDay){
				document.getElementById("item" + (position + day)).innerHTML = position;
				document.getElementById("item" (position + day)).style.background = "#FBFCFC";
				if(day_now == position && month_now == monthCheck && year_now == yearCheck){
					document.getElementById("item" + (position + day)).style.background = "#00ace6";
					positionDateNow = "item" + (position + day);
					
				}
				document.getElementById("item" + (position + day)).style.color = "#0000";
			    position ++;
			}
			count ++;
		}					
	}
	
	for(var i = positionStar; i > 0; i --){
		document.getElementById("item" +(i)).innerHTML = numberDayOfPreviousMonth --;
		document.getElementById("item" +(i)).style.color = "#ffffff";
	}
	for(var j = 1; j <= (42 - positinStop); j ++){
		document.getElementById("item" + ( j + positinStop )).innerHTML = j;
		documnent.getElementById("item" + (j + positinStop)).style.color = "#ffffff";
		
	}
	
}

function checkDay(position){
	var previous_month = monthCheck;
	var month_now = monthCheck + 1;
	var next_month = monthCheck + 2
	var year = yearCheck;
	var day = document.getElementById("item" + position).innerHTML;

	if (previous_month == 0) {
		previous_month = 12;
	}

	if (next_month == 13) {
		next_month = 1;
	}

	if (parseInt(day) > position) {
		if(previous_month == 12) {
			year--;
		}
		var results = day + "/" + previous_month + "/" + year;
	} else if (parseInt(day) < (position - positionDayOne)) {
		if(next_month == 1) {
			year++;
		}
		var results = day + "/" + next_month + "/" + year;
	} else {
		var results = day + "/" + month_now + "/" + year;
	}

	document.getElementById("output").value = results;
}


function changeMonth() {
	deleteCalendaOfValue();
	monthCheck = document.getElementById("months").value;
	console.log(monthCheck);
	setData();
	}

function setMonths() {
	document.getElementById("months").value = monthCheck;
}

function setYears() {
	document.getElementById("years").value = yearCheck;
}

function changeYear() {
	deleteCalendaOfValue();
	yearCheck = document.getElementById("years").value;
	console.log(monthCheck);
	setData();
}

/*
	create event for button previous month
	*/
function btnPreviousMonthClick() {
	deleteCalendaOfValue();
	monthCheck = monthCheck - 1;
	if (monthCheck < 0) {
		monthCheck = 11;
			
	}
	console.log(monthCheck);
	setData();
	setMonths();
	setYears();
	}

/*
	create event for button next month
	*/
function btnNextMonthClick() {
	deleteCalendaOfValue();
	monthCheck = monthCheck + 1;
	if (monthCheck > 11) {
		monthCheck = 0;
			
	}
	console.log(monthCheck);
	setData();
	setMonths();
	setYears();
	}

/*
	create event for button previous year
	*/
function btnPreviousYearClick() {
    deleteCalendaOfValue();
	yearCheck = yearCheck - 1;
	console.log(monthCheck);
	setData();
	setMonths();
	setYears();
	}

/*
	create event for button next year
	*/
function btnNextYearClick() {
	deleteCalendaOfValue();
	yearCheck = yearCheck + 1;
	console.log(monthCheck);
	setData();
	setMonths();
	setYears();
}

function setItem(item, value) {
	var item = document.getElementById(item);
	item.innerHTML = value;
}

function cancelCalendar() {
	document.getElementById("calendar").style.display = "none";
}

function openCalendar() {
	document.getElementById("calendar").style.display = "block";
}
