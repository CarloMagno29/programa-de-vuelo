var readLine = require("readline-sync");
var colors = require('colors');

const personaExport = require("./id");
const datos = require("./disponibilidad");
let cumplimientoRequisitos = false;

if (datos.habilitado == true) {
    const covid = require("./seguridad");

    if (covid.requisitos == true){
        cumplimientoRequisitos = true;
 }

}




//console.log (datos.boleto);

let star = "⭐️";
let avion = "✈️";
let nube = "☁️";

// ****creacion viñeta de cabecera.*****

function MapaAvion(){
    let MapaAvion = [
      ["E", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "E"],
      [  0, 0, 0, 0, 2, 2,1,"AEROLINEA CHARLIE".blue.bold,1,2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2],
      ["E", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "E"],
     
    ]
    
    for(let fila = 0 ; fila < MapaAvion.length ; fila++){
      let col = 0;
      for(; col < 28;col++){
         if(MapaAvion[fila][col] == "E"){
            MapaAvion[fila][col] = star;  
         }   
         if(MapaAvion[fila][col] == 0){
            MapaAvion[fila][col] = nube;  
         }   
         if(MapaAvion[fila][col] == 1){
            MapaAvion[fila][col] = avion;  
         }   
         if(MapaAvion[fila][col] == 2){
            MapaAvion[fila][col] = "";  
          }   
       }
     }
     for (let fila = 0 ; fila < MapaAvion.length ; fila++){
        console.log(MapaAvion[fila][0],MapaAvion[fila][1], MapaAvion[fila][2], MapaAvion[fila][3] , MapaAvion[fila][4], MapaAvion[fila][5],
          MapaAvion[fila][6], MapaAvion[fila][7],MapaAvion[fila][8], MapaAvion[fila][9],MapaAvion[fila][10],MapaAvion[fila][11], MapaAvion[fila][12],
          MapaAvion[fila][13], MapaAvion[fila][14],MapaAvion[fila][15],MapaAvion[fila][16], MapaAvion[fila][17], MapaAvion[fila][18],MapaAvion[fila][19]);
        }
    
    }

    function barraSeparador(){
        console.log("=".repeat(42));
      
    }
// ****Mensaje Salida.*****
    function barramensaje(){
        console.log(`${star}  Recuerde cumplir con las medidas de \n Bioseguridad el dia de su vuelo ${star}`);
    
        console.log(`${avion}  Feliz Viaje ${avion}`.bold.blue);
        
      
    }
// ****Funcion salida del boleto*****
    async function ImpresionBoleto(){
        const waitFor = ms => new Promise(
            resolve => setTimeout (resolve,ms)
        )
        console.log ("***Estimado Usuario, estamos procesando su solicitud....****".bold.blue);
        await waitFor (2000)
        console.clear();
        console.log ("imprimiendo Boleto....".bold.blue);
        await waitFor (3000)
       console.clear();
         MapaAvion();
         barraSeparador();
        console.log ("***DATOS DEL PASAJERO***\n".black.bold,"Nombre:".bold, personaExport.name,"\n", "Cedula/ID:".bold,personaExport.Ced, "\n", "Nacionalidad".bold, personaExport.nacional,"\n");
        barraSeparador();
        await waitFor (2000)   
        if (datos.boleto.tipo == false ) {
            var boletoTipo = "Simple";
        }  
        else{
            var boletoTipo = "Ida y Vuelta";
        }
            
       console.log ("***DATOS DEL VUELO***\n".black.bold, "Destino:",datos.boleto.destino, "\n","clase".bold,datos.claseSeleccionada,"\n", "Fecha".bold, datos.boleto.fecha,
        "\n", "Tipo de Vuelo".bold, boletoTipo)
        barraSeparador();
        barramensaje ();
        await waitFor (5000) 
        console.clear();
        console.log ("***GRACIAS POR ELEGIR AEROLINEAS CHARLIE***\n".blue.bold)
   }
 
  if (cumplimientoRequisitos == true){
    ImpresionBoleto();
  }
