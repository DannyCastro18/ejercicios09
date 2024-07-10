// creación de la clase prestamo
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
    // documento y nombre por defecto
    constructor2(id, nombre){
        this.id=id
        this.nombre=nombre
    }
            
// métodos
// Se encarga de dar el total del prestamo incluyendo el valor de intereses, las cuotas y el prestamo
calcularValorTotalPrestamo(){
  this.valorPrestamoIntereses=this.valorPrestamo*this.valorIntereses*this.numeroCuotas+this.valorPrestamo
}
// Para saber cuanto debe pagar la persona cada mes incluyendo intereses se debe multiplicar el valor del prestamo por el interes y el numero de cuotas 
ValorPagarCuotasInteres(){
    console.log(this.valorPrestamo*this.valorIntereses*this.numeroCuotas)
    
}
// El prestamo sin interes se divide entre el numero de cuotas para saber cuanto debe pagar la persona cada mes 
valorPagarCuotas(){
    console.log(this.valorPrestamo/this.numeroCuotas)
}
// Si el valor del prestamo incluyendo los intereses es mayor o igual al valor a pagar entonces se resta el valor del prestamo con intereses con el valor a pagar y asi notificar por medio de un console.log que la deuda se cancelo
pagarCuota(valorPagar){
    if (this.valorPrestamoIntereses >= valorPagar) {
        this.valorPrestamoIntereses = this.valorPrestamoIntereses - valorPagar
        // y asi notificar por medio de un console.log que la deuda se cancelo
        console.log('Haz pagado tu deuda')
    } else {
        // Si el valor del prestamo incluyendo los intereses es menor al valor a pagar entonces por medio de un console.log se notificara que el pago no se puede realizar
        console.log('No puedes pagar tu deuda')
    }
}

refinanciar(nuevoCuotas){
    // Se asigna un parametro a refinanciar llamado numeroCuotas y se actualiza numeroCuotas por nuevoCuotas para que tome el nuevo valor,
    this.numeroCuotas=nuevoCuotas
    // realiza la operación nuevamente incluyendo el nuevo dato de cuota
    this.calcularValorTotalPrestamo()
    // se mostrara por medio de un console.log el nuevo resultado
    console.log( `El nuevo número de Cuotas es: ${this.numeroCuotas}`)
}
// Aqui se mostrará por medio de un console.log la información del prestamo
toSring(){
    console.log(`${this.nombre} identificado con cédula de ciudadanía ${this.id}, realizo el ${this.fecha} un prestamo por un valor de ${this.valorPrestamo}, con interes del ${this.valorIntereses} a ${this.numeroCuotas} cuotas con un total de ${this.valorPrestamoIntereses}`)
}
}
// instancias
// creación de un objeto a partir de la clase prestamo
let valorPrestamo=new Prestamo(100234875, 'Brandon', 200000, '', '09-07-2024', 0.1 , 6 )
// Se ejecutan los metodos
valorPrestamo.calcularValorTotalPrestamo()
console.log(valorPrestamo)
valorPrestamo.ValorPagarCuotasInteres()
valorPrestamo.valorPagarCuotas()
valorPrestamo.toSring()
// Se ejecuta el metodo pagarCuota y se pasa parametro
valorPrestamo.pagarCuota(150000)
console.log(valorPrestamo.valorPrestamoIntereses)
// Se ejecuta el metodo refinanciar y se pasa parametro
valorPrestamo.refinanciar(2)

    

        

