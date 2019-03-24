

let i=0;
document.getElementById("toggle").addEventListener("click", function(){
   
if(i==0){


    document.getElementById("menu").style.
     transform='scale(2)';
     document.getElementById("bar").style.
     transform='rotate(70deg)';
     i=1;
}else{

    document.getElementById("menu").style.
    transform='scale(0)';
    document.getElementById("bar").style.
    transform='rotate(35deg)';
    i=0;
}
  })

  document.getElementById("home").addEventListener("click", function(){
   
   alert("holaaa soy verioska")
      })

