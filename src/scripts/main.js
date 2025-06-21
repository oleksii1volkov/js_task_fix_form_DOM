'use strict';

// write code here
const inputs = document.getElementsByTagName('input');

for (const input of inputs) {
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = labelText;

  input.placeholder = labelText;

  input.parentNode.insertBefore(label, input);
}
