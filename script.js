// Q1
const characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);
}

// Q2
const firstName = 'Harry';
const house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

// Q3
const characterName = 'Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

// Q4
const spell = ' Expelliarmus ';
console.log(spell.trim());

// Q5
const quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(11, 16));

// Q6
const firstName2 = 'Ron';
const lastName = 'Weasley';
console.log(firstName2.concat(' ', lastName));

// Q7
const sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));

// Q8
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

// Q9
const spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

// Q10
const professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
const selectedProfessors = professors.slice(1, 3);
console.log(selectedProfessors);

// Q11
const students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);

// Q12
const phrase = ' Mischief Managed ';
console.log(phrase.trim().toLowerCase().concat(' - Harry'));

// Q13
const wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

// Q14
const message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
const extracted = message.slice(11, 19);
console.log(extracted.concat(' Castle'));

