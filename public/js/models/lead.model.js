class LeadModel {
  constructor(nome, email, social, tipo) {
    this.email = email;
    this.nome = nome;
    this.social = social;
    this.ip = HelperService.ip;
    this.tipo = tipo;
    this.data = HelperService.data;
    this.respostas = this._requestResponse;
  }

  get _requestResponse() {

    const rq = {};
    let resp;
    // $('input[name=lead-alvo]:checked', '#myForm').val()
    const op = $('#opcao label.active input').val();   //$('input[name="problema"]:checked', "#myForm").val();
    const comoLidar = $("#comoLidar").val();

    op == 'Sim' ?  resp = `${op}, ${comoLidar}` : resp = `${op}`;
    rq['Você já teve problema com análise de competências técnicas em um processo seletivo?'] = resp;
    rq['qual seria a solução ideal'] = $("#solucao").val();

    console.log(rq);
    return rq;
  }

 


}

