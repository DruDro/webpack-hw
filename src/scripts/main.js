const builder = require('./elementBuilder');

const date = new Date(); 
const content = `<h1>${document.title}  <sup><small>${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}</small></sup></h1>`;

module.exports = builder('main', content, 'main');