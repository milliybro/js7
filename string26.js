`String26. Probel bilan ajratilgan kichik harfli so'zlardan iborat satr berilgan. Satrdagi har bir so'zning birinchi harfini kattasi bilan almashtiruvchi programma tuzilsin.`;

function Str(string) {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let upperCases = word.charAt(0).toUpperCase() + word.slice(1);

    words[i] = upperCases;
  }

  let Capitalized = words.join(" ");

  return Capitalized;
}

let res = Str("o'zbek, milliyBro, shohruh, react");
console.log(res);
