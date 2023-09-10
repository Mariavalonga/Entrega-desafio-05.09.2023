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
function pegarUsuarioId() {
    const id = Math.floor(Math.random() * 9999);
    return id;
  }

class ListAgenda {
    constructor() {
      this.Agendas = [];
    }
}
 function pegarContatoId(id) {
    return this.Agendas.find((Agenda) => Agenda.id == id);
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

  function verificarInputVazio() {
    console.log("entrou na função verificarInputVazio");
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
  
    if (nome == "" ||telfixo == "" ||celular == "" ||foto == "" ||niver == "" ||
      email == "" ||cep == "" ||cidade == "" ||insta == "" ||git == "") {
      return true;
    }
  }

  function renderizarAgenda() {
    console.log("entrou pela funcao renderizarAgenda");
    document.getElementById("show-container").innerHTML = "";
  
    let html = "";
  
    listAgenda.Agendas.forEach((Agenda) => {
      html += `<div id="AgendaCard" onclick="showAgenda(${Agenda.id})">
        <img src="${Agenda.foto}" alt="${Agenda.nome}" id="pfpShow">
        <div id="info-container">
        <h2 id="agendaNome">${Agenda.nome}</h2>
        <p id="AgendaFixTel">Telefone Fixo: ${Agenda.celular}</p>
        <p id="AgendaTel">Telefone: ${Agenda.telfixo}</p>
    </div>
    </div>
                    `;
    });
    document.getElementById("show-container").innerHTML = html;
  }

  
function showAgenda(id) {
    document.getElementById("agenda-container").classList.remove("hidden");
    const Agenda = listAgenda.pegarContatoId(id);
    let html = `
    <p>Detalhe</p>
        <img src="${Agenda.foto}" alt="${Agenda.nome}" id="pfpDetail">
        <h2 id="agendaNome">${Agenda.nome}</h2>
        <p id="agendaId">${Agenda.id}</p>
       
        <p id="AgendaTel">Celular: ${Agenda.celular}</p>
        <p id="AgendaTel">Telefone: ${Agenda.telfixo}</p>
        <p id="AgendaTel">Data de Nascimento: ${mostrarData(Agenda.niver)}</p>
        <p id="AgendaTel">Idade: ${Agenda.idade}</p>
        <p id="AgendaTel">Signo: ${Agenda.signo}</p>
        <p id="AgendaTel">Email: ${Agenda.email}</p>
        <p id="AgendaTel">CEP: ${Agenda.cep}</p>
        <p id="AgendaTel">Cidade: ${Agenda.cidade}</p>
        <a href="https://whatsapp.com/${Agenda.celular}"><i class="fa-brands fa-whatsapp">Whatsapp</i></a>
        <a href="https://instagram.com/${Agenda.insta}"><i class="fa-brands fa-instagram">Instagram</i></a>
       <a href="https://github.com/${Agenda.git}"><i class="fa-brands fa-github">Github</i></a>
  
                    `;
    document.getElementById("agenda-container").innerHTML = html;
    console.log(id);
  
         
  }

  function erroMsg(msg) {
    console.log("Passou pela função erroMsg()");
  
    document.getElementById("erro-msg").innerHTML = msg;
    document.getElementById("erro-msg").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("erro-msg").classList.add("hidden");
    }, 4000);
  }

  function sucessoMsg(msg) {
    console.log("Passou pela função sucessoMsg()");
  
    document.getElementById("sucesso-msg").innerHTML = msg;
    document.getElementById("sucesso-msg").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("sucesso-msg").classList.add("hidden");
    }, 4000);
  }