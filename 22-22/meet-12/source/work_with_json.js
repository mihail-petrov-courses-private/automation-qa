// Взимане на информация от JSON файл
// директно с помоща на require()
// ** 
// const config = require('./config.json');
// console.log(config.numberOfRestartsForToday);


const fs = require('fs');
const fileData = fs.readFileSync('./config.json');

const file      = fileData + '';
const jsObject  = JSON.parse(file);
console.log(jsObject);
console.log(jsObject.numberOfRestartsForToday);