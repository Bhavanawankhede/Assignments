
var currDate=new Date();

document.write(currDate+"<br>");

var time= currDate.getHours();

if(time<=12){
    document.write("Good Morning");
}
else if(time>=12 && time<=17){
    document.write("Good Afternoon");
}
else{
    document.write("Good Evening");
}