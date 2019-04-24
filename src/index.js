import  './styles/scss/main.scss'
import { Functions } from './app/functions';
let header = new Functions();
let firstHeading = header.getFirstHeading();
console.log(firstHeading);