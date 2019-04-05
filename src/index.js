
let i=0;
document.getElementById("toggle").addEventListener("click", function(){
   
if(i==0){


    document.getElementById("menu").style.
     transform='scale(2)';
    //  document.getElementById("bar").style.
    //  transform='rotate(70deg)';
     i=1;
}else{

    document.getElementById("menu").style.
    transform='scale(0)';
    // document.getElementById("bar").style.
    // transform='rotate(35deg)';
    i=0;
}
  })

  document.getElementById("home").addEventListener("click", function(){
   
    document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="block";
    document.getElementById("section3").style.display="none";
    document.getElementById("section4").style.display="none";
    document.getElementById("section5").style.display="none";
})
  document.getElementById("user").addEventListener("click", function(){
   
    document.getElementById("section2").style.display="block";
    document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
    document.getElementById("section4").style.display="none";
    document.getElementById("section5").style.display="none";
})
 document.getElementById("habilidades").addEventListener("click", function(){

    document.getElementById("section3").style.display="block";
    document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    document.getElementById("section4").style.display="none";
    document.getElementById("section5").style.display="none";
  
})
document.getElementById("proyectos").addEventListener("click", function(){

    document.getElementById("section4").style.display="block";
    document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
    document.getElementById("section5").style.display="none";
})
document.getElementById("mail").addEventListener("click", function(){

    document.getElementById("section5").style.display="block";
    document.getElementById("section4").style.display="none";
    document.getElementById("section2").style.display="none";
    document.getElementById("section1").style.display="none";
    document.getElementById("section3").style.display="none";
})

let imagen=['lol1.png','vitrina2.png']
cont=0
function carousel(contenedor){

    contenedor.addEventListener('click', e=>{
    let atras=contenedor.querySelector('.atras');
   let  adelante=contenedor.querySelector('.adelante');
   let  img=contenedor.querySelector('#imagen1');
    let tgt=e.target;

    if(tgt===atras){
       if(cont>0){
           img.src=imagen[cont-1];
           cont--;

       }else{
        img.src=imagen[imagen.length-1];
        cont=imagen.length-1;
       }

    }else if(tgt===adelante){
        if(cont<imagen.length -1){
            img.src=imagen[cont+1];
            cont++;
 
        }else{
         img.src=imagen[0];
         cont=0;
        }
    }
    })
}

