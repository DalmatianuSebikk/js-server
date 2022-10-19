// aici importezi modulul

// const someFunction = require('./someModule.js');
// const {someOtherFunction} = require('./someModule');

// // acoladele de la someOtherFunction:
// // -> noi deconstruim un obiect si trebuie sa folosim acelasi nume
// someFunction();
// someFunction.someOtherFunction(); 
// // e ciudat ca apelezi functia din modul

// // o alta solutie este sa deconstruim modulul si sa luam 
// // someOtherFunction din el

// someOtherFunction();
import fetch from 'node-fetch';
// const fetch = require('node-fetch');

fetch('https://catfact.ninja/fact')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
});


