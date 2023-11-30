document.addEventListener('DOMContentLoaded', function () {
  const customInput = document.getElementById('customInput');
  const floatingKeypad = document.getElementById('floatingKeypad');
  let currentInputId; // Keep track of the current input
  let lastDevicePixelRatio = window.devicePixelRatio;
  let timeoutId;

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

  function handleResize() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const newDevicePixelRatio = window.devicePixelRatio;
      if (newDevicePixelRatio !== lastDevicePixelRatio) {
        lastDevicePixelRatio = newDevicePixelRatio;
        handleZoomEnd();
      }
      adjustKeypadPosition();
    }, 200); // Adjust the delay as needed
  }

  function handleZoomEnd() {
    // Code to handle the end of zooming
    // You can implement actions such as resizing or repositioning the keypad here
  }

  // Event listeners for input focus and blur
  customInput.addEventListener('focus', () => showFloatingKeypad('customInput'));
  customInput.addEventListener('blur', hideFloatingKeypad);

  // Event listener for window resize
  window.addEventListener('resize', handleResize);

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
