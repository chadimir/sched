document.addEventListener('DOMContentLoaded', function () {
  const inputValues1 = document.getElementById('inputValues1');
  const inputValues2 = document.getElementById('inputValues2');
  // Add more inputs as needed
  
  const customKeypad = document.getElementById('customKeypad');

  function showCustomKeypad(inputId) {
      currentInputId = inputId;
      customKeypad.style.display = 'grid';
  }

  function hideCustomKeypad() {
      customKeypad.style.display = 'none';
      document.getElementById(currentInputId).blur();
  }

  function appendToInput(value) {
      document.getElementById(currentInputId).value += value;
  }

  function backspace() {
      const currentInput = document.getElementById(currentInputId);
      currentInput.value = currentInput.value.slice(0, -1);
  }

  function clearInput() {
      document.getElementById(currentInputId).value = '';
  }

  function focusNextInput() {
      const currentInputIndex = parseInt(currentInputId.replace('inputValues', ''));
      const nextInputId = 'inputValues' + (currentInputIndex + 1);
      const nextInput = document.getElementById(nextInputId);

      if (nextInput) {
          hideCustomKeypad();
          nextInput.focus();
          showCustomKeypad(nextInputId);
      } else {
          hideCustomKeypad();
      }
  }

  inputValues1.addEventListener('focus', () => showCustomKeypad('inputValues1'));
  inputValues2.addEventListener('focus', () => showCustomKeypad('inputValues2'));
  inputValues3.addEventListener('focus', () => showCustomKeypad('inputValues3'));
  inputValues4.addEventListener('focus', () => showCustomKeypad('inputValues4'));
  inputValues5.addEventListener('focus', () => showCustomKeypad('inputValues5'));
  inputValues6.addEventListener('focus', () => showCustomKeypad('inputValues6'));
  inputValues7.addEventListener('focus', () => showCustomKeypad('inputValues7'));
  inputValues8.addEventListener('focus', () => showCustomKeypad('inputValues8'));
  inputValues9.addEventListener('focus', () => showCustomKeypad('inputValues9'));
  storeLocation.addEventListener('focus', () => hideCustomKeypad('storeLocation'));
  additionalInput.addEventListener('focus', () => hideCustomKeypad('additionalInput'));
  tableTitle.addEventListener('focus', () => hideCustomKeypad('tableTitle'));
  tableHeaderTitle.addEventListener('focus', () => hideCustomKeypad('tableHeaderTitle'));


  // Add more focus event listeners for additional inputs
  // ...

  const buttons = document.querySelectorAll('#customKeypad button');
  buttons.forEach(button => {
      button.addEventListener('mousedown', function (event) {
          event.preventDefault();
          const buttonText = button.textContent;

          if (buttonText === 'Done') {
              hideCustomKeypad();
          } else if (buttonText === '⌫') {
              backspace();
          } else if (buttonText === 'Next') {
              focusNextInput();
          } else {
              appendToInput(buttonText);
          }
      });
  });
});
