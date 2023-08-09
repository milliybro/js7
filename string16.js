`String16. C belgisi va S1, S2 satrlari berilgan. S1 satriga shu satrda uchragan har bir C belgisidan oldin S2 satrini qo'shuvchi programma tuzilsin.`;

function Char(S1, S2, C) {
  let res = [];

  for (let i = 0; i < S1.length; i++) {
    if (S1[i] === C) {
      res.push(S2);
    }
    res.push(S1[i]);
  }
  return res.join("");
}

let S1 = "MilliyBro";
let S2 = "Shohruh";
let C = "i";
let res = Char(S1, S2, C);
console.log(res);
