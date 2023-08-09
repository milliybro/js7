`String24. Probel bilan ajratilgan o'zbekcha so'zlardan iborat str nomli satr berilgan. Satrdagi eng uzun so'zni qaytaruvchi getMaxOfString(str) nomli funksiya tuzilsin.`

const getMaxOfString = (str) => {
  let arr = str.split(" ");
  let max = arr[0];
  for (let el of arr) {
    if (el.length > max.length) {
      max = el;
    }
  }
  return max;
};

let res = getMaxOfString(
  "O'ZBEKISTON BUYUK DAVLAT! UNING YOSHLARI HAM BUYUKDIR!"
);

console.log(res);