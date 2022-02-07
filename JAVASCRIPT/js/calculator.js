
//clear the screen
function clearScreen(){
    document.getElementById("result").value="";
}

//display the value
function display(value){
    document.getElementById("result").value+=value;
}

//evaluate the mathematical expression
function calculate(){
    var a=document.getElementById("result").value;
    var b=eval(a);
    document.getElementById("result").value=b;
}

//change the mode to scientific from standard
function scientific(){
    var a=document.getElementById("button1");
    if(a.style.visibility === 'hidden'){
        a.style.visibility = 'visible';
    }
    else{
         a.style.visibility = 'hidden';
    }
    
    var b=document.getElementById("button2");
    if(b.style.visibility === 'hidden'){
        b.style.visibility = 'visible';
    }
    else{
         b.style.visibility = 'hidden';
    }
     var c=document.getElementById("button3");
     if(c.style.visibility === 'hidden'){
         c.style.visibility = 'visible';
     }
    else{
         c.style.visibility = 'hidden';
    }
     var d=document.getElementById("button4");
     if(d.style.visibility === 'hidden'){
         d.style.visibility = 'visible';
     }
    else{
         d.style.visibility = 'hidden';
    }
}