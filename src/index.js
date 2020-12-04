import './styles.css';
import { firstUpload, changeThem } from './js/body-style-module.js';


console.log(labelRef);


firstUpload();


const labelRef = document.querySelector('#theme-switch-toggle');
labelRef.addEventListener('click', () => changeThem());