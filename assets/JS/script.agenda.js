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
addAgenda(Agenda) {
    if (verificarInputVazio()) {
      console.log("Preencha todos os inputs!");
      erroMsg("Preencha todos os inputs!");
    } else {
      console.log("Sucesso! Você está cadastrado");
      sucessoMsg("Sucesso! Você está cadastrado");
      this.Agendas.push(Agenda);
    }
  }
  