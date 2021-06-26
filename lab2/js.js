// JavaScript Document

//функция возвращяет месяц на русском языке 
function transformDAte (date){
	var arr = new Array();
	arr = date.split(" ");
	
	switch (arr[1]){
		case "Jan": return "Января"; break;
			case "Feb": return "Февраля"; break;
			case "Mar": return "Марта"; break;
			case "Apr": return "Апреля"; break;
			case "May": return "Мая"; break;
			case "Jun": return "Июня"; break;
			case "Jul": return "Июля"; break;
			case "Aug": return "Августа"; break;
			case "Sept": return "Сентября"; break;
			case "Oct": return "Октября"; break;
			case "Nov": return "Ноября"; break;
			case "Dec": return "Декабря"; break;
			
		default:return "Errore"; break;
				  }
}
//функция, которая возвращает произведение a=[0,50] и b=[0,50]
function multiply(){
	let a  = Math.floor(Math.random() * (50 - 0) + 0);
	let b  = Math.floor(Math.random() * (50 - 0) + 0);
	 return a*b;
}


/*
Три способа создания массива
*/
let array1 = new Array();
let array2 = [2,9,7,4,6,12];
let array3 = [];
let array4 = [88,99,77,22,33];
alert("array2[5] = "+ array2[5]);
array2[5]=144;
alert("array2[5] = "+ array2[5]);
alert("array2.length = "+array2.length);
for(var i = 0; i<array2.length;i++){
	document.write(array2[i]+" ");
}
document.write("<br><br><br>");

array3= array2.concat(array4);
document.write(" array2.concat(array4): ");
for(var i = 0; i<array3.length;i++){
	document.write(array3[i]+" ");
}
delete array3[array3.length-1];
document.write("<br><br><br>");
document.write("The last element of the array3 after deletion: "+array3[array3.length-1]+" ");
array3.unshift(155);
document.write("<br><br><br>");
document.write("The first element of the array3 after adding: "+array3[0]);
let now = new Date();
alert(now);

alert(now.toDateString());
alert(now.getDay()+" "+transformDAte(now.toDateString())+ " "+now.getFullYear()+" года");
alert (multiply());
