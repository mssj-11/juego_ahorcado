function in_ahorcado(){
      var canvas = document.getElementById('ahorcado');
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = "#000";
      ctx.moveTo(10,250);
      ctx.lineTo(100, 250);
      ctx.stroke();
      ctx.moveTo(50, 250);
      ctx.lineTo(50, 1);
      ctx.stroke();
      ctx.moveTo(50, 1);
      ctx.lineTo(200, 1);
      ctx.stroke();
      ctx.moveTo(200, 50);
      ctx.lineTo(200, 1);
      ctx.stroke();
}

function canvas (intentos,palabraAdivinar){
      console.log(palabraAdivinar);
      var canvas = document.getElementById('ahorcado');
      var ctx = canvas.getContext('2d');
      
      if (intentos== 6){//AGREGAR CABEZA
            ctx.beginPath();
            ctx.arc(200, 70, 20.4, 0, Math.PI * 2, false);
            ctx.stroke();
      }
      if (intentos== 5){//AGREGAR CUERPO
            ctx.moveTo(200, 90);
            ctx.lineTo(200, 150);
            ctx.stroke();
      }
      if (intentos== 4){//AGREGAR PIE DERECHO
            ctx.moveTo(238, 190);
            ctx.lineTo(200, 150);
            ctx.stroke();
      }
      if (intentos== 3){//AGREGAR PIE IZQUIERDO
            ctx.moveTo(200, 150);
            ctx.lineTo(160, 190);   
            ctx.stroke();      
      }
      if (intentos== 2){//AGREGAR MANO IZQUIERDA
            ctx.moveTo(200, 100);
            ctx.lineTo(140, 160);
            ctx.stroke();
      }
      if (intentos== 1){//AGREGAR MANO DERECHA 
            ctx.moveTo(200, 100);
            ctx.lineTo(250, 160);
            ctx.stroke();
            botonComprobar.disabled = true;

            
            setTimeout(function(){
                  var mensaje_perder= document.querySelector('.mensaje_perder');
                  mensaje_perder.textContent= 'FIN DEL JUEGO :('
                  /*alert("Has perdido \n La  palabra  correcta era " + palabraAdivinar); */
                  swal("HAS PERDIDO", "La  palabra  correcta era:  " + palabraAdivinar, "error")
            },1000);
      }

}

