class LeadModel {
  constructor(nome, email, tipo) {
    this.email = email;
    this.nome = nome;
    this.ip = AddressService.ip;
    this.tipo = tipo;
    this.data = new Date();
    
  }
}


