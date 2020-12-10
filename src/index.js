import './styles.css';
import { firstUpload, changeThem } from './js/body-style-module.js';
import renderMenu from './js/create-product-card.js';

firstUpload();
const labelRef = document.querySelector('#theme-switch-toggle');
labelRef.addEventListener('click', () => changeThem());

renderMenu();
