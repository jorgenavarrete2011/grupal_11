
function myFunction() {
    
    var r = confirm("Desea validar y modificar los chequeos de esta visita?");
    if (r == true) {
    window.location.href='responderchecklist.html';
    } else {
        window.location.href='listadovisitas.html';
    }
    //document.getElementById("demo").innerHTML = txt;
    
    }
        