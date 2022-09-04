# Gerador de Senhas
Algorimo criado com o objetivo de entender o funcionamento desse trecho de código:
## Código
```javascript
function map(f, a) {
    var result = []; // Cria um novo Array
    var i;
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
  }
```
Trata-se de uma função que recebe dois parametros: uma outra função e um array.<br> A função passada por parametro
é executada em um laço _for_, onde esta também rebece uma parametro que é um item do array.<br>
## Execução
Aqui vemos o trecho do código, onde ocorre a execução da função:
```javascript
/* parametros: função: function(s), array: chars */
Array 
const array = map(
      function (s) {
        return s + parseInt(Math.random() * 9);
      },
      chars
    )
```

## Material de leitura - funções e métodos utilizados no código
- Unicode values to strings: [link](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)
- Documentação Math.random(): [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- Documentação String.fromCharCode(): [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- ASCII CODES — FULL LIST OF CHARACTERS, LETTERS, SYMBOLS & SIGNS: [link](https://smartwebworker.com/ascii-codes/)

## Código completo
[Clique aqui!](/gerador-de-senhas/index.js)
