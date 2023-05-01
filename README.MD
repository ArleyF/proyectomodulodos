## Proyecto Integrador - Módulo 2 Fundamentos

### Parte 1

#### PSInt:
* Miniferretería SA:
![Codigo en PSInt](/Pseudocodigo.png)

* Diagrama de flujo:
![Diagrama de flujo](/Diagrama_de_flujo.png)

* Diagrama NS:
![Diagrama NS](/Diagrama_NS.png)

* Diagrama UML:
![Diagrama UML](/Diagrama_UML.png)

### Parte 2

#### Programación Orientada a Objetos

* Creación de clases:
##### Personas:
```JavaScript
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

```
##### Animales:
```JavaScript
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

```
