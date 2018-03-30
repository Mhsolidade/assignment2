class LeadModel {
  constructor(nome, email, tipo) {
    this.email = email;
    this.nome = nome;
    this.ip = HelperService.ip;
    this.tipo = tipo;
    this.data = HelperService.data;
    
  }
}


