
class LeadService {
    constructor() {
        this.db = firebase.database();
    }

    async create(lead) {

        let novolead = Object.assign({}, lead);
        this.db.ref().child("/lista/leads3").push(novolead);
    }
}