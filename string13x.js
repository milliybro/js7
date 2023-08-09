`String13. "son ± son±... ± son" ko'rinishidagi arifmetik ifodani bildiruvchi satr berilgan. "+" belgisi o'rnida yo "+" yoki "-" bo'ladi. (Masalan: 7 + 3 - 2) Ifodaning qiymatini aniqlovchi programma tuzilsin. (son o'rnida butun son kiritiladi)
`

let task = "7+3-2";
let input = task.split("±").join(" + ").split(" ").join("");
let res = eval(input);
console.log(res);
