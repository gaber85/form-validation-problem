// Input fields
const getElement = id => document.getElementById(id);
const email = getElement('email');
const password = getElement('password');
const color = getElement('colour');
const animalParent = getElement('bear').parentElement;
const animals = ['bear', 'tiger', 'snake', 'donkey'].map(animal => getElement(animal));
const tiger = getElement('tiger');
const typeOfTiger = getElement('tiger_type');
const newDiv = document.createElement('div');

// Adds error styling to parent class and red helper text under field
function isInvalid(parentElement, text) {
    parentElement.className = 'error';
    parentElement.lastElementChild.insertAdjacentElement('afterend', newDiv);
    parentElement.lastElementChild.className = 'helper-text';
    parentElement.lastElementChild.id = 'helper-text';
    parentElement.lastElementChild.innerHTML = text;
    return false;
  }

//  Removes error class from parent and removes heper-text node
  function isValid(parentElement) {
    parentElement.className = '';
    if (parentElement.lastElementChild.id === 'helper-text') {
      parentElement.lastElementChild.remove();
    }
    return true;
  }