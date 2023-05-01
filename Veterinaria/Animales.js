class Animales {
    constructor(nombre, genero, raza) {
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getGenero() {
        return this.genero;
    }

    setGenero(genero) {
        this.genero = genero;
    }


    getRaza() {
        return this.raza;
    }

    setRaza(raza) {
        this.raza = raza;
    }
}
