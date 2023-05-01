class Personas {
    constructor(nombre, apellido, edad, cedula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    getCedula() {
        return this.cedula;
    }

    setCedula(cedula) {
        this.cedula = cedula;
    }
}
