function myfunc(){

alert("Hello, world!");
document.getElementById("inputText-1").style.fontSize="24pt";

}

function changing(){

    alert("You will be changing the text's style now");

}


function myfunctwo(){

document.getElementById("inputText-1").style.fontWeight="bold";
document.getElementById("inputText-1").style.color="blue";
document.getElementById("inputText-1").style.textDecoration="underline";
    
}

function myfuncthree(){

    document.getElementById("inputText-1").style.fontWeight="normal";
    document.getElementById("inputText-1").style.color="black";
    document.getElementById("inputText-1").style.textDecoration="none";
        
    }


function makeMoo(){

   const text = document.getElementById("inputText-1").value;
   const words = text.split(" ");
   const word = words.pop();

   const sentence = document.getElementById("inputText-1").value=`${words.join(" ")} ${word}-Moo`;
   document.getElementById("inputText-1").value=sentence.toUpperCase();




}