const galeria = [
  {
    nome: "Pedra do Castelo",
    imagem: "imagem3.jpg"
  },
  {
    nome: "Cânion do Rio Poti",
    imagem: "imagem4.jpg"
  },
  {
    nome: "Cachoeira das Arraias",
    imagem: "imagem2.jpg"
  },
  {
    nome: "Picos dos André",
    imagem: "imagem1.jpg"
  }
];

let indiceAtual = 0;

const titulo = document.querySelector(".info h2");
const imagem = document.querySelector(".pontos-img");

function atualizarGale() {
  titulo.innerText = galeria[indiceAtual].nome;
  imagem.src = galeria[indiceAtual].imagem;
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