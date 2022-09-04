# Cadastro de Pessoas
este algoritmo foi criado a partir do **Module Design Pattern**,</br>
um Pattern onde é criado uma função principal e dentro dela há várias outras funções separadas por responsabilidade.
****
## Vantagens do Module Design Pattern:
- Os módulos são uma parte integrante da arquitetura de qualquer aplicativo robusto e normalmente ajudam a manter as unidades de código para um projeto bem separadas e organizadas.</br>
- Parte de código encapsulado que tem seu próprio escopo definido, bem como acesso ao escopo global.</br>
- Ajuda a alcançar o encapsulamento, bem como a abstração com membros privados e membros expostos publicamente.</br>
- Ajuda a proteger partes específicas do escopo global.
****
## Função principal
```javascript
function dbClient() {}
```
## Modulos da aplicação
### Create
```javascript
    const list = [];
  
    function addPerson(name, lastName, age) {
      if (!(name && lastName && age)) {
        return console.error('invalid input');;
      }
      const person = {};
      person.name = name;
      person.lastName = lastName;
      person.age = age;
      list.push(person);
      return
    }
```
### Read
```javascript
    function getAllPersons() {
      return list;
    }
```

### Update
```javascript
function updatePesonalData(name, p, value) { 
      for (const person of list) {
        if (person.name === name) { /* Primeiro parametro = nome da pessoa */
          switch (p) { /* Segundo parametro = propriedade a ser alterada */
            case 'name':
              person.name = value /* Terceiro parametro = novo valor */
              break;
            case 'last name':
              person.lastName = value
              break;
            case 'age':
              person.age = value
              break;
            default:
              console.error('invalid input');
              break;
          }
  
        }
```

### Delete
```javascript

    function removePerson(name) {
      for (const person of list) {
        if (person.name === name) {
          console.log(` ${person.name} was deleted!`)
          return list.splice(person.index, 1)
        }
      }
      return console.error(`${name} not found!`);
    }
```
****
## Retorno da função principal
```javascript
    return { /*objeto com todas as instancias dos métodos da função principal*/
      add: addPerson,
      get: getAllPersons,
      remove: removePerson,
      update: updatePesonalData
    }
```
## Utilização Funções
```javascript
const test = dbClient();

test.add('name', 'lastName', 21);
test.remove('name');
test.update('name', 'property', 'Value');
test.get();
```
## Código completo [Clique aqui!](./cadastro-de-pessoas/index.js)
