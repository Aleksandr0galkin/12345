// JavaScript Document
var d;
d= alert("Hello!");
d =parseFloat(d);
if (typeof(d)== "number")
	document.write("  It's a Number");
else if (typeof(d)== "string")
	document.write("  It's a String");
else document.write("It's undefined type");
d= alert("Want to continue?");
d = prompt("Enter your zodiac sign.");
document.writeln("<br/><br/><br/>");
switch(d){
	case "Скорпион": document.writeln("Hello, Scorpion");break;
		case"Водолей": document.writeln("Hello, Aquarius"); break;
		case"Овен": document.writeln("Hello, Aries"); break;
		case"Телец": document.writeln("Hello, Taurus"); break;
		case"Близнецы": document.writeln("Hello, Gemini"); break;
		case"Рак": document.writeln("Hello, Cancer"); break;
		case"Лев": document.writeln("Hello, Leo"); break;
		case"Дева": document.writeln("Hello, Virgo"); break;
		case"Весы": document.writeln("Hello, Libra"); break;
		case"Стрелец": document.writeln("Hello, Sagittarius"); break;
		case"Козерог": document.writeln("Hello, Capricorn"); break;
		case"Рыбы": document.writeln("Hello, Pisces"); break;
	default: document.writeln("Zodiac sign not found"); break;
		}
document.writeln("<br/><br/><br/>");
document.writeln("<br/>for<br/>");
var i;
for(i =1; i <41;i ++)
	document.writeln(i+" ");

document.writeln("<br/>while<br/>");
i=1;
while(i<41){
	document.writeln(i+" ");
	i++;
}

document.writeln("<br/>do while<br/>");
i=1;
do {
	document.writeln(i+" ");
	i++;
}
while(i<41);
document.writeln("<br/><br/><br/>");
d= prompt("Введите число, которое больше 5", 100);
while(d<=5 && d!=null)
	d= prompt("Введите число, которое больше 5",100);
if (d== null){
	d=alert("is null");
}
else
d=alert("Congratulations!");
document.writeln("<br/><br/><br/>");
for(var k = 8; k<21; k+=2){
	document.write(k+" ");
}
document.writeln("<br/><br/><br/>");
for(var k = 1; k<8; k++){
	if(k!=5)
	document.write(k+" ");
}