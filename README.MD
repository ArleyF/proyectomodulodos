## Proyecto Integrador - Módulo 2 Fundamentos
[Documento del proyecto](/Proyecto_Modulo_II.pdf)

### Parte 1

#### PSInt: (Archivo Miniferreteria.psc)
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

* Creación de clases: Archivos .JS dentro de la carpeta Veterinaria
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

##### Veterinaria:
```JavaScript
class Veterinaria {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }
}

```

* Diagrama de bases de datos relacional:
  Se asume que un animal puede estar asociado a una sola persona, pero una persona puede tener varios animales y una veterinaria puede atender a varios animales y personas. En consecuencia, se crearán las siguientes tablas:

  La tabla de relación "AtenciónVeterinaria" se crea para representar la relación entre las tablas "Animales" y "Veterinaria", ya que un animal puede ser atendido por una Veterinaria y una Veterinaria puede atender a varios animales.
  ![Diagrama BD Relacional](/Diagrama_BD_Relacional.png)

* Diagrama de bases de datos No relacional:
![Diagrama BD No relacional](/Diagrama_BD_No_Relacional.png)

#### Creacrión de una BD No relacional con MongoDB
  Los JSON están dentro de la carpeta MongoDB

```MongoDB
use veterinaria
'switched to db veterinaria'
db.createCollection('Personas')
{ ok: 1 }
db.Personas.insert({
   nombre: "Arley",
   apellido: "Fuentes",
   edad: 33,
   cedula: "1038439006"
})
'DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.'
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64504adcbde58b9e029bbac5")
  }
}
db.createCollection('Veterinaria')
{ ok: 1 }
db.Veterinaria.insert({
   nombre: "VeterinaFa",
   direccion: "Calle 28 #33-31",
   telefono: "3117409297"
})
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("64504b31bde58b9e029bbac6")
  }
}
db.createCollection('Animal')
{ ok: 1 }
db.Animal.insert({
   nombre: "Putin",
   genero: "Macho",
   raza: "Azul Ruso",
   veterinaria: ObjectId("64504b31bde58b9e029bbac6")
})

```

##### Capturas:
![DiaCaptura 1 MongoDB](/MongoDB1.png)
![DiaCaptura 2 MongoDB](/MongoDB2.png)