var available = require("");
var readLine = require("readline-sync");
var colors = require("colors");

var vacunaSioNO= ["si", "no"];
var enfermoSioNo = ["si", "no"];
var vacunas = ["pfizer ", " aztrazeneca ", " j&j ", " moderna ", " otra" + " "]
var sintomas = ["fiebre ", " dolor de cabeza ", " malestar estomacal "];
// Poner que no se inica si no pasa la parte 2 (disponibilidad)

console.log("=".repeat(50).red)
    console.log("preguntas de bioseguridad".toLocaleUpperCase().red);
console.log("=".repeat(50).red)

    function seguridad (){
      if  (available.disponibilidad == false){
          return {requisitos:false}
      };

        let firstQ = readLine.question("Esta usted vacunado? si/no :" + " ");
            let siOno = vacunaSioNO.find(vaccine => vaccine == firstQ);
                    if (siOno == "no"){
                         console.log("no puede abordar".yellow.bgRed.bold);
                            return {requisitos:false}
                        }else{
                          (console.log("genial".blue)
                        )};
              console.log("=".repeat(50));


         let secondQ = readLine.question("ha presentado estos sintomas? "+ sintomas + "si/no: ");
             let siOno2 = enfermoSioNo.find(sintoms => sintoms == secondQ);
                     if (siOno2 == "si"){
                         console.log("no puede abordar".yellow.bgRed.bold);
                         return {requisitos:false}
                   }else{
                      (console.log("genial".blue))
                      console.log("=".repeat(50));
                              readLine.question("Tipo de vacuna: presione enter y seleccione una tecla")
                                       index = readLine.keyInSelect(vacunas);
                          console.log("=".repeat(50));
                                      console.log('Ok, tienes ' + vacunas[index]);
                             };
                         console.log("=".repeat(50));
    

        let fourthQ = readLine.question("ha tenido covid en el pasado? si/no " + " ");
             let siOno4 = vacunaSioNO.find(covidpass => covidpass == fourthQ);
                    if (siOno4 == "si"){
                       console.log("no puede abordar".yellow.bgRed.bold);
                       return {requisitos:false}
                        }else{
                            (console.log("genial".blue))
                        };
                    console.log("=".repeat(50));

        
        let fifthQ = readLine.question("Hace usted uso de la mascarilla? si/no "); 
            let siOno5= vacunaSioNO.find(mask => mask == fifthQ);
                  if(siOno5 == "no"){
                    console.log("no puede abordar".yellow.bgRed.bold);
                    return {requisitos:false}
                }else{
                    console.log("genial".blue)
                 }
        
                return {requisitos: true};    
    
};

let s = seguridad();
console.log(s);
module.exports = s;