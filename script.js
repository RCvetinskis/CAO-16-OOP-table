"use strict"
// Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.addToTable = function () {
      const nameColumn = document.createElement('td');
      nameColumn.textContent = this.name;
      const surnameColumn = document.createElement('td');
      surnameColumn.textContent = this.surname;
      const tr = document.createElement('tr');
      tr.append(nameColumn, surnameColumn);
      document.querySelector('table > tbody').append(tr);
    };
  }
  
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()));
  
    const person = new Person(name, surname);
    person.addToTable();
  });
  