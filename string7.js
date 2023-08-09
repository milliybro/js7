`String7. Satr berilgan. Satrdagi raqamlar sonini aniqlovchi programma tuzilsin. (for of va isNaN dan foydalaning !)`;

function Char(str) {
  let count = 0;

  for (let el of str) {
    if (!isNaN(el)) {
      count++;
    }
  }

  return count;
}

let res = Char("Milliy54674Bro56");
console.log(res+` ta raqam bor`);
