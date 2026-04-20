const galeria = [
  {
    nome: "Pedra do Castelo",
    imagem: "imagem3.jpg",
    creditos: "Guia Edim"
  },
  {
    nome: "Cânion do Rio Poti",
    imagem: "imagem4.jpg",
    creditos: "Evandro Lucena"
  },
  {
    nome: "Cachoeira das Arraias",
    imagem: "imagem2.jpg",
    creditos: "Cidade Verde"
  },
  {
    nome: "Picos dos André",
    imagem: "imagem1.jpg",
    creditos: "R. Santos"
  }
];

let indiceAtual = 0;

const titulo = document.querySelector(".info h2");
const imagem = document.querySelector(".pontos-img");
const creditos = document.getElementById("creditos");



function atualizarGale() {
  const conta = document.getElementById("conta").innerText = indiceAtual + 1;
  
  imagem.classList.remove("ir");
  
  void imagem.offsetWidth;
  
  titulo.innerText = galeria[indiceAtual].nome;
  imagem.src = galeria[indiceAtual].imagem;
  creditos.innerHTML = "CREDITOS: " + galeria[indiceAtual].creditos;
  creditos.style.fontWeight = "bold";
  imagem.classList.add("ir");
  
}

function avancar() {
  indiceAtual++;
  
  if (indiceAtual >= galeria.length) {
    indiceAtual = 0;
  }
  
  atualizarGale();
}

function voltar() {
  indiceAtual--;
  
  if (indiceAtual < 0) {
    indiceAtual = galeria.length - 1;
  }
  
  atualizarGale();
}

atualizarGale();