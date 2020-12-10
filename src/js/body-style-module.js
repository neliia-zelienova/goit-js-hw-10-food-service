import { load, save } from './local-storage-module';

const firstUpload = () => {
  const uloadData = load('body-them');
  if (uloadData === 'dark-theme') {
    addBodyStyle('dark-theme');
    const checkboxRef = document.querySelector('.theme-switch__toggle');
    checkboxRef.checked = true;
   }
}

const addBodyStyle = (them) => {
  if (them !== '') {
    const bodyRef = document.querySelector('body');

    if (them === 'light-theme') {
      bodyRef.classList.add('light-theme');
      if  (bodyRef.classList.contains('dark-theme')) bodyRef.classList.remove('dark-theme');
    } else if (them === 'dark-theme') {
      bodyRef.classList.add('dark-theme');
      if (bodyRef.classList.contains('light-theme')) bodyRef.classList.remove('light-theme');
    }    
    save('body-them', them);
  }

}

const changeThem = (event) => {
  const bodyRef = document.querySelector('body');
    if (bodyRef.classList.contains('dark-theme')) {
      addBodyStyle('light-theme')
   } else {
      addBodyStyle('dark-theme');
   }
}

export {
    firstUpload,
    changeThem
}