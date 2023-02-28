function calculateAge()
{
    var year = document.getElementById('ageInput').value;
    var age = 2021 - year;
    document.getElementById('ageId').innerHTML="Your age is <span id='age'>"+(age)+"</span>";
    if(age<18)
    {
        document.getElementById("ageText").innerHTML="You are kid"
    }
    else
    {
        document.getElementById("ageText").innerHTML="You are Young"
    }
    var cartona='';
for(var i =0 ; i < age ; i++)
{
    cartona += "*";
}
document.getElementById('line').innerHTML=cartona;
}












// function calculateAge()
// {

//    var year= document.getElementById('ageInput').value;
//    document.body.style.backgroundImage = "url('https://www.w3schools.com/')";

//    var age=2020-year;
//     document.getElementById('ageId').innerHTML="Your Age Is <span id='age'>"+(age)+"</span>";
//     if(age<20)
// {
//     document.getElementById('ageText').innerHTML="You are kid";
// }else 
// {
//     document.getElementById('ageText').innerHTML="You are young";

// }
// var line="";
// for(var i=0;i<age;i++)
// {
//     line+="*";
    
// }
// document.getElementById('line').innerHTML=line;
// }




