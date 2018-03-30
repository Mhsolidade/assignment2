


class LeadController {
    constructor() {
        this.leadService = new LeadService();
    }

    adiciona(event) {
        event.preventDefault();


        let nome = $('#nome').val();
        let email = $('#email').val();
        let tipo = $('input[name=lead-alvo]:checked', '#myForm').val();
        let lead = new LeadModel(nome, email, tipo);
        this.leadService.create(lead)

    }
}

