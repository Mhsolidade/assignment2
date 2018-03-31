class LeadModel {
  constructor(nome, email, tipo) {
    console.log(nome);
    this.email = email;
    this.nome = nome;
    this.ip = HelperService.ip;
    this.tipo = tipo;
    this.data = HelperService.data;
  }
}


