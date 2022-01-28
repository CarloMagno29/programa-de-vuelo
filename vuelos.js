class vuelo {
    constructor(avion, trip, pasajeros, origen, destino, fecha ){
        this.tipo = avion.tipo;
        this.numAvion = avion.num;
        this.tripulacion = trip;
        this.listaPasajeros = pasajeros;
        this.origen = origen;
        this.destino = destino;
        this.fecha = fecha;
    }
    get puestosDisponibles(){
        if (this.listaPasajeros.length < 40){
            return true
        }
        return false
    }
    get obtenerDestino(){
        return this.destino
    }
}
class tripulacion{
    constructor(){
        this.piloto = nombreGenerador();
        this.copiloto = nombreGenerador();
        this.asistentes = [nombreGenerador(),nombreGenerador(),nombreGenerador()]
    }
}
class avion{
    constructor(num){
        this.numVuelo = num
        this.esIdaYVuelta = Math.round(Math.random()) // 0 / 1
        if (this.esIdaYVuelta == 0){
            this.esIdaYVuelta = false;
        }
        else {
            this.esIdaYVuelta = true;
        }
    }
    get tipo(){
        return this.esIdaYVuelta
    }
    get num(){
        return this.numVuelo
    }
}

function nombreGenerador(){
    let fName = firstname[Math.round(Math.random()*firstname.length)]
    let lName = lastname[Math.round(Math.random()*lastname.length)]
    return fName + " " + lName
}

function crearFecha(tipoAvion){
    let fecha = Math.round(Math.random() * (fechasVuelo.length - 2) )
    let fechaIda = fechasVuelo[fecha]
    let fechaVuel = fechasVuelo[fecha + 1]
    if (tipoAvion){
        return {ida: fechaIda , vuelta: fechaVuel }
    }
    else{
        return {ida: fechaIda }
    }
}
const listaPaises = ["Colombia","Panama","España","Chile","Argentina",
            "Cuba","Mexico","Ecuador","Bolivia","Costa Rica","Cuba","El Salvador",
            "Guatemala","Honduras","Nicaragua","Paraguay","Perú","Puerto Rico",
            "República Dominicana","Uruguay"]
const firstname = ["Adrián", "Agustín", "Alberto", "Alejandro", "Alexander", "Alexis",
            "Alonso", "Andrés Felipe", "Ángel", "Anthony", "Antonio", "Bautista",
            "Benicio", "Benjamín", "Carlos", "Carlos Alberto", "Carlos Eduardo", "Carlos Roberto",
            "César", "Cristóbal", "Daniel", "David", "Diego", "Dylan",
            "Eduardo", "Emiliano", "Emmanuel", "Enrique", "Erik", "Ernesto",
            "Cloe", "Alma", "Elena", "Candela", "Isabella", "Vega",
            "Olivia", "Abril", "Luna", "Lucía", "Paula", "Valentina",
            "Alba", "Daniela", "Sara", "Julia", "Martina", "Emma",
            "Carla", "Sabrina", "Lía", "Amada", "Eva", "Valeria",
            "Manuela", "Paulina", "Alessandra", "Charlotte", "Indira", "Vanessa"
            ];

const lastname= ["Garcia", "Gonzalez", "Rodriguez", "Fernandez", "Lopez", "Martinez",
             "Sanchez", "Perez", "Gomez", "Martin","Jimenez", "Ruiz",
             "Hernandez", "Diaz", "Moreno", "Alvarez", "Muñoz", "Romero",
             "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez","Vazquez",
             "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Suarez", "Molina",
             "Morales", "Ortega", "Delgado", "Castro", "Ortiz", "Rubio",
             "Marin", "Sanz", "Nuñez", "Iglesias"]
const fechasVuelo = ['29 de enero', '30 de enero', '31 de enero']
let vuelos = []
function crearAviones(){
    for (let i = 0 ; i < 10 ; i++ ){
        let tripRand = new tripulacion()

        let passajerosRand = []
        let numPass = Math.round(Math.random()*40)
        for (let j = 0 ; j < numPass ; j++){
            passajerosRand.push(nombreGenerador())}
        let destinoRand = listaPaises[Math.floor(Math.random()*listaPaises.length)]
        let avionRand = new avion(i+1)
        let fechaRand = crearFecha(avionRand.tipo)
        let creaVuelo = new vuelo(avionRand,tripRand, passajerosRand, "Venezuela", destinoRand, fechaRand, avionRand )
        vuelos.push(creaVuelo);
    }
}
crearAviones()
module.exports = [vuelos]
/**console.log(vuelos.map( function(x) {
    return x.tripulacion.asistentes
}))*/