var student=["Shreya","Pooja"];



function addStudent(){
    var newstd=document.getElementById("t1").value;
    student.push(newstd);
    document.getElementById("p1").innerHTML="Added Successfully!!!";
}

function displayStd(){
    document.getElementById("p1").innerHTML=student;
}