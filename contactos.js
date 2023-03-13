//Lista de contactos
const contactos = [
    {
        id: 1,
        nombres: "Lorena",
        apellisdos: "Ariza",
        telefono: 3120876816,
        ubicacion: {
            ciudad: "Colombia",
            direccion: ""
        },
    },
    {
        id: 2,
        nombres: "Sandra",
        apellisdos: "Mora",
        telefono: 3154852563,
        ubicacion: {
            ciudad: "Colombia",
            direccion: ""
        },
    },
    {
        id: 3,
        nombres: "Sandra",
        apellisdos: "Mora",
        telefono: 3154852563,
        ubicacion: {
            ciudad: "Colombia",
            direccion: ""
        },
    }
];
console.log("Esta es mi lista de contactos: ", contactos);


//Ajusta las funciones de crear un contacto para que puedan almacenar información como objetos
function add (contactos){
    contactos.push(
        {
        id: 4,
        nombres: "Liam",
        apellisdos: "Arias",
        telefono: 3124457895,
        ubicacion: {
            ciudad: "Colombia",
            direccion: "Calle las margaritas 50 #30 sur"
            }
        },
        {
        id: 5,
        nombres: "Leidy",
        apellisdos: "Duarte",
        telefono: 3135448595,
        ubicacion: {
        ciudad: "Colombia",
        direccion: "Carrera 100, #30"
            }
        }
    );
    return contactos;
}
console.log("Esta es mi lista con 2 contactos nuevos", add(contactos));

//Crear contacto al principio de mi lista
function add1 (contactos){
    contactos.unshift(
        {
            id: 0,
            nombres: "Sofia",
            apellisdos: "Neira",
            telefono: 3004587456,
            ubicacion: {
            ciudad: "Colombia",
            direccion: "N/A"
                }
        }
    );
    return contactos;
}
console.log("Nuevo contacto al principio de mi lista", add1(contactos));

//Ajusta las funciones de eliminar un contacto para que puedan almacenar información como objetos
function remove (contactos){
    contactos.pop();
    return contactos;
}
console.log("Elimine el ultimo contacto de mi lista", remove(contactos));

// Eliminar y mostrar contacto eliminado 
const mostrarEliminado = contactos.pop();
console.log("Elimine otro contacto y este es el que fue eliminado: ", mostrarEliminado);

// Eliminar primer contacto y mostrar lista 
const eliminarPrimerC = contactos.shift();
console.log("Elimine el primer contacto y este es:", eliminarPrimerC);

//Cuarto punto - imprimir lista
function imprimeContacto (){
    return contactos;
}
console.log("Asi quedo mi lista", imprimeContacto());

// Imprimir lista con add de nuevo contacto
const imprimir2 = (contactos)=>{
    contactos.push(
        {
            id: 6,
            nombres: "Luis David",
            apellisdos: "Nuñez",
            telefono: 3132554857,
            ubicacion: {
                ciudad: "Colombia",
                direccion: "Barrio Timiza calle 3"
                }
        },
    );
    return contactos;
}
console.log("Esta es mi lista con otra funcion de imprimir y agregar contacto", imprimir2(contactos));
