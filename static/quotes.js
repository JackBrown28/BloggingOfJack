//http://www.computerhope.com/j15.htm
            
quotes = [];
game = [];
quotes[0] = "What is better? To be born good or to overcome your evil nature through great effort?" ;
game[0] = "Paarthurnax, Elder Scrolls V: Skyrim";

quotes[1] = "The right man in the wrong place can make all the difference in the world.";
game[1] = "G-Man, Half-Life 2";

quotes[2] = "It’s dangerous to go alone, take this!";
game[2] = "Old Man, The Legend of Zelda";

quotes[3] = "Protocol one: link to Pilot. Protocol two: uphold the mission. Protocol three: protect the Pilot.";
game[3] = "BT-7274, Titanfall 2";

quotes[4] = "Snake? Snake? SNAAAAAAAAKE!!!";
game[4] = "The Colonel, Metal Gear Solid 2";

quotes[5] = "Science isn’t about why! It’s about why not!";
game[5] = "Cave Johnson, Portal 2";

quotes[6] = "Send me out...with a bang.";
game[6] = "Sgt. Avery Johnson, Halo 3";

quotes[7] = "I've struggled a long time with survivin', but no matter what you have to find something to fight for.";
game[7] = "Joel, The Last of Us";

quotes[8] = "We all make choices in life, but in the end our choices make us.";
game[8] = "Andrew Ryan, Bioshock";

quotes[9] = "The best solution to a problem is usually the easiest one...";
game[9] = "GLaDOS, Portal 2";

quotes[10] = "Your fruit killin' skills are remarkable";
game[10] = "Gaz, Call of Duty 4: Modern Warfare";

quotes[11] = "Bring me a bucket and I'll show you a bucket";
game[11] = "Psycho, Borderlands 2";

quotes[12] = "Bring me a bucket and I'll show you a bucket";
game[12] = "Psycho, Borderlands 2";

quotes[13] = "Get over here!";
game[13] = "Scorpion, Mortal Kombat";

quotes[14] = "Often when we guess at others' motives, we reveal only our own.";
game[14] = "Mara Sov, Destiny";

quotes[15] = "Grass grows, birds fly, sun shines, and brother, I hurt people.";
game[15] = "The Scout, Team Fortress 2";


index = Math.floor(Math.random() * quotes.length);

document.write("<DT>" + "\"" + quotes[index] + "\"</DT>\n");
document.write("<DD>" + "-- " + game[index] + "</DT>\n");
