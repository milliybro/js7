`String19. S1 va S2 satrlari berilgan. S1 satrida uchragan barcha S2 satrlarini o'chirib tashlovchi programma tuzilsin. Agar S1 satrida S2 satri uchramasa S1 satri o'zgarishsiz qoldirilsin.`;

let S1 = "O'zbekiston buyuk davlat ! Uning yoshlari ham buyukdir !";
let S2 = "O'zbekiston";

let pos = S1.lastIndexOf(S2);

let part1 = S1.slice(0, pos);
let part2 = S1.slice(pos + S2.length);

let res = part1 + part2;

console.log(res);
