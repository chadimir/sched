document.addEventListener('DOMContentLoaded', function () {
  const customInput = document.getElementById('customInput');
  const floatingKeypad = document.getElementById('floatingKeypad');
  let currentInputId; // Keep track of the current input

  function showFloatingKeypad(inputId) {
    currentInputId = inputId;
    floatingKeypad.style.display = 'grid'; // Change to 'grid' to show the keypad
    adjustKeypadPosition();
  }

  function hideFloatingKeypad() {
    floatingKeypad.style.display = 'none';
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

  function adjustKeypadPosition() {
    const windowHeight = window.innerHeight;
    const floatingKeypadHeight = floatingKeypad.offsetHeight;
    const floatingKeypadTop = windowHeight - floatingKeypadHeight;
    floatingKeypad.style.top = `${floatingKeypadTop}px`;
  }

  // Event listeners for input focus and blur
  customInput.addEventListener('focus', () => showFloatingKeypad('customInput'));
  customInput.addEventListener('blur', hideFloatingKeypad);

  // Event listeners for window resize and scroll
  window.addEventListener('resize', adjustKeypadPosition);
  window.addEventListener('scroll', adjustKeypadPosition);

  // Event listeners for keypad buttons
  const buttons = document.querySelectorAll('#floatingKeypad button');
  buttons.forEach(button => {
    button.addEventListener('mousedown', function (event) {
      event.preventDefault();
      const buttonText = button.textContent;

      if (buttonText === 'Done') {
        hideFloatingKeypad();
      } else if (buttonText === '⌫') {
        backspace();
      } else {
        appendToInput(buttonText);
      }
    });
  });
});
