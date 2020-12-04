const bodyStyleModule = require("./body-style-module");

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    JSON.parse(serializedState);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}

export {
    load, 
    save
}