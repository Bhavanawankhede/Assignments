function calculate(){
    var p=document.getElementById("p").value;
    var r=document.getElementById("r").value;
    var n=document.getElementById("n").value;

    var result=((r*(1+(r/100)*n))-p);
    document.getElementById("p1").innerHTML=result;
}