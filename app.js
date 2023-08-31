//productos, lista de peliculas de la cartelera
class Pelicula{
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = this.cantidad
    }
}

const listaPeliculas = []
const carrito = []
let cartelera = ""

listaPeliculas.push(new Pelicula(1,"Hellraiser",2000))
listaPeliculas.push(new Pelicula(2,"Ju-On",2000))
listaPeliculas.push(new Pelicula(3,"Noroi:The Curse",2000))
listaPeliculas.push(new Pelicula(4,"Liverleaf",2000))

console.log("Elija la película seleccionando el numero de id")

for (const objeto of listaPeliculas) {
    cartelera = cartelera + "id: "+objeto.id+"\nPelicula: "+objeto.nombre+"\nPrecio: "+objeto.precio+"\n"
}

let id = prompt(cartelera + "\n" + "¿Qué película desea ver? dígame el id de la película")

for (let i = 0; i < listaPeliculas.length; i++){
    let objeto = listaPeliculas[i]

    if(id == objeto.id){
        carrito.push(objeto)
        let cantidad = Number(prompt("ingrese la cantidad de entradas"))
        objeto.cantidad = cantidad
        prompt(objeto.cantidad + " entradas para la pelicula " + objeto.nombre)
    }
}