document.getElementById("btn").addEventListener("click",myPassword);
function myPassword()
{

let str = "abcdefghijklmonopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*+-";
let strLength = str.length;
let mypass="";

for (var i=0;i<=7;i++)
{
    var strind=Math.floor(Math.random()*strLength);
    mypass+=str.charAt(strind);
}
document.getElementById("demo").innerHTML=mypass;

} 
