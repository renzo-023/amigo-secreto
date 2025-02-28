let amigos = [];
let campo = "";
let lista = document.getElementById("listaAmigos");
lista.innerHTML = "";
let amigoSorteado = "";
let quantidade = 0;

function limparCampo() {
  campo = document.getElementById("amigo");
  campo.value = "";
}

function limparItem() {
  lista.innerHTML = "";
}

function adicionarAmigo() {
  campo = document.getElementById("amigo").value;
  if (campo == "") {
    alert("Por favor, insira um nome.");
  } else {
    quantidade++;
    amigos.push(campo);
    console.log(amigos);
    listarAmigo(amigos);
    limparCampo();
  }
}

function listarAmigo() {
  limparItem();
  amigos.forEach(function (item) {
    let pessoa = document.createElement("li");
    pessoa.innerHTML = item;
    lista.append(pessoa);
  });
}

function sortearAmigo() {
  if (quantidade < 2) {
    alert("Você deve adicionar ao menos 2 pessoas na lista!");
  } else {
    amigoSorteado = parseInt(Math.random() * quantidade);
    resultado = document.getElementById("resultado");
    resultado.innerHTML = amigos[amigoSorteado];
  }
}
