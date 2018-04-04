
const request = require('request');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const path = require('path');

var jsonexport = require('jsonexport');
// {       label: 'some label', // (optional, column will be labeled 'path.to.something' if not defined)   
//     value: 'path.to.something', // data.path.to.something    
//    default: 'NULL' // default if value is not found (optional, overrides `defaultValue` for column)  
//    },


const file = path.dirname(__dirname) + "/quest.csv";
const URL = "https://gamaassigment2.firebaseio.com/lista/leads.json";

const fields = [
    'email',
    'respostas["Você já teve problema(s) com análises de competências técnicas?"]',
    'respostas["Como você lidou ou lida com isso?"]',
    'respostas["Qual seria a solução ideal?"]'
];

function get(url) {
    return new Promise((result, reject) => {
        request.get(url, ((error, response, body) => {
            return error ? reject(error) : result(JSON.parse(body));
        }));
    });
}


get(URL).then(dados => {

    const json = Object.keys(dados).map(id => dados[id]);
    const email = 'vagner.silva@designermatch.com.br';
    // const respostas = json.map(resp => resp.respostas); 

 
    jsonexport(json,function(err, csv){
        if(err) return console.log(err);
       /// console.log(csv);
           // remove file
    try {
        fs.unlinkSync(file);
    } catch (error) { }

    //   console.log(csv) // ok;

    fs.writeFileSync(file, csv, { encoding: 'ascii' });
    console.log(`Seu arquivo foi salvo no diretorio ${file}`);
    });






    // const json2csvParser = new Json2csvParser({ fields });
    // const csv = json2csvParser.parse(json);

    // // remove file
    // try {
    //     fs.unlinkSync(file);
    // } catch (error) { }

    // //   console.log(csv) // ok;

    // fs.writeFileSync(file, csv.toString(), { encoding: 'ascii' });
    // console.log(`Seu arquivo foi salvo no diretorio ${file}`);


}).catch(error => {
    console.log(`Um erro ocorreu: ${error}`);
});
