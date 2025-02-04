let amigos = [];

function asignarTextoId(id, texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML += texto;
    return;
}


function actualizarAmigos(){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (i = 0; i < amigos.length; i++){
        asignarTextoId('listaAmigos',`<li> ${amigos[i]} </li>`);
    }
}

function limpiar(id){
    elemento = document.getElementById(id);
    elemento.innerHTML = ''
}

function agregarAmigo(){
    let amigoNuevo = document.getElementById('amigo').value;
    if (amigoNuevo == ""){
        alert('Por favor, inserte un nombre')
    }else{
        amigos.push(amigoNuevo);
        actualizarAmigos()
        document.getElementById('amigo').value = ''
    }
    
    
}


function sortearAmigo(){
    let indiceSorteado = Math.floor(Math.random()*amigos.length);
    if (amigos.length != 0){
        limpiar('resultado');
        asignarTextoId('resultado',`${amigos[indiceSorteado]}`);
    }
}
