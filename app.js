let listaAmigos = [];

function adicionarAmigo(){
    var amigo = document.getElementById("amigo").value;
    document.querySelector("#amigo").value = "";
    if(amigo){
    listaAmigos.push(amigo);
    atualizarLista(amigo);
    }
    else{
        alert("Nome do amigo não pode estar vazio!");
    }
}

function atualizarLista(amigo){
    var lista  = document.getElementById("listaAmigos").innerHTML;
    lista = lista +"<li>"+amigo+"</li>";
    document.getElementById("listaAmigos").innerHTML = lista;
}

function sortearAmigo(){
    var i = parseInt(Math.random() * listaAmigos.length);
    mostrarVencedor(listaAmigos[i]);
}

function mostrarVencedor(vencedor){
            var resultadoDiv = document.getElementById("resultado");
            resultadoDiv.innerHTML = "O amigo sorteado foi o <strong>" + vencedor + "</strong>";
            resultadoDiv.style.display = "block";
}