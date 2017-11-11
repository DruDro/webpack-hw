import {header} from './modules/header/header';
import {footer} from './modules/footer/footer';
import {main} from  './modules/main/main';
import $ from 'jquery';

import './app.scss';


const body = $('body');
$(function(){
  body.append(header, main, footer);
});