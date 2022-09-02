function dbClient() {

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
  
  
    function getAllPersons() {
      return list;
    }
  
  
    function removePerson(name) {
      for (const person of list) {
        if (person.name === name) {
          console.log(` ${person.name} was deleted!`)
          return list.splice(person.index, 1)
        }
      }
      return console.error(`${name} not found!`);
    }
  
  
    function updatePesonalData(name, p, value) {
      for (const person of list) {
        if (person.name === name) {
          switch (p) {
            case 'name':
              person.name = value
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
        else return console.error(`${name} not found!`);
      }
    }
  
    return {
      add: addPerson,
      get: getAllPersons,
      remove: removePerson,
      update: updatePesonalData
    }
  
  }
  
  
  const test = dbClient();
  
  test.add('Nayana', 'Loivos', 37);
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.remove('Nayana');
  test.remove('Ulisses');
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.add('Ulisses', 'Silvério', 28);
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.update('Ulisses', 'name', 'Ronaldo');
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.update('Ulisses', 'idade', 18);
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.update('Ronaldo', 'age', 45);
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.update('Ronaldo', 'last-name', 'Lima');
  console.log(JSON.stringify(test.get()));
  console.log('')
  
  test.update('Ronaldo', 'last name', 'Lima');
  console.log(JSON.stringify(test.get()));
  test.remove('ronaldo');
  
  
  