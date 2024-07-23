function stringToBinary(input) {
    return input
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  }
  
  function binaryToString(binary) {
    return binary
      .split(' ')
      .map(bin => String.fromCharCode(parseInt(bin, 2)))
      .join('');
  }
  
  function formatAndDisplay(output) {
    const outputElement = document.getElementById('output');
    outputElement.innerText = output;
    outputElement.style.whiteSpace = 'pre-wrap'; // Ensure formatting is preserved
  }
  
  document.getElementById('toBinaryBtn').addEventListener('click', () => {
    const input = document.getElementById('inputField').value;
    const output = stringToBinary(input);
    formatAndDisplay(output);
  });
  
  document.getElementById('toStringBtn').addEventListener('click', () => {
    const input = document.getElementById('inputField').value;
    const output = binaryToString(input);
    formatAndDisplay(output);
  });
  