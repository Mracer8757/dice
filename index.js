var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;

var randomdicepic1="images/dice" + randomnumber1 + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomdicepic1);



var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;

var randomdicepic2="images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomdicepic2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Win";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Win 🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}




