class LeadModel {
  constructor(nome, email, tipo) {
    this.email = email;
    this.nome = nome;
    this.ip = HelperService.ip;
    this.tipo = tipo;
    this.data_hora = HelperService.data;
    this.respostas = this._requestResponse;
  }

  get _requestResponse() {

    const rq = {};
    // let resp;
    // // $('input[name=lead-alvo]:checked', '#myForm').val()
    // const op = $('#opcao label.active input').val();   //$('input[name="problema"]:checked', "#myForm").val();
    // const comoLidar = $("#comoLidar").val();

    // op == 'Sim' ?  resp = `${op}, ${comoLidar}` : resp = `${op}`;
    rq['Você já teve problema(s) com análises de competências técnicas?'] =  $("#problema").val().replace(/[\t\n]+/g,' ');
    rq['Como você lidou ou lida com isso?'] = $("#comoLidar").val().replace(/[\t\n]+/g,' ');
    rq['Qual seria a solução ideal?'] = $("#solucao").val().replace(/[\t\n]+/g,' ');

    return rq;
  }

 


}

