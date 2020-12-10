import { load, save } from './local-storage-module';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const firstUpload = () => {
  const uloadData = load('body-them');
  if (uloadData === Theme.DARK) {
    addBodyStyle(Theme.DARK);
    const checkboxRef = document.querySelector('.theme-switch__toggle');
    checkboxRef.checked = true;
   }
}

const addBodyStyle = (them) => {
  if (them !== '') {
    const bodyRef = document.querySelector('body');

    if (them === Theme.LIGHT) {
      bodyRef.classList.add(Theme.LIGHT);
      if  (bodyRef.classList.contains(Theme.DARK)) bodyRef.classList.remove(Theme.DARK);
    } else if (them === Theme.DARK) {
      bodyRef.classList.add(Theme.DARK);
      if (bodyRef.classList.contains(Theme.LIGHT)) bodyRef.classList.remove(Theme.LIGHT);
    }    
    save('body-them', them);
  }

}

const changeThem = (event) => {
  const bodyRef = document.querySelector('body');
    if (bodyRef.classList.contains(Theme.DARK)) {
      addBodyStyle(Theme.LIGHT)
   } else {
      addBodyStyle(Theme.DARK);
   }
}

export {
    firstUpload,
    changeThem
}