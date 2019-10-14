class Card {
    constructor (name, strength){
        this.name = name;
        this.strength = strength;
    }
    name(){
        return this.name
    }
    strength(){
        return this.strength
    }
};

class Superhero extends Card {
    constructor (name, strength){
    super(name, strength)
    }
};

const hulk = new Superhero ("Hulk", 30);
const batman = new Superhero ("Batman", 29);
const thor = new Superhero ("Thor", 26);
const antman = new Superhero ("Ant Man", 20);
const superman = new Superhero ("Superman", 28);
const captainmarvel = new Superhero ("Captain Marvel", 25);
const wolverine = new Superhero ("Wolverine", 21);
const wonderwoman = new Superhero ("Wonder Woman", 22);
const supergirl = new Superhero ("Super Girl", 16);
const blackpanther = new Superhero ("Black Panther", 15);
const ironman = new Superhero ("Iron Man", 17);
const aquaman = new Superhero ("Aqua Man", 14);
const robin = new Superhero ("Robin", 11);
const nightwing = new Superhero ("Night Wing", 6);
const daredevil = new Superhero ("Daredevil", 12);
const arrow = new Superhero ("Green Arrow", 13);
const hawkeye = new Superhero ("Hawkeye", 7 );
const loki = new Superhero ("Loki", 4);
const starlord = new Superhero ("Star Lord", 3);
const batgirl = new Superhero ("Batgirl", 1);
const batwoman = new Superhero ("Batwoman", 23);
const catwoman = new Superhero ("Catwoman", 10);
const elektra = new Superhero ("Elektra", 9);
const flash = new Superhero ("Flash", 7);
const storm  = new Superhero ("Storm", 2);
const blackcanary = new Superhero ("Black Canary", 8);
const wasp = new Superhero ("Wasp", 5);
const jeanGrey = new Superhero ("Jean Grey", 14);
const raven = new Superhero ("Raven", 19);
const beast = new Superhero ("Beast", 18)

let player1 = [batman, storm, elektra, hulk, starlord, loki, wasp, hawkeye, aquaman, supergirl, blackpanther, batwoman, daredevil, jeanGrey, raven];
let player2 = [catwoman, arrow, batgirl, ironman, robin, nightwing, thor, blackcanary, flash, wolverine, antman, wonderwoman, captainmarvel, superman, beast];

if (player1[1].strength > player2[1].strength) {
    console.log("Player One has won.");
}
else {
    console.log("Player Two has won.")
};
