


class LeadController {
    constructor() {
        this.leadService = new LeadService();
    }

    adiciona(event) {
        event.preventDefault();


        let nome = $('#nome').val();
        let email = $('#email').val();
        let social = $('#social').val();
        let tipo = $('#lead-alvo').val(); //$('input[name=lead-alvo]:checked', '#myForm').val();
        let lead = new LeadModel(nome, email, social, tipo);
        // this.leadService.create(lead);

        $('#myForm')[0].reset();

        $('#obrigado').modal('show');
        return false;

    }
}

