import './styles.css';
import menuTemplate from './templates/list-item.hbs';


//menuTemplate('TestName')

const menuData = {
  name: 'Eat it createElement, templates rule!',
};

const markup = menuTemplate('TestName'); // html разметка с подставленным значениями

const source = document.querySelector('.js-menu');

source.innerHTML = markup;
