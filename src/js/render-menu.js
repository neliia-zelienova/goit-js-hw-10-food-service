import menu from '../menu.json';
import menuTemplate from '../templates/list-item.hbs';

export default function renderMenu() {
    const menuUlRef = document.querySelector('.js-menu');
    menuUlRef.insertAdjacentHTML('beforeend', menu.map((item) => menuTemplate(item)).join(''));
}