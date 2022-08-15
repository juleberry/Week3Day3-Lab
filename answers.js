// Group: Courtney Brown, Jule Berry, Lana N, Samita Karki

////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i+=2) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 ===0){ console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);}
  }

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const plantee = ["Plantee", "plant", 5000, "Mordor"]

plantee[3] = 5001;
console.log(plantee);

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]

wolfy[3] = "Gotham City";
console.log(wolfy);

const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]
dart.push("Hawkins");
console.log(dart);

wolfy.shift("Wolfy");
wolfy.push("Gameboy");
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (ninja of ninjaTurtles) {
  console.log(ninja.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies.indexOf('Titanic'));

favMovies.sort();

favMovies.pop();

favMovies.push('Guardians of the Galaxy');

favMovies.reverse();

favMovies.shift();

favMovies.unshift();

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",   
  ["Lucinda", "Jacc", "Neff", "Snoop"],         
  ["Petunia",
  ["Baked Goods", "Waldo"]]
];
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);
whereIsWaldo[1][2] = 'No One';
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////

let kittyTalk = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
let meow = Math.floor(Math.random() * 3);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    let meow = Math.floor(Math.random() * 3);
    console.log(kittyTalk[meow]);
  } else {
    console.log('Love me, pet me! HSSSSSS!');
  }
}