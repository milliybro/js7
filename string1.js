`String1. n butun soni berilgan (1 <= n <= 26). Lotin alfavitidagi dastlabki n ta katta harflarni chiqaruvchi programma tuzilsin.`;

function getString() {
  let str = "";
  for (let i = 65; i <= 90; i++) {
    str += String.fromCharCode(i);
  }
  return str;
}
let res = getString();

console.log(res);
