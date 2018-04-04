const request = require('request');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const path = require('path');


let fields = ['email', 'nome', 'ip', 'tipo', 'data_hora'];
const fieldsQuest = [
    'email',
    'tipo',
    'respostas["Você já teve problema(s) com análises de competências técnicas?"]',
    'respostas["Como você lidou ou lida com isso?"]',
    'respostas["Qual seria a solução ideal?"]'
];

const file = path.dirname(__dirname) + "/leads.csv";
const quest = path.dirname(__dirname) + "/validacao.csv";
const URL = "https://gamaassigment2.firebaseio.com/lista/leads.json";

function get(url) {
    return new Promise((result, reject) => {
        request.get(url, ((error, response, body) => {
            return error ? reject(error) : result(JSON.parse(body));
        }));
    });
}



function generetorCsv(fields, file) {
    
    
    
    get(URL).then(dados => {;
        const json = Object.keys(dados).map(id => dados[id]);
        
        const json2csvParser = new Json2csvParser({ fields });
        const csv = json2csvParser.parse(json);
        
        // remove file
        try {
            fs.unlinkSync(file);
        } catch (error) {}
        
        fs.writeFileSync(file, csv, { encoding: 'ascii' });
        console.log(`Seu arquivo foi salvo no diretorio ${file}`);
    }).catch( error => {
        console.log(`Um erro ocorreu: ${error}`);
    });
}


generetorCsv(fields, file);

generetorCsv(fieldsQuest, quest);
