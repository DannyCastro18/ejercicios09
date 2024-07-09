class Prestamo{
    // atributos
    constructor(id, nombre, valorPrestamo, valorPrestamoIntereses, fecha, valorIntereses, numeroCuotas){
        this.id=id
        this.nombre=nombre
        this.valorPrestamo=valorPrestamo
        this.valorPrestamoIntereses=valorPrestamoIntereses
        this.fecha=fecha
        this.valorIntereses=valorIntereses
        this.numeroCuotas=numeroCuotas
    }
    constructor2(id, nombre){
        this.id=id
        this.nombre=nombre
    }
            
// métodos
calcularValorTotalPrestamo(){
  this.valorPrestamoIntereses=this.valorPrestamo*this.valorIntereses*this.numeroCuotas+this.valorPrestamo
}

ValorPagarCuotasInteres(){
    console.log(this.valorPrestamo*this.valorIntereses*this.numeroCuotas)
    
}
valorPagarCuotas(){
    console.log(this.valorPrestamo)
}
}
// instancias
let valorPrestamo=new Prestamo(100234875, 'Brandon', 200000, '', '09-07-2024', 0.1 , 6 )
valorPrestamo.calcularValorTotalPrestamo()
console.log(valorPrestamo)
valorPrestamo.ValorPagarCuotasInteres()
valorPrestamo.valorPagarCuotas()

    

        

