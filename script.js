function copy(){
  let copyText = document.getElementById('result_output').innerText;
  navigator.clipboard.writeText(copyText)
}

function swapFunction() {
  let currentFunc = document.getElementById('functionInput');
  let currentFnName = document.getElementById("currentFn");
  let res = document.getElementById("result_output");
    if (currentFnName.innerText === 'To Encrypt') {
      currentFnName.innerText = 'To Decrypt';
      currentFunc.value = '';
      res.innerText = '';
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.id = 'functionInput';
        newInput.addEventListener('input', decryptAndDisplay);
      currentFunc.replaceWith(newInput);
    } else if (currentFnName.innerText === 'To Decrypt') {
      currentFnName.innerText = 'To Encrypt';
      currentFunc.value = '';
      res.innerText = '';
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.id = 'functionInput';
        newInput.addEventListener('input', encryptAndDisplay);
      currentFunc.replaceWith(newInput);
    }
}

function encryptAndDisplay() {
  let inputText = document.getElementById('functionInput').value;
  let encryptedText = cipher(inputText);
  document.getElementById('result_output').innerText = encryptedText;
}

function decryptAndDisplay() {
  let inputText = document.getElementById('functionInput').value;
  let decryptedText = decipher(inputText);
  document.getElementById('result_output').innerText = decryptedText;
}

function cipher(text) {
  let newarr = [];
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 1040 && charCode <= 1105) {
      newarr.push(String.fromCharCode((charCode - 963) * 5));
    } else if (charCode === 46) {
      newarr.push(String.fromCharCode(46));
    } else if (charCode === 32) {
      newarr.push(String.fromCharCode(32));
    } else if (charCode === 44) {
      newarr.push(String.fromCharCode(44));
    }
  }
  return newarr.join('');
}

function decipher(text) {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i); 
      arr.push(String.fromCharCode((charCode  / 5) + 963));
      if (charCode === 32) {
      arr.push(String.fromCharCode(32));
    } else if (charCode === 46 ) {
      arr.push(String.fromCharCode(46));
    } else if (charCode === 44) {
      arr.push(String.fromCharCode(44));
    }
  }
  return arr.join('').replaceAll('ω','')
}


