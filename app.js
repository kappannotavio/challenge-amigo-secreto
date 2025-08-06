let listaAmigos = [];

function adicionarAmigo(){
    var amigo = document.getElementById("amigo").value;

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
    console.log(i);
    mostrarVencedor(listaAmigos[i]);
}

function mostrarVencedor(vencedor){
    document.getElementById("resultado").innerHTML = "O amigo sorteado foi o " + vencedor;
    console.log(vencedor);
}


