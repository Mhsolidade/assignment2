const request = require('request');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const path = require('path');


const fields = ['email', 'nome', 'ip', 'tipo', 'data_hora'];



async function generetorCsv() {
  request.get("https://gamaassigment2.firebaseio.com/lista/leads.json", function (error, response, body) {  
            const dados = JSON.parse(body);
            const json = Object.keys(dados).map(id => dados[id]);
            
            const json2csvParser = new Json2csvParser({ fields });
            const csv = json2csvParser.parse(json);
            try {
                fs.unlinkSync('../leads.csv');
                
            } catch (error) {
                
            }
            fs.writeFileSync('../leads.csv',csv,"utf8" );
            console.log(`seu arquivo foi salvo no diretorio ${path.join(__dirname,"../leads.csv")}` );
    });

}

generetorCsv();