const readlineSync = require('readline-sync');
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
    let claseVuelo = ['Clase Turista', 'Primera Clase']
    let claseSeleccionada = readlineSync.keyInSelect(claseVuelo,'Seleccione el tipo de vuelo desea tomar: ', {cancel:false})
    claseSeleccionada = claseVuelo[claseSeleccionada]
    let listaTipos = ['Simple','Ida y Vuelta']
    let tipoVuelo = readlineSync.keyInSelect(listaTipos,'Seleccione el tipo de vuelo desea tomar: ',{cancel: false})
    let listaPaisesDisp = ciudadesDisponibles(vuelos)
    let paisSeleccionado = readlineSync.keyInSelect(
        listaPaisesDisp,
         'Debido a la pandemia global solo tenemos disponibles vuelos a paises Hispanohablantes.\nPor favor, seleccione una de las opciones disponibles: ',
          {cancel: 'Otro'})
    console.log(paisSeleccionado)
    if (paisSeleccionado == -1){
        return rechazador()
    }

    let listaVuelosPorTipo = clasificadorVuelos(vuelos)
    let vuelosDisp = listaVuelosPorTipo[tipoVuelo]
    if (vuelosDisp.length == 0){
        return rechazador()
    }
    console.log(vuelosDisp.map(x=>x.destino))
    console.log(listaPaisesDisp[paisSeleccionado])
    console.log(vuelosDisp.includes(listaPaisesDisp[paisSeleccionado]))
    /*
    if (vuelosDisp.includes(listaPaisesDisp[paisSeleccionado])){
        let listaVuelosDisp = vuelosDisp.map(x => {
            if(x.destino == listaPaisesDisp[paisSeleccionado]){
                return {"Numero": x.num,"Destino": x.destino "Fecha": x.fecha}
            }
            } )
        let vueloSeleccionado = readlineSync.keyInSelect(listaVuelosDisp,'Seleccione uno de los vuelos disponibles', {cancel:false})
    }
    else{
        return rechazador()
    }
    */
}
let boleto = boletador()
module.exports = boleto;
//console.log(vuelos)*/