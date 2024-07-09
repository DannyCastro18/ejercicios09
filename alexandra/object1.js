let empleado = {
    id:2345,
    nombre: 'Daniel',
    apellido: 'Ramirez',
}
console.log(empleado.nombre)
empleado.nombre='pedro'
console.log(empleado.nombre)

let book = {
    title: 'Joselito',
    author:'Pedro Márquez',
    year:2021,

descripcion: function () {
    console.log(`El titulo del libro es ${this.title} su autor es ${this.author} y fue escrito en el año ${this.year}` );
}
}
book.descripcion()

let deporte = {
    conBalon:['Fútbol','Baloncesto','Voleibol','FútbolAmericano'],
    sinBalon:['Tenis','Hockey','BMX','Natación','Motocross'],
}
console.log(deporte.conBalon[2])
deporte.sinBalon.push('Paracaídismo')
console.log (deporte.sinBalon[2])

let people = {
    name:'Lyn',
    age:27,
    profession: {
        name:'abogada'
    },
    studies: {
        university: 'Universidad Nacional de Colombia',
        career: 'Derecho',
    },

    // obtener profesion
    profesion: function(){
        console.log(`La profesión de Lyn es ${this.profession.name}` )
    },
    // obtener estudios
    estudios:function(){
        console.log(`Los estudios de Lyn fueron en la ${this.studies.university}`)
    }
}
people.profesion()
people.estudios()
