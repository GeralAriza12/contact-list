//Primer punto - lista de contactos
const contactos = ["Lorena Ariza", "Sandra Mora", "Oscar Rojas", "Marta Coral"];
console.log(contactos);

//Segundo punto - agregar a las lista
function add (contactos){
    contactos.push("Raul Arias", "Thiago Miranda", "Luna Marin");
    return contactos;
}
console.log(add(contactos));

//Tercer punto - eliminar ultimo en la lista
function remove (contactos){
    contactos.pop();
    return contactos;
}
console.log(remove(contactos));

//Cuarto punto - imprimir lista
function imprimeContacto (){
    return contactos;
}
console.log(imprimir());

// Otra forma de hacer function...
// const imprimir2 = (contactos)=>{
//     contactos.push("David Nuñez", "Maria Cruz");
//     return contactos;
// }
// console.log(imprimir2(contactos));

