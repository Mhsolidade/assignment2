class LeadModel {
  constructor(nome, email, contato) {
    this.nome = nome;
    this.email = email;
    this.contato = contato;
    this.ip = AddressService.ip;
    this.data = new Date();
    
  }
}