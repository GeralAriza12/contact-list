// Crear un nuevo elemento 
document.getElementById("form").addEventListener("submit",crear);

let contactos = []
if (localStorage.getItem("contactos") !==null) {
    contactos = JSON.parse(localStorage.getItem("contactos"))
}
console.log(contactos);

function crear(e){
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    telefono = document.getElementById("telefono").value
    ubicacion = document.getElementById("ubicacion").value

    let contacto = {
        nombre,
        apellido,
        telefono,
        ubicacion
    }

    if(localStorage.getItem("contactos") === null){
        contactos = []
        contactos.push(contacto)
        localStorage.setItem("contactos",JSON.stringify(contactos))
    }else{
        contactos = JSON.parse(localStorage.getItem("contactos")) 
        contactos.push(contacto)
        localStorage.setItem("contactos",JSON.stringify(contactos))
    }
    mostrar();
    document.getElementById("form").reset();
    console.log("Contacto guardado");
    e.preventDefault()
}

function mostrar(){
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < contactos.length; i++){
        let nombre = contactos[i].nombre;
        let apellido = contactos[i].apellido;
        let telefono = contactos[i].telefono;
        let ubicacion = contactos[i].ubicacion;

        console.log(nombre);
        console.log(apellido);
        console.log(telefono);
        console.log(ubicacion);

        document.getElementById("tbody").innerHTML += 
        `<tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${telefono}</td>
            <td>${ubicacion}</td>
            <td><button onclick="editar('${nombre}')"><i class="fa-solid fa-user-pen  fa-2x" style="color: #0008ff;"></i></button></td>
            <td><button onclick="eliminar('${(nombre)}')"><i class="fa-solid fa-user-minus fa-2x" style="color: #ff0000;"></i></button></td>
        </tr>`
    }
}

// Editar elemento creado
function editar(nombre){
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            document.getElementById("padre").innerHTML = `
            <h1>EDITAR CONTACTO</h1>
            <div id="hijo1">
                <div class="cajas">
                    <form>
                        <div class="formulario">
                            <label for="">Nombre</label><div id="errorNom"></div>
                            <input id="newNombre" type="text" class="inputForm" placeholder="${contactos[i].nombre}">
                            <span class="linea"></span>
                        </div>
                        <div class="formulario">
                            <label for="">Apellidos</label><div id="errorApe"></div>
                            <input id="newApellido" type="text" class="inputForm" placeholder="${contactos[i].apellido}">
                            <span class="linea"></span>
                        </div>
                        <div class="formulario">
                            <label for="">Teléfono</label><div id="errorTel"></div>
                            <input id="newTelefono" type="text" maxlength="10" class="inputForm" placeholder="${contactos[i].telefono}">
                            <span class="linea"></span>
                        </div>
                        <div class="formulario">
                            <label for="">Ubicación</label><div id="errorUbi"></div>
                            <input id="newUbicacion" type="text" class="inputForm" placeholder="${contactos[i].ubicacion}">
                            <span class="linea"></span>
                        </div>
                        <button id="botonAdd" onclick="actualizar('${i}')"><i class="fa-solid fa-user-plus fa-2x" style="color:#00ff40;"></i></button>   
                        <button id="botonAdd">Cancelar</button>   
                    </form>
                </div>`
        } 
    }
}

function actualizar(i){
    contactos[i].nombre = document.getElementById("newNombre").value;
    contactos[i].apellido = document.getElementById("newApellido").value;
    contactos[i].telefono = document.getElementById("newTelefono").value;
    contactos[i].ubicacion = document.getElementById("newUbicacion").value;

    if(contactos[i].nombre == ""){
        alert("Ingrese nombre del contacto")
    }else if(contactos[i].apellido == "") {
        alert("Ingrese apellido del contacto")
    }else if(contactos[i].telefono == ""){
        alert("Ingrese telefono del contacto")
    }else if(contactos[i].ubicacion == ""){
        alert("Ingrese ubicación del contacto")
    }else{
    localStorage.setItem("contactos",JSON.stringify(contactos));
    }
}

// Eliminar elemento creado 
function eliminar(nombre){
    for (let i = 0; i < contactos.length; i++) {
        if(contactos[i].nombre === nombre){
            localStorage.removeItem("contactos");
            contactos.splice(i,1)
        }
    }

    localStorage.setItem("contactos",JSON.stringify(contactos));
    mostrar();
}

mostrar();

// Creando función buscar-pendiente
document.getElementById("inputBuscar").addEventListener("keyup", buscar);

function buscar() {
    let filter = crear().value.toUpperCase();
    let storing = mostrar().getElementByTagName("storing");

    for (let i = 0; i < storing.length; i++) {
        let td = storing[i].getElementByTagName("td")[0];
        let text = td.textContent || td.innerText

        if(text.toUpperCase().indexOf(filter)>-1){
            td[i].style.display = "";
        }else{

        }
        
    }
}