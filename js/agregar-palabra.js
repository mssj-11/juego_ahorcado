//validar  y  enviar  mensaje
var mensajes =[];
var correcto=false;
//palabras
var palabras_secretas =  ['CODIGO','PAGINA','GITHUB','ORACLE','PRUEBA','DEVOPS','PYTHON','VISUAL'];
var botonAgregar=document.querySelector('#agregar-palabra');


botonAgregar.addEventListener('click', function(event){

    var input_agregar= document.querySelector('#input-nueva-palabra');
    var palabra_agregar = input_agregar.value;

    input_agregar.value = "";
    input_agregar.focus();

    
    if(palabra_agregar.length==0){ 
        correcto=false;
        /*mensajes.push('El campo no debe de estár vacio');*/ // ingresarle  valores  al arry
        swal("ERROR", "El campo no debe de estár vacio");
        mostrarMensajes(mensajes,correcto);
        
    }
    
    else if  (!isNaN(palabra_agregar)){

        /*alert(" ERROR \n No se  permiten numeros ");*/
        swal("ERROR", "No se  permiten numeros", "warning");

    }
    else{

        if (palabra_agregar.length<3 && palabra_agregar.length>0){ 
            /*alert('LA PALABRA ES DEMASIADO CORTA');*/
            swal("ERROR", "LA PALABRA ES DEMASIADO CORTA", "warning");
            
        }
        

        if ((palabra_agregar==palabra_agregar.toLowerCase()) && (palabra_agregar.length>=3)){ 
                /*alert('NO SE ACEPTAN PALABRAS EN MINUSCULA');*/
                swal("ERROR", "NO SE ACEPTAN PALABRAS EN MINUSCULA");
        }

        if  (palabra_agregar==palabra_agregar.toUpperCase() && palabra_agregar.length>2 )   {
            
            palabras_secretas.push(palabra_agregar);
            /*alert('Palabra Agregada Con Exito ');*/
            correcto=true;
            mostrarMensajes(mensajes,correcto);
            swal("EXITO", "La palabra a sido agregada", "success");
        }
}
    

})



function mostrarMensajes(mensajes,correcto ){

    var ul = document.getElementById('mensajes');
    ul.innerHTML = '' 
    
    mensajes.forEach(function(mensaje) {
        var li = document.createElement('li')
        ul.appendChild(li)
                
        
        if (correcto==true){
            
            li.textContent=mensaje;
            li.classList.add("mensaje-correcto");
            

        }
        
        else {
            li.textContent=mensaje;
            li.classList.add("mensaje-incorrecto");
            
        }
        
    })

}