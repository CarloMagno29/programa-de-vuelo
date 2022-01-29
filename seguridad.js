//var available = require("./disponibilidad");
var readLine = require("readline-sync");
var colors = require("colors");

var vacunaSioNO= ["Si", "No"];
var enfermoSioNo = ["si", "no"];
var vacunas = ["pfizer ", " aztrazeneca ", " j&j ", " moderna ", " otra" + " "]
var sintomas = ["fiebre ", " dolor de cabeza ", " malestar estomacal "];
// Poner que no se inica si no pasa la parte 2 (disponibilidad)

console.clear();

console.log("=".repeat(60).blue.bold)
    console.log("Para proceder llene el siguiente formulario de bioseguridad".toLocaleUpperCase().blue.bold);
console.log("=".repeat(60).blue.bold)

    function seguridad (){

      
        let firstQ = readLine.keyInSelect(vacunaSioNO,"Esta usted vacunado? " , {cancel:false});
            let siOno = vacunaSioNO[firstQ];
                    if (siOno == "No"){
                        console.log("Por no cumplir las medidas de Bioseguridad no podemos venderle boletos. Feliz dia".yellow.bgBlue.bold);
                            return {requisitos:false}
                        }else{
                          (console.log("genial".blue)
                        )};
              console.log("=".repeat(50));


         let secondQ = readLine.keyInSelect(vacunaSioNO,"ha presentado estos sintomas? "+ sintomas , {cancel:false});
             let siOno2 = vacunaSioNO[secondQ];
                     if (siOno2 == "Si"){
                        console.log("Por no cumplir las medidas de Bioseguridad no podemos venderle boletos. Feliz dia".yellow.bgBlue.bold);
                         return {requisitos:false}
                   }else{
                      (console.log("genial".blue))
                      console.log("=".repeat(50));
                        index = readLine.keyInSelect(vacunas, "Tipo de vacuna: presione enter y seleccione una tecla", '');
                        console.log("=".repeat(50));
                                      console.log('Perfecto, cuentas con una vacuna: ' + vacunas[index]);
                             };
                         console.log("=".repeat(50));
    

        let fourthQ = readLine.keyInSelect(vacunaSioNO,"Ha tenido covid en el pasado? " , {cancel:false});
             let siOno4 = vacunaSioNO[fourthQ];
                    if (siOno4 == "Si"){
                        console.log("Por no cumplir las medidas de Bioseguridad no podemos venderle boletos. Feliz dia".yellow.bgBlue.bold);
                       return {requisitos:false}
                        }else{
                            (console.log("genial".blue))
                        };
                    console.log("=".repeat(50));

        let fifthQ = readLine.keyInSelect(vacunaSioNO,"Hace usted uso de la mascarilla? " , {cancel:false});
            let siOno5= vacunaSioNO[fifthQ];
                  if(siOno5 == "No"){
                    console.log("Por no cumplir las medidas de Bioseguridad no podemos venderle boletos. Feliz dia".yellow.bgBlue.bold);
                    return {requisitos:false}
                }else{
                    console.log("genial".blue)
                 }
        
                return {requisitos: true};    
    
};

let s = seguridad();
//console.log(s);
module.exports = s;