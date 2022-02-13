
var palabras_secretas =  ['ALURA','CSS','HTML','ORACLE','JAVASCRIPT','CODIGO','CHALLENGUE'];//PALABRAS AGREGADAS
var  longitudPalabras=palabras_secretas.length //LONGITUD PALABRAS
var numeroAleatorio  = Math.floor(Math.random() *longitudPalabras ); //numero aleatorio 
var palabraAdivinar=palabras_secretas[numeroAleatorio] // LA PALABRA A ADIVINAR
var palabra_separada=  palabraAdivinar.split('')
var turno= 1; // TURNO
var intentos = 8;//INTENTOS
var vista_palabra=[];
var  letras_usuario =[];
var  historial_letras = [];


console.log(palabra_separada);


var resultado = document.querySelector('#resultado');  
valor=palabra_separada.length;


for (var letra of palabra_separada) { 
    
    vista_palabra .push('-');
};

resultado.textContent = vista_palabra.join(' ');


var  botonComprobar =document.querySelector('#letra');
botonComprobar.addEventListener('keyup',(e) =>{
    
    if (e.key === 'Enter') {
        var letra_input = document.querySelector('#letra');

        var valor_letra_input=letra_input.value;

        var longitudPalabra = palabra_separada.length;
        
        letra_input.value = "";
        letra_input.focus();

        console.log(palabra_separada)
        
        var  esNumero = (isNaN( valor_letra_input)); 

        if(valor_letra_input.length==0){ // si el campo está vacio
            swal("ERROR", "NO SE PERMITE CAMPO VACIO");
            /*alert('NO SE PERMITE CAMPO VACIO'); */
        }
        
        //condicionar  para que  no se  permita ingresar  numero
        else if    (!esNumero){
            /*alert("NO SE PERMITEN NUMEROS ");*/
            swal("ERROR", "No se  permiten numeros", "warning");
        }

        else{
            
            if ((valor_letra_input==valor_letra_input.toUpperCase())){

                for  (var  i =0; i<longitudPalabra;i++){
                    var letra=palabra_separada[i];
            
                    if (valor_letra_input == letra) {
                        var indices = []; 
                        var elemento = letra;
                        var idx=palabra_separada.indexOf(elemento)
                        
                        while (idx != -1) {
                            indices.push(idx);
                            idx = palabra_separada.indexOf(elemento, idx + 1);
                            vista_palabra[indices] = letra;
                            
                            for (var indice in indices){
                                vista_palabra[indices[indice]] = letra
                            }
            
                            vista_palabra[indices] = letra;
                            resultado.textContent = vista_palabra.join(' ');
                            
                        }
                    }
        
                }
            }
        
            else{
                /*alert('NO SE PERMITEN MINUSCULAS');*/
                swal("ERROR", "NO SE PERMITEN MINUSCULAS", "warning");
            }
        
            
            if ((valor_letra_input==valor_letra_input.toUpperCase())){
        
                if (!palabraAdivinar.includes(valor_letra_input)) {

                    if(historial_letras.length==0){ 
                        intentos-=1;
                        historial_letras.push(valor_letra_input);
                    
                        
                    }
                    else{
                        var letraRepetida=historial_letras.indexOf(valor_letra_input); //devuelve -1 si ya está en el array
                        
                        if (letraRepetida==-1){
                        historial_letras.push(valor_letra_input);//añade  las palabras a  un arry
                        intentos-=1;
                        }
                        
                        else{
                            /*alert('PALABRA YA INGRESADA ');*/
                            swal("PALABRA YA INGRESADA");
                            }
                    
                    }

                    var historial_letras_html =document.querySelector('#historial');
                    
                    historial_letras_html.textContent=historial_letras.join(' ');
                
                }
                
            }
        

        }
        
        
        var guiones=vista_palabra.indexOf('-'); 
        
        if (guiones==-1) {
            
            var mensaje_ganador= document.querySelector('.mensaje_ganar');
            /*alert('Has ganado!!!');*/
            swal("FELICIDADES", "ADIVINASTE LA PALABRA", "success");
            /*mensaje_ganador.textContent= '!!FELICIDADES!! \n  Adivinaste la  palabra';*/

            botonComprobar.disabled = true; //DESABILITA EL BOTON

            document.getElementById('#btn-recargar').style.display = '';
        
        }
    
    }
    

    // dibujando mediente intentos
    canvas(intentos,palabraAdivinar);

})

//llamar metodo canva --> lazo y cuerpo
in_ahorcado();

//reiniciar juego
var botnReiniciar=document.querySelector('#reiniciar');
botnReiniciar.addEventListener('click', function(event){

    location.reload();
});
