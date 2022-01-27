var readlineSync = require('readline-sync');
const { map } = require('./vuelos')
const [vuelos] = require('./vuelos')

function ciudadesDisponibles(vuelos){
    let listaDestinos = []
    vuelos.filter(function(vuelo){
        if (!(listaDestinos.includes(vuelo.obtenerDestino) )){
            listaDestinos.push(vuelo.obtenerDestino)
        }
    })
    return listaDestinos
}


function boletador(){
     console.log()
     let tipoVuelo = readlineSync.question('¿Qué tipo de vuelo desea tomar?\n(1)Sencillo\n(2)Ida y Vuelta\n')
}
console.log(vuelos)
console.log(ciudadesDisponibles(vuelos))