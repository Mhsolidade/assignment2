# GAMA Assigment 2

### Metodologia 
> **Padrão:** MVC
> **Framework:** Boostrap, JQuery
> **Minificação:** Não realizada, por questões didática.
> **Persistência:** Através do Firebase Database, seguindo a [documentação](https://firebase.google.com/docs/database/web/read-and-write?hl=pt-br).
> **Desenvolvedores:** Matheus Santos, Vagner Silva
>  **Método de Desenvolvimento:**  Optamos por desenvolver todo o projeto com  acompanhamento em tempo real, através de hangouts, para melhor troca de experiência.
>  **Link da aplicação:** [designermatch.com.br](https://designermatch.com.br/).
> 
### Upload do projeto

**Requisitos:**   Ter um conta Firebase e Nodejs instaldo.
No console do Firebase crie um novo projeto. https://console.firebase.google.com/u/1/


##### Passos

instalar o Firebase tools
>> npm install -g firebase-tools

Efetuar o login no Firebase no terminal
>> firebase login

No diretório do projeto. Iniciar as configurações do Firebase, para **hosting** e **FireDatabase**
>>  firebase init

Configure o arquivo database.rules.json, para permitir acesso de leitura e gravação no banco de dados.

Por fim, realizar o deploy
>> firebase deploy


### Exportar CSV
> **Pré-requisito:** npm install
> **Comando:** npm run csv
>
Arquivo CSV (leads.csv) será gerado na raiz do projeto.