class Coche{
    constructor(marca,modelo,color,año){
        this.marca=marca
        this.modelo=modelo
        this.color=color
        this.año=año
    }
    arrancar(){
        console.log(this.marca)
    }
    detener(){
        console.log(this.color)
    }
}
let micoche=new Coche('Toyota', 'civic', 'negro', 2021)
micoche.arrancar()
let micoche1=new Coche('Camaro', 'ciciv', 'naranja', 2022)
micoche1.detener()

// crear la clase persona donde tiene id, nombre, edad, apellido y el método saludo que devuelve un console.log con el nombre generado en la clase. Crear 5 instacias con datos diferentes y hacer el llamado del método saludo

class People{
    constructor(id, nombre, apellido, edad){
        this.id=id
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
    }
    // método
    saludo(){
        console.log(this.nombre)
    }
}
// instancias
let misaludo=new People(100293746, 'Alexander', 'García', 22)
misaludo.saludo()
let misaludo1=new People(1234567, 'Jessica', 'Muñoz', 21)
misaludo1.saludo()
let misaludo2=new People(987654, 'Valeria', 'Alcantara', 27)
misaludo2.saludo()
let misaludo3=new People(3546786, 'Santiago', 'Castillo', 18)
misaludo3.saludo()
let misaludo4=new People(100293746, 'Sebastian', 'Montenegro', 35)
misaludo4.saludo()
