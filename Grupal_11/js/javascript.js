function agpago() {
    var min = 2010,
      max = 2050,
      select = document.getElementById('anio');
  
    for (var i = min; i <= max; i++) {
      var opt = document.createElement('option');
      opt.value = i;
       opt.innerHTML = i;
      select.appendChild(opt);
    }       
}

      /*select.value = new Date().getFullYear();*/
    
    
    
// function mes () {
    
//     var año= document.getElementById('anio').value;
    
    
//     if(mes==""){
//         alert('Seleccione un año');
    
//     }
//     alert("hola")
// }

function validar(){

    var errores = "";
    var rut = document.getElementById('rut').value;
    var pago = document.getElementById('pago').value;
    var año= document.getElementById('anio').value;
    var mes= document.getElementById('mes').value;
    if (rut == null || rut.length == 0  ){
        errores += "Debe ingresar un rut"+ '\n';
        document.getElementById("rut").style.backgroundColor = "red";
        document.getElementById("rut").style.border = " solid black";
    }
    else{document.getElementById("rut").style.backgroundColor = "white";
        document.getElementById("rut").style.border="inset";}
    if (isNaN(rut)){
        errores += "El rut no es un número"+ '\n';
        document.getElementById("rut").style.backgroundColor = "red";
        document.getElementById("rut").style.border = " solid black";
    }
        else{var rutnum = parseInt(rut);
            if (rutnum <= 0 || rutnum > 99999999){
                errores += "El rut no está dentro del rango esperado"+'\n' ;
                document.getElementById("rut").style.backgroundColor = "red";
                document.getElementById("rut").style.border = " solid black";
            }
        }
    
    if (pago == null || pago.length == 0 ){
        errores += "Debe ingresar un monto de pago"+ '\n';
        document.getElementById("pago").style.backgroundColor = "red"; 
        document.getElementById("pago").style.border = " solid black";
    }
    else{document.getElementById("pago").style.backgroundColor = "white";
    document.getElementById("pago").style.border= "inset";}
    if (isNaN(pago)){
        errores += "El monto de pago debe ser un número"+ '\n';
        document.getElementById("pago").style.backgroundColor = "red";
        document.getElementById("pago").style.border = " solid black";
    }
        else{var pagonum = parseInt(pago);
            if (pagonum <= 0 || pagonum > 100000000){
                errores += "El monto de pago debe ser un número entero, mayor o igual a cero, y menor o igual a $99.999.999"+ '\n';  
                document.getElementById("pago").style.backgroundColor = "red";  
                document.getElementById("pago").style.border = " solid black";        
            }
        }
    if(mes ==0){
        errores += 'Seleccione un mes'+'\n';    
    }
    if(año==""){
        errores += 'Seleccione un año'+'\n'; 
    }
    if (errores == null || errores == "" || errores.length == 0){
       alert(errores = "Datos ingresados correctamente ");  
    }
     else{
        alert(errores)
     }
}
     
     function listadoasesoria(obtener){

        let id = parseInt(obtener.id)
        
        var lista = ["asesoria 001: Mejorar escalera de seguridad ", "asesoria 002: Arreglar techo y piso",
         "asesoria 003: Despejar vias de escape", "asesoria 004: Instalar pasamanos en todas las escaleras"]
        
         switch (id) {
             case 0:
                 document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
                 
                 break;
        
                case 1:
                document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
                break;
                 case 2:
                 document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
                break;
                case 3:
                document.getElementById("demo").innerHTML += "<li>" + lista[id] + "</li>";
                break; 
        
             default:
                 break;
         }
    }