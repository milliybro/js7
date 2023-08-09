`String18. S1 va S2 satrlari berilgan. S1 satrida birinchi uchragan S2 satrini o'chirib tashlovchi programma tuzilsin. Agar S1 satrida S2 satri uchramasa S1 satri o'zgarishsiz qoldirilsin.`;

let S1 = "O'zbekiston buyuk davlat ! Uning yoshlari ham buyukdir !";
let S2 = "buyuk";

let pos = S1.indexOf(S2);

let part1 = S1.slice(0, pos);
let part2 = S1.slice(pos + S2.length);

let res = part1 + part2;

console.log(res);
