function map(f, a) {
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
  }
  
  const chars = [
    /* sorteio de códigos da tabela ASCII */
   String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65)), /*formula para pegar um numero entre dois valores: Math.random() * (max - min) + min*/
   String.fromCharCode(parseInt(Math.random() * (122 - 97) + 97)),
   String.fromCharCode(parseInt(Math.random() * (64 - 58) + 58)), 
   String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65)),
   String.fromCharCode(parseInt(Math.random() * (122 - 97) + 97)) 
  ]; /*ordem e tipo de caracteres sorteados
      index 0 = letra maiúscula
      index 1 = letra minúncula
      index 2 = caracter especial [58-64]
      index 3 = letra maiúscula
      index 4 = letra maiúscula
   */
  
  const array = map(
      function (s) {
        return s + parseInt(Math.random() * 9);
      },
      chars
    )
  
  const senha = array.join('');
  
  console.log(senha);
  
  
  /*
  ## Referencias
  - Unicode values to strings: (link)[https://www.w3schools.com/jsref/jsref_fromcharcode.asp]
  - Documentação Math.random(): (link)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random]
  - Documentação String.fromCharCode(): (link)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt]
  - ASCII CODES — FULL LIST OF CHARACTERS, LETTERS, SYMBOLS & SIGNS: (link)[https://smartwebworker.com/ascii-codes/]
  
  */