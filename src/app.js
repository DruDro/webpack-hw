const header = require('./modules/header/header');
const footer = require('./modules/footer/footer');
const main = require('./modules/main/main');
const $ = require('jquery');
const body = $('body');

require('./app.scss');

$(function(){
  body.append(header, main, footer);
});