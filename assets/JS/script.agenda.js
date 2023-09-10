console.log("O Js está linkado!");

class Agenda {
    constructor(nome,telfixo,celular,foto,niver,email,cep,cidade,insta,git) {
      this.nome = nome;
      this.telfixo = telfixo;
      this.celular = celular;
      this.foto = foto;
      this.niver = niver;
      this.idade = this.verificarIdade(niver);
      this.signo = this.getZodiacSign();
      this.id = this.pegarUsuarioId();
      this.email = email;
      this.cep = cep;
      this.cidade = cidade;
      this.insta = insta;
      this.git = git;
    }
}

class ListAgenda {
    constructor() {
      this.Agendas = [];
    }
}
 function addAgenda(Agenda) {
    if (verificarInputVazio()) {
      console.log("Preencha todos os inputs!");
      erroMsg("Preencha todos os inputs!");
    } else {
      console.log("Sucesso! Você está cadastrado");
      sucessoMsg("Sucesso! Você está cadastrado");
      this.Agendas.push(Agenda);
    }
  }

  const listAgenda = new ListAgenda();

function criarAgenda() {
  console.log("você entrou na função criarAgenda");
  const nome = document.getElementById("input-nome").value;
  const telfixo = document.getElementById("input-tel-fixo").value;
  const celular = document.getElementById("input-tel-celular").value;
  const foto = document.getElementById("input-foto").value;
  const niver = document.getElementById("input-data").value;
  const email = document.getElementById("input-email").value;
  const cep = document.getElementById("input-cep").value;
  const cidade = document.getElementById("input-cidade").value;
  const insta = document.getElementById("input-insta").value;
  const git = document.getElementById("input-git").value;

  const pessoa = new Agenda( nome, telfixo, celular, foto, niver, email, cep, cidade, insta, git);
  listAgenda.addAgenda(pessoa);

  console.log(pessoa);
  limparInputs();
  verificarInputVazio();
  renderizarAgenda();
}

function limparInputs() {
    console.log("entrou na função limparInputs");
    const nome = (document.getElementById("input-nome").value = "");
    const telfixo = (document.getElementById("input-tel-fixo").value = "");
    const celular = (document.getElementById("input-tel-celular").value = "");
    const foto = (document.getElementById("input-foto").value = "");
    const niver = (document.getElementById("input-data").value = "");
    const email = (document.getElementById("input-email").value = "");
    const cep = (document.getElementById("input-cep").value = "");
    const cidade = (document.getElementById("input-cidade").value = "");
    const insta = (document.getElementById("input-insta").value = "");
    const git = (document.getElementById("input-git").value = "");
  }
