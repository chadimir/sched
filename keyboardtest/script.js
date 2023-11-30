document.addEventListener('DOMContentLoaded', function () {
  const customInput = document.getElementById('customInput');
  const floatingKeypad = document.getElementById('floatingKeypad');
  let currentInputId; // Keep track of the current input
  let lastDevicePixelRatio = window.devicePixelRatio;
  let lastTouchDistance;

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
    const newDevicePixelRatio = window.devicePixelRatio;
    if (newDevicePixelRatio !== lastDevicePixelRatio) {
      lastDevicePixelRatio = newDevicePixelRatio;
      handleZoomEnd();
    }
    adjustKeypadPosition();
  }

  function handlePinch(event) {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];

    if (touch1 && touch2) {
      const currentTouchDistance = Math.hypot(
        touch1.clientX - touch2.clientX,
        touch1.clientY - touch2.clientY
      );

      if (lastTouchDistance) {
        const zoomFactor = currentTouchDistance / lastTouchDistance;
        adjustKeypadOnPinch(zoomFactor);
      }

      lastTouchDistance = currentTouchDistance;
    }
  }

  function handlePinchEnd() {
    lastTouchDistance = undefined;
  }

  function adjustKeypadOnPinch(zoomFactor) {
    // Adjust the size of the keypad based on the pinch gesture
    const desiredPercentage = 50; // Set the desired percentage
    const keypadSize = (desiredPercentage / 100) * window.innerWidth * zoomFactor;

    // Set the size of the keypad container
    floatingKeypad.style.width = `${keypadSize}px`;
    floatingKeypad.style.height = `${keypadSize}px`;

    // You can also adjust other styles like font size if needed
    const keypadButtons = document.querySelectorAll('#floatingKeypad button');
    const adjustedButtonFontSize = 16 * zoomFactor;

    keypadButtons.forEach(button => {
      button.style.fontSize = `${adjustedButtonFontSize}px`;
    });
  }

  // Event listeners for input focus and blur
  customInput.addEventListener('focus', () => showFloatingKeypad('customInput'));
  customInput.addEventListener('blur', hideFloatingKeypad);

  // Event listener for window resize
  window.addEventListener('resize', handleResize);

  // Event listeners for touch events
  document.addEventListener('touchstart', handlePinch);
  document.addEventListener('touchmove', handlePinch);
  document.addEventListener('touchend', handlePinchEnd);

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
