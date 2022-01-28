const readlineSync = require('readline-sync');
var colors = require('colors');
const [vuelos] = require('./vuelos')


function ciudadesDisponibles(vuelos){
    let listaDestinos = []
    vuelos.filter(function(vuelo){
        if (!(listaDestinos.includes(vuelo.obtenerDestino) )){
            listaDestinos.push(vuelo.obtenerDestino)
        }
    })
    return listaDestinos;
}

function clasificadorVuelos(vuelos){
    return {
        0: vuelos.filter(x => x.tipo == false ),
        1: vuelos.filter(x => x.tipo == true),
    }
}
function rechazador(){
    console.log('Lo sentimos, no hay vuelos disponibles para dichas indicaciones.')
    return {habilitado:false}
}
function boletador(){
    console.clear();
    console.log("=".repeat(50).blue.bold)
    console.log("********Solicitud de Boletos********".toLocaleUpperCase().blue.bold);
    console.log("=".repeat(50).blue.bold)

    let claseVuelo = ['Clase Turista', 'Primera Clase']
    let claseSeleccionada = readlineSync.keyInSelect(claseVuelo,'Seleccione la clase de vuelo desea tomar: '.blue.bold, {cancel:false})
    claseSeleccionada = claseVuelo[claseSeleccionada]
    let listaTipos = ['Simple','Ida y Vuelta']
    let tipoVuelo = readlineSync.keyInSelect(listaTipos,'Seleccione el tipo de vuelo desea tomar: '.blue.bold,{cancel: false})

    let listaVuelosPorTipo = clasificadorVuelos(vuelos)
    let vuelosDisp = listaVuelosPorTipo[tipoVuelo]
    if (vuelosDisp.length == 0){
        return rechazador()
    }
    let listaPaisesDisp = ciudadesDisponibles(vuelosDisp)

    let paisSeleccionado = readlineSync.keyInSelect(
        listaPaisesDisp,
         'Debido a la pandemia global solo tenemos disponibles vuelos a paises Hispanohablantes.\nPor favor, seleccione una de las opciones disponibles: '.blue.bold,
          {cancel: 'Otro'})
    if (paisSeleccionado == -1){
        return rechazador()
    }

    let listaVuelosDisp = vuelosDisp.filter(x => x.destino == listaPaisesDisp[paisSeleccionado])
    let listaVuelosDispImpr = listaVuelosDisp.map(x =>  {
        if (tipoVuelo == 0){
            return "Numero: "+ x.num + " | Fecha: " + x.fecha.ida + " | Destino: " + x.destino
        }
        else {
            return "Numero: "+ x.num + " | Fecha: " + x.fecha.ida +" - " + x.fecha.vuelta + " | Destino: " + x.destino

        }
    })
    let vueloSeleccionado = readlineSync.keyInSelect(listaVuelosDispImpr,'Seleccione uno de los vuelos disponibles'.blue.bold, {cancel:"Ninguno"})
    if (vueloSeleccionado == -1 ){
        return rechazador()
    }
    return {habilitado: true , boleto: listaVuelosDisp[vueloSeleccionado],claseSeleccionada}



}
let boleto = boletador()

module.exports = boleto;
