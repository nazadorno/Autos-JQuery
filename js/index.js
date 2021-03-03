//función que se ejecutará al cargar la página
$(document).ready(function(){
    
    //Agrego vehículos y antiguedad / promedio HTML
    $('#botonAutos').on('click', function() {
       var auto = prompt('Ingresar vehículo');
       var autos = 0;
       var acumuladorAños = 0;
            
       while(auto){
         autos++;
         var años = parseInt(prompt('Ingresar antigüedad'));
          $('#autos').append("<tr><td>" + auto + "</td><td>" + años + "</td></tr>")
          acumuladorAños += años;
          function pagaPatente(antiguedad, limiteAños){
          return antiguedad > limiteAños;
          }
          if(pagaPatente(años, 10))
          {
         alert('Paga patente');
         }else{
               alert('No paga patente');
              }
          
         auto = prompt('Ingresar vehículo');
        }    

    $('#botonProm').on('click', function() {

        if(autos > 0){
        var resultado = acumuladorAños / autos;
        alert('El promedio de antigüedad es: ' + resultado);
        }else{
              alert('No se ingresaron vehículos');
            }
        });
    });                 
});


    

/* 
function mostrarPromedioVehiculos(cantidadAutos, añosTotales){
    ingresoVehiculos();
    mostrarPromedioVehiculos(autos, acumuladorAños);
} */